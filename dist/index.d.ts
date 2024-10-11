import { BulkIndexResponse } from "./proto/server";
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
};
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
export default class CasperSearch {
    private c;
    constructor(url: string);
    search(index: string, props: TSearchRequest): Promise<TSearchResult>;
    createIndex(schema: {
        [key: string]: any;
    }): Promise<unknown>;
    bulkIndex(index: string, data: {
        [key: string]: any;
    }[]): Promise<BulkIndexResponse>;
}
export {};
