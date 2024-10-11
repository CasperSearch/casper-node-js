import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import type { MetricsResponse } from "./server";
import type { WatchResponse } from "./server";
import type { ServerStreamingCall } from "@protobuf-ts/runtime-rpc";
import type { ListIndexResponse } from "./server";
import type { DropIndexRequest } from "./server";
import type { CreateIndexRequest } from "./server";
import type { MappingResponse } from "./server";
import type { MappingRequest } from "./server";
import type { SearchResponse } from "./server";
import type { SearchRequest } from "./server";
import type { DeleteRequest } from "./server";
import type { SetRequest } from "./server";
import type { GetResponse } from "./server";
import type { GetRequest } from "./server";
import type { BulkDeleteResponse } from "./server";
import type { BulkDeleteRequest } from "./server";
import type { BulkIndexResponse } from "./server";
import type { BulkIndexRequest } from "./server";
import type { LeaveRequest } from "./server";
import type { ClusterResponse } from "./server";
import type { JoinRequest } from "./server";
import type { NodeResponse } from "./server";
import type { ReadinessCheckResponse } from "./server";
import type { LivenessCheckResponse } from "./server";
import type { Empty } from "./empty";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service casper.search.engine.proto.Raft
 */
export interface IRaftClient {
    /**
     * @generated from protobuf rpc: LivenessCheck(google.protobuf.Empty) returns (casper.search.engine.proto.LivenessCheckResponse);
     */
    livenessCheck(input: Empty, options?: RpcOptions): UnaryCall<Empty, LivenessCheckResponse>;
    /**
     * @generated from protobuf rpc: ReadinessCheck(google.protobuf.Empty) returns (casper.search.engine.proto.ReadinessCheckResponse);
     */
    readinessCheck(input: Empty, options?: RpcOptions): UnaryCall<Empty, ReadinessCheckResponse>;
    /**
     * @generated from protobuf rpc: Node(google.protobuf.Empty) returns (casper.search.engine.proto.NodeResponse);
     */
    node(input: Empty, options?: RpcOptions): UnaryCall<Empty, NodeResponse>;
    /**
     * @generated from protobuf rpc: Join(casper.search.engine.proto.JoinRequest) returns (google.protobuf.Empty);
     */
    join(input: JoinRequest, options?: RpcOptions): UnaryCall<JoinRequest, Empty>;
    /**
     * @generated from protobuf rpc: Cluster(google.protobuf.Empty) returns (casper.search.engine.proto.ClusterResponse);
     */
    cluster(input: Empty, options?: RpcOptions): UnaryCall<Empty, ClusterResponse>;
    /**
     * @generated from protobuf rpc: Leave(casper.search.engine.proto.LeaveRequest) returns (google.protobuf.Empty);
     */
    leave(input: LeaveRequest, options?: RpcOptions): UnaryCall<LeaveRequest, Empty>;
    /**
     * @generated from protobuf rpc: Snapshot(google.protobuf.Empty) returns (google.protobuf.Empty);
     */
    snapshot(input: Empty, options?: RpcOptions): UnaryCall<Empty, Empty>;
    /**
     * @generated from protobuf rpc: BulkIndex(casper.search.engine.proto.BulkIndexRequest) returns (casper.search.engine.proto.BulkIndexResponse);
     */
    bulkIndex(input: BulkIndexRequest, options?: RpcOptions): UnaryCall<BulkIndexRequest, BulkIndexResponse>;
    /**
     * @generated from protobuf rpc: BulkDelete(casper.search.engine.proto.BulkDeleteRequest) returns (casper.search.engine.proto.BulkDeleteResponse);
     */
    bulkDelete(input: BulkDeleteRequest, options?: RpcOptions): UnaryCall<BulkDeleteRequest, BulkDeleteResponse>;
    /**
     * @generated from protobuf rpc: Get(casper.search.engine.proto.GetRequest) returns (casper.search.engine.proto.GetResponse);
     */
    get(input: GetRequest, options?: RpcOptions): UnaryCall<GetRequest, GetResponse>;
    /**
     * @generated from protobuf rpc: Set(casper.search.engine.proto.SetRequest) returns (google.protobuf.Empty);
     */
    set(input: SetRequest, options?: RpcOptions): UnaryCall<SetRequest, Empty>;
    /**
     * @generated from protobuf rpc: Delete(casper.search.engine.proto.DeleteRequest) returns (google.protobuf.Empty);
     */
    delete(input: DeleteRequest, options?: RpcOptions): UnaryCall<DeleteRequest, Empty>;
    /**
     * @generated from protobuf rpc: Search(casper.search.engine.proto.SearchRequest) returns (casper.search.engine.proto.SearchResponse);
     */
    search(input: SearchRequest, options?: RpcOptions): UnaryCall<SearchRequest, SearchResponse>;
    /**
     * @generated from protobuf rpc: Mapping(casper.search.engine.proto.MappingRequest) returns (casper.search.engine.proto.MappingResponse);
     */
    mapping(input: MappingRequest, options?: RpcOptions): UnaryCall<MappingRequest, MappingResponse>;
    /**
     * @generated from protobuf rpc: CreateIndex(casper.search.engine.proto.CreateIndexRequest) returns (casper.search.engine.proto.MappingResponse);
     */
    createIndex(input: CreateIndexRequest, options?: RpcOptions): UnaryCall<CreateIndexRequest, MappingResponse>;
    /**
     * @generated from protobuf rpc: DropIndex(casper.search.engine.proto.DropIndexRequest) returns (google.protobuf.Empty);
     */
    dropIndex(input: DropIndexRequest, options?: RpcOptions): UnaryCall<DropIndexRequest, Empty>;
    /**
     * @generated from protobuf rpc: ListIndexes(google.protobuf.Empty) returns (casper.search.engine.proto.ListIndexResponse);
     */
    listIndexes(input: Empty, options?: RpcOptions): UnaryCall<Empty, ListIndexResponse>;
    /**
     * @generated from protobuf rpc: Watch(google.protobuf.Empty) returns (stream casper.search.engine.proto.WatchResponse);
     */
    watch(input: Empty, options?: RpcOptions): ServerStreamingCall<Empty, WatchResponse>;
    /**
     * @generated from protobuf rpc: Metrics(google.protobuf.Empty) returns (casper.search.engine.proto.MetricsResponse);
     */
    metrics(input: Empty, options?: RpcOptions): UnaryCall<Empty, MetricsResponse>;
}
/**
 * @generated from protobuf service casper.search.engine.proto.Raft
 */
