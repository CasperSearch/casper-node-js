"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RaftClient = void 0;
const server_1 = require("./server");
const runtime_rpc_1 = require("@protobuf-ts/runtime-rpc");
/**
 * @generated from protobuf service casper.search.engine.proto.Raft
 */
class RaftClient {
    constructor(_transport) {
        this._transport = _transport;
        this.typeName = server_1.Raft.typeName;
        this.methods = server_1.Raft.methods;
        this.options = server_1.Raft.options;
    }
    /**
     * @generated from protobuf rpc: LivenessCheck(google.protobuf.Empty) returns (casper.search.engine.proto.LivenessCheckResponse);
     */
    livenessCheck(input, options) {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: ReadinessCheck(google.protobuf.Empty) returns (casper.search.engine.proto.ReadinessCheckResponse);
     */
    readinessCheck(input, options) {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: Node(google.protobuf.Empty) returns (casper.search.engine.proto.NodeResponse);
     */
    node(input, options) {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: Join(casper.search.engine.proto.JoinRequest) returns (google.protobuf.Empty);
     */
    join(input, options) {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: Cluster(google.protobuf.Empty) returns (casper.search.engine.proto.ClusterResponse);
     */
    cluster(input, options) {
        const method = this.methods[4], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: Leave(casper.search.engine.proto.LeaveRequest) returns (google.protobuf.Empty);
     */
    leave(input, options) {
        const method = this.methods[5], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: Snapshot(google.protobuf.Empty) returns (google.protobuf.Empty);
     */
    snapshot(input, options) {
        const method = this.methods[6], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: BulkIndex(casper.search.engine.proto.BulkIndexRequest) returns (casper.search.engine.proto.BulkIndexResponse);
     */
    bulkIndex(input, options) {
        const method = this.methods[7], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: BulkDelete(casper.search.engine.proto.BulkDeleteRequest) returns (casper.search.engine.proto.BulkDeleteResponse);
     */
    bulkDelete(input, options) {
        const method = this.methods[8], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: Get(casper.search.engine.proto.GetRequest) returns (casper.search.engine.proto.GetResponse);
     */
    get(input, options) {
        const method = this.methods[9], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: Set(casper.search.engine.proto.SetRequest) returns (google.protobuf.Empty);
     */
    set(input, options) {
        const method = this.methods[10], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: Delete(casper.search.engine.proto.DeleteRequest) returns (google.protobuf.Empty);
     */
    delete(input, options) {
        const method = this.methods[11], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: Search(casper.search.engine.proto.SearchRequest) returns (casper.search.engine.proto.SearchResponse);
     */
    search(input, options) {
        const method = this.methods[12], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: Mapping(casper.search.engine.proto.MappingRequest) returns (casper.search.engine.proto.MappingResponse);
     */
    mapping(input, options) {
        const method = this.methods[13], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: CreateIndex(casper.search.engine.proto.CreateIndexRequest) returns (casper.search.engine.proto.MappingResponse);
     */
    createIndex(input, options) {
        const method = this.methods[14], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: DropIndex(casper.search.engine.proto.DropIndexRequest) returns (google.protobuf.Empty);
     */
    dropIndex(input, options) {
        const method = this.methods[15], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: ListIndexes(google.protobuf.Empty) returns (casper.search.engine.proto.ListIndexResponse);
     */
    listIndexes(input, options) {
        const method = this.methods[16], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: Watch(google.protobuf.Empty) returns (stream casper.search.engine.proto.WatchResponse);
     */
    watch(input, options) {
        const method = this.methods[17], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("serverStreaming", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: Metrics(google.protobuf.Empty) returns (casper.search.engine.proto.MetricsResponse);
     */
    metrics(input, options) {
        const method = this.methods[18], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
}
exports.RaftClient = RaftClient;
