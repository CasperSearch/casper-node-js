"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_client_1 = require("./proto/server.client");
const grpc_transport_1 = require("@protobuf-ts/grpc-transport");
const grpc_js_1 = require("@grpc/grpc-js");
const server_1 = require("./proto/server");
const defaultSearchRequest = {
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
class CasperSearch {
    constructor(url) {
        this.c = new server_client_1.RaftClient(new grpc_transport_1.GrpcTransport({
            host: url,
            channelCredentials: grpc_js_1.ChannelCredentials.createInsecure()
        }));
    }
    search(index, props) {
        return new Promise((resolve, reject) => {
            const startTime = new Date().getTime();
            this.c.search(server_1.SearchRequest.create({
                index,
                searchRequest: new Uint8Array(Buffer.from(JSON.stringify(Object.assign(Object.assign({}, defaultSearchRequest), props))))
            })).then((resp) => {
                var _a;
                const currentTime = new Date().getTime();
                if ((_a = resp.response) === null || _a === void 0 ? void 0 : _a.searchResult) {
                    const parsed = JSON.parse(Buffer.from(resp.response.searchResult).toString());
                    const res = parsed;
                    res.fetch = (currentTime - startTime).toFixed(2) + 'ms';
                    resolve(res);
                }
                else {
                    reject(resp.response);
                }
            }).catch(reject);
        });
    }
    createIndex(schema) {
        return new Promise((resolve, reject) => {
            this.c.createIndex({
                indexRequest: new Uint8Array(Buffer.from(JSON.stringify(schema)))
            }).then(resp => {
                resolve(resp.response);
            }).catch(reject);
        });
    }
    bulkIndex(index, data) {
        return new Promise((resolve, reject) => {
            this.c.bulkIndex({
                index,
                data: data.map(prop => new Uint8Array(Buffer.from(JSON.stringify(prop))))
            }).then(resp => {
                resolve(resp.response);
            }).catch(reject);
        });
    }
}
exports.default = CasperSearch;