export declare class RaftClient implements IRaftClient, ServiceInfo {
    private readonly _transport;
    typeName: string;
    methods: import("@protobuf-ts/runtime-rpc").MethodInfo<any, any>[];
    options: {
        [extensionName: string]: import("@protobuf-ts/runtime").JsonValue;
    };
    constructor(_transport: RpcTransport);
    /**
     * @generated from protobuf rpc: LivenessCheck(google.protobuf.Empty) returns (casper.search.engine.proto.LivenessCheckResponse);
     */
    livenessCheck(input: Empty, options?: RpcOptions): UnaryCall<Empty, LivenessCheckResponse>;
    /**
     * @generated from protobuf rpc: ReadinessCheck(google.protobuf.Empty) returns (casper.search.engine.proto.ReadinessCheckResponse);
     */
    readinessCheck(input: Empty, options?: RpcOptions): UnaryCall<Empty, ReadinessCheckResponse>;
    /**
     * @generated from protobuf rpc: Node(google.protobuf.Empty) returns (casper.search.engine.proto.NodeResponse);
     */
    node(input: Empty, options?: RpcOptions): UnaryCall<Empty, NodeResponse>;
    /**
     * @generated from protobuf rpc: Join(casper.search.engine.proto.JoinRequest) returns (google.protobuf.Empty);
     */
    join(input: JoinRequest, options?: RpcOptions): UnaryCall<JoinRequest, Empty>;
    /**
     * @generated from protobuf rpc: Cluster(google.protobuf.Empty) returns (casper.search.engine.proto.ClusterResponse);
     */
    cluster(input: Empty, options?: RpcOptions): UnaryCall<Empty, ClusterResponse>;
    /**
     * @generated from protobuf rpc: Leave(casper.search.engine.proto.LeaveRequest) returns (google.protobuf.Empty);
     */
    leave(input: LeaveRequest, options?: RpcOptions): UnaryCall<LeaveRequest, Empty>;
    /**
     * @generated from protobuf rpc: Snapshot(google.protobuf.Empty) returns (google.protobuf.Empty);
     */
    snapshot(input: Empty, options?: RpcOptions): UnaryCall<Empty, Empty>;
    /**
     * @generated from protobuf rpc: BulkIndex(casper.search.engine.proto.BulkIndexRequest) returns (casper.search.engine.proto.BulkIndexResponse);
     */
    bulkIndex(input: BulkIndexRequest, options?: RpcOptions): UnaryCall<BulkIndexRequest, BulkIndexResponse>;
    /**
     * @generated from protobuf rpc: BulkDelete(casper.search.engine.proto.BulkDeleteRequest) returns (casper.search.engine.proto.BulkDeleteResponse);
     */
    bulkDelete(input: BulkDeleteRequest, options?: RpcOptions): UnaryCall<BulkDeleteRequest, BulkDeleteResponse>;
    /**
     * @generated from protobuf rpc: Get(casper.search.engine.proto.GetRequest) returns (casper.search.engine.proto.GetResponse);
     */
    get(input: GetRequest, options?: RpcOptions): UnaryCall<GetRequest, GetResponse>;
    /**
     * @generated from protobuf rpc: Set(casper.search.engine.proto.SetRequest) returns (google.protobuf.Empty);
     */
    set(input: SetRequest, options?: RpcOptions): UnaryCall<SetRequest, Empty>;
    /**
     * @generated from protobuf rpc: Delete(casper.search.engine.proto.DeleteRequest) returns (google.protobuf.Empty);
     */
    delete(input: DeleteRequest, options?: RpcOptions): UnaryCall<DeleteRequest, Empty>;
    /**
     * @generated from protobuf rpc: Search(casper.search.engine.proto.SearchRequest) returns (casper.search.engine.proto.SearchResponse);
     */
    search(input: SearchRequest, options?: RpcOptions): UnaryCall<SearchRequest, SearchResponse>;
    /**
     * @generated from protobuf rpc: Mapping(casper.search.engine.proto.MappingRequest) returns (casper.search.engine.proto.MappingResponse);
     */
    mapping(input: MappingRequest, options?: RpcOptions): UnaryCall<MappingRequest, MappingResponse>;
    /**
     * @generated from protobuf rpc: CreateIndex(casper.search.engine.proto.CreateIndexRequest) returns (casper.search.engine.proto.MappingResponse);
     */
    createIndex(input: CreateIndexRequest, options?: RpcOptions): UnaryCall<CreateIndexRequest, MappingResponse>;
    /**
     * @generated from protobuf rpc: DropIndex(casper.search.engine.proto.DropIndexRequest) returns (google.protobuf.Empty);
     */
    dropIndex(input: DropIndexRequest, options?: RpcOptions): UnaryCall<DropIndexRequest, Empty>;
    /**
     * @generated from protobuf rpc: ListIndexes(google.protobuf.Empty) returns (casper.search.engine.proto.ListIndexResponse);
     */
    listIndexes(input: Empty, options?: RpcOptions): UnaryCall<Empty, ListIndexResponse>;
    /**
     * @generated from protobuf rpc: Watch(google.protobuf.Empty) returns (stream casper.search.engine.proto.WatchResponse);
     */
    watch(input: Empty, options?: RpcOptions): ServerStreamingCall<Empty, WatchResponse>;
    /**
     * @generated from protobuf rpc: Metrics(google.protobuf.Empty) returns (casper.search.engine.proto.MetricsResponse);
     */
    metrics(input: Empty, options?: RpcOptions): UnaryCall<Empty, MetricsResponse>;
}
