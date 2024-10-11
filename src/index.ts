import {RaftClient} from "./proto/server.client";
import {GrpcTransport} from "@protobuf-ts/grpc-transport";
import {ChannelCredentials} from "@grpc/grpc-js";
import {BulkIndexResponse, SearchRequest} from "./proto/server";


type TSearchResult = {
	fetch: string;
	count: number;
	data: any[];
	elapsed: string;
	error: {
		[key: string]: string;
	};
	facets: {
		[key: string]: any;
	};
	hits: number;
	max_score: number;
}

type TSearchRequest = {
	query?: {
		input?: string;
		strict?: boolean;
	};
	phrase?: {
		field?: string;
		terms?: any | null;
		boost?: number;
		fuzzyness?: number;
	};
	match_phrase?: {
		input?: string;
		field?: string;
		boost?: number;
		fuzzyness?: number;
	};
	pagination?: {
		offset?: number;
		limit?: number;
	};
	facets?: Array<{
		name?: string;
		field?: string;
		size?: number;
		type?: string;
		ranges?: Array<{
			identifier?: string;
			start?: number;
			end?: number;
		}>;
	}>;
	filter?: {
		[key: string]: any;
	};
	sort_by?: Array<{
		field?: string;
		order?: string;
	}>;
};

const defaultSearchRequest: TSearchRequest = {
	query: {
		input: "",
		strict: false,
	},
	phrase: {
		field: "",
		terms: null,
		boost: 0,
		fuzzyness: 0,
	},
	match_phrase: {
		input: "",
		field: "",
		boost: 0,
		fuzzyness: 0,
	},
	pagination: {
		offset: 0,
		limit: 10,
	},
	facets: [],
	filter: {},
	sort_by: [],
};

export default class CasperSearch {
	private c: RaftClient
	constructor(url: string) {
		this.c = new RaftClient(new GrpcTransport({
			host: url,
			channelCredentials: ChannelCredentials.createInsecure()
		}))
	}
	
	search(index: string, props: TSearchRequest): Promise<TSearchResult> {
		return new Promise((resolve, reject) => {
			const startTime = new Date().getTime();
			this.c.search(SearchRequest.create({
				index,
				searchRequest: new Uint8Array(Buffer.from(JSON.stringify({...defaultSearchRequest,...props})))
			})).then((resp)=>{
				const currentTime = new Date().getTime();
				if (resp.response?.searchResult) {
					const parsed = JSON.parse(Buffer.from(resp.response.searchResult).toString())
					const res = parsed as TSearchResult
					res.fetch = (currentTime - startTime).toFixed(2) + 'ms'
					resolve(res)
				} else {
					reject(resp.response)
				}
			}).catch(reject)
		})
	}
	
	createIndex(schema: {[key: string]: any}) {
		return new Promise((resolve, reject) => {
			this.c.createIndex({
				indexRequest: new Uint8Array(Buffer.from(JSON.stringify(schema)))
			}).then(resp=>{
				resolve(resp.response)
			}).catch(reject)
		})
	}
	
	bulkIndex(index: string, data: {[key: string]: any}[]): Promise<BulkIndexResponse> {
		return new Promise((resolve, reject) => {
			this.c.bulkIndex({
				index,
				data: data.map(prop=>new Uint8Array(Buffer.from(JSON.stringify(prop))))
			}).then(resp=>{
				resolve(resp.response)
			}).catch(reject)
		})
	}
}
