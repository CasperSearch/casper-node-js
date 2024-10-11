import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Any } from "./any";
/**
 * @generated from protobuf message casper.search.engine.proto.LivenessCheckResponse
 */
export interface LivenessCheckResponse {
    /**
     * @generated from protobuf field: bool alive = 1;
     */
    alive: boolean;
}
/**
 * @generated from protobuf message casper.search.engine.proto.ReadinessCheckResponse
 */
export interface ReadinessCheckResponse {
    /**
     * @generated from protobuf field: bool ready = 1;
     */
    ready: boolean;
}
/**
 * @generated from protobuf message casper.search.engine.proto.Metadata
 */
export interface Metadata {
    /**
     * @generated from protobuf field: string grpc_address = 1;
     */
    grpcAddress: string;
    /**
     * @generated from protobuf field: string http_address = 2;
     */
    httpAddress: string;
}
/**
 * @generated from protobuf message casper.search.engine.proto.Node
 */
export interface Node {
    /**
     * @generated from protobuf field: string raft_address = 1;
     */
    raftAddress: string;
    /**
     * @generated from protobuf field: casper.search.engine.proto.Metadata metadata = 2;
     */
    metadata?: Metadata;
    /**
     * @generated from protobuf field: string state = 3;
     */
    state: string;
}
/**
 * @generated from protobuf message casper.search.engine.proto.Cluster
 */
export interface Cluster {
    /**
     * @generated from protobuf field: map<string, casper.search.engine.proto.Node> nodes = 1;
     */
    nodes: {
        [key: string]: Node;
    };
    /**
     * @generated from protobuf field: string leader = 2;
     */
    leader: string;
}
/**
 * @generated from protobuf message casper.search.engine.proto.JoinRequest
 */
export interface JoinRequest {
    /**
     * @generated from protobuf field: string id = 1;
     */
    id: string;
    /**
     * @generated from protobuf field: casper.search.engine.proto.Node node = 2;
     */
    node?: Node;
}
/**
 * @generated from protobuf message casper.search.engine.proto.MappingRequest
 */
export interface MappingRequest {
    /**
     * @generated from protobuf field: string index = 1;
     */
    index: string;
}
/**
 * @generated from protobuf message casper.search.engine.proto.LeaveRequest
 */
export interface LeaveRequest {
    /**
     * @generated from protobuf field: string id = 1;
     */
    id: string;
}
/**
 * @generated from protobuf message casper.search.engine.proto.NodeResponse
 */
export interface NodeResponse {
    /**
     * @generated from protobuf field: casper.search.engine.proto.Node node = 1;
     */
    node?: Node;
}
/**
 * @generated from protobuf message casper.search.engine.proto.ClusterResponse
 */
export interface ClusterResponse {
    /**
     * @generated from protobuf field: casper.search.engine.proto.Cluster cluster = 1;
     */
    cluster?: Cluster;
}
/**
 * @generated from protobuf message casper.search.engine.proto.Document
 */
export interface Document {
    /**
     * @generated from protobuf field: string id = 1;
     */
    id: string;
    /**
     * @generated from protobuf field: bytes fields = 2;
     */
    fields: Uint8Array;
    /**
     * @generated from protobuf field: string index = 3;
     */
    index: string;
}
/**
 * @generated from protobuf message casper.search.engine.proto.GetRequest
 */
export interface GetRequest {
    /**
     * @generated from protobuf field: string id = 1;
     */
    id: string;
    /**
     * @generated from protobuf field: string index = 3;
     */
    index: string;
}
/**
 * @generated from protobuf message casper.search.engine.proto.GetResponse
 */
export interface GetResponse {
    /**
     * @generated from protobuf field: bytes fields = 1;
     */
    fields: Uint8Array;
    /**
     * @generated from protobuf field: string index = 3;
     */
    index: string;
}
/**
 * @generated from protobuf message casper.search.engine.proto.SetRequest
 */
export interface SetRequest {
    /**
     * @generated from protobuf field: string id = 1;
     */
    id: string;
    /**
     * @generated from protobuf field: bytes fields = 2;
     */
    fields: Uint8Array;
    /**
     * @generated from protobuf field: string index = 3;
     */
    index: string;
}
/**
 * @generated from protobuf message casper.search.engine.proto.DeleteRequest
 */
export interface DeleteRequest {
    /**
     * @generated from protobuf field: string id = 1;
     */
    id: string;
    /**
     * @generated from protobuf field: string index = 2;
     */
    index: string;
}
/**
 * @generated from protobuf message casper.search.engine.proto.BulkIndexRequest
 */
export interface BulkIndexRequest {
    /**
     * @generated from protobuf field: repeated bytes data = 1;
     */
    data: Uint8Array[];
    /**
     * @generated from protobuf field: string index = 2;
     */
    index: string;
}
/**
 * @generated from protobuf message casper.search.engine.proto.BulkIndexResponse
 */
export interface BulkIndexResponse {
    /**
     * @generated from protobuf field: int32 count = 1;
     */
    count: number;
    /**
     * @generated from protobuf field: string index = 3;
     */
    index: string;
}
/**
 * @generated from protobuf message casper.search.engine.proto.BulkDeleteElement
 */
export interface BulkDeleteElement {
    /**
     * @generated from protobuf field: string id = 1;
     */
    id: string;
}
/**
 * @generated from protobuf message casper.search.engine.proto.BulkDeleteRequest
 */
export interface BulkDeleteRequest {
    /**
     * @generated from protobuf field: repeated casper.search.engine.proto.BulkDeleteElement requests = 1;
     */
    requests: BulkDeleteElement[];
    /**
     * @generated from protobuf field: string index = 2;
     */
    index: string;
}
/**
 * @generated from protobuf message casper.search.engine.proto.BulkDeleteResponse
 */
export interface BulkDeleteResponse {
    /**
     * @generated from protobuf field: int32 count = 1;
     */
    count: number;
    /**
     * @generated from protobuf field: string index = 2;
     */
    index: string;
}
/**
 * @generated from protobuf message casper.search.engine.proto.SetMetadataRequest
 */
export interface SetMetadataRequest {
    /**
     * @generated from protobuf field: string id = 1;
     */
    id: string;
    /**
     * @generated from protobuf field: casper.search.engine.proto.Metadata metadata = 2;
     */
    metadata?: Metadata;
}
/**
 * @generated from protobuf message casper.search.engine.proto.DeleteMetadataRequest
 */
export interface DeleteMetadataRequest {
    /**
     * @generated from protobuf field: string id = 1;
     */
    id: string;
}
/**
 * @generated from protobuf message casper.search.engine.proto.SearchRequest
 */
export interface SearchRequest {
    /**
     * @generated from protobuf field: bytes search_request = 1;
     */
    searchRequest: Uint8Array;
    /**
     * @generated from protobuf field: string index = 2;
     */
    index: string;
}
/**
 * @generated from protobuf message casper.search.engine.proto.CreateIndexRequest
 */
export interface CreateIndexRequest {
    /**
     * @generated from protobuf field: bytes index_request = 1;
     */
    indexRequest: Uint8Array;
}
/**
 * @generated from protobuf message casper.search.engine.proto.DropIndexRequest
 */
export interface DropIndexRequest {
    /**
     * @generated from protobuf field: string index = 1;
     */
    index: string;
}
/**
 * @generated from protobuf message casper.search.engine.proto.ListIndexResponse
 */
export interface ListIndexResponse {
    /**
     * @generated from protobuf field: repeated casper.search.engine.proto.MappingResponse response = 1;
     */
    response: MappingResponse[];
}
/**
 * @generated from protobuf message casper.search.engine.proto.SearchResponse
 */
export interface SearchResponse {
    /**
     * @generated from protobuf field: bytes search_result = 1;
     */
    searchResult: Uint8Array;
    /**
     * @generated from protobuf field: string index = 2;
     */
    index: string;
}
/**
 * @generated from protobuf message casper.search.engine.proto.MappingResponse
 */
export interface MappingResponse {
    /**
     * @generated from protobuf field: bytes mapping = 1;
     */
    mapping: Uint8Array;
    /**
     * @generated from protobuf field: string index = 2;
     */
    index: string;
}
/**
 * @generated from protobuf message casper.search.engine.proto.Event
 */
export interface Event {
    /**
     * @generated from protobuf field: string index = 3;
     */
    index: string;
    /**
     * @generated from protobuf field: casper.search.engine.proto.Event.Type type = 1;
     */
    type: Event_Type;
    /**
     * @generated from protobuf field: google.protobuf.Any data = 2;
     */
    data?: Any;
}
/**
 * @generated from protobuf enum casper.search.engine.proto.Event.Type
 */
export declare enum Event_Type {
    /**
     * @generated from protobuf enum value: Unknown = 0;
     */
    Unknown = 0,
    /**
     * @generated from protobuf enum value: Join = 1;
     */
    Join = 1,
    /**
     * @generated from protobuf enum value: Leave = 2;
     */
    Leave = 2,
    /**
     * @generated from protobuf enum value: Set = 3;
     */
    Set = 3,
    /**
     * @generated from protobuf enum value: Delete = 4;
     */
    Delete = 4,
    /**
     * @generated from protobuf enum value: BulkIndex = 5;
     */
    BulkIndex = 5,
    /**
     * @generated from protobuf enum value: BulkDelete = 6;
     */
    BulkDelete = 6
}
/**
 * @generated from protobuf message casper.search.engine.proto.WatchResponse
 */
export interface WatchResponse {
    /**
     * @generated from protobuf field: casper.search.engine.proto.Event event = 1;
     */
    event?: Event;
}
/**
 * @generated from protobuf message casper.search.engine.proto.MetricsResponse
 */
export interface MetricsResponse {
    /**
     * @generated from protobuf field: bytes metrics = 1;
     */
    metrics: Uint8Array;
}
declare class LivenessCheckResponse$Type extends MessageType<LivenessCheckResponse> {
    constructor();
    create(value?: PartialMessage<LivenessCheckResponse>): LivenessCheckResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: LivenessCheckResponse): LivenessCheckResponse;
    internalBinaryWrite(message: LivenessCheckResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message casper.search.engine.proto.LivenessCheckResponse
 */
export declare const LivenessCheckResponse: LivenessCheckResponse$Type;
declare class ReadinessCheckResponse$Type extends MessageType<ReadinessCheckResponse> {
    constructor();
    create(value?: PartialMessage<ReadinessCheckResponse>): ReadinessCheckResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ReadinessCheckResponse): ReadinessCheckResponse;
    internalBinaryWrite(message: ReadinessCheckResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message casper.search.engine.proto.ReadinessCheckResponse
 */
export declare const ReadinessCheckResponse: ReadinessCheckResponse$Type;
declare class Metadata$Type extends MessageType<Metadata> {
    constructor();
    create(value?: PartialMessage<Metadata>): Metadata;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Metadata): Metadata;
    internalBinaryWrite(message: Metadata, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message casper.search.engine.proto.Metadata
 */
export declare const Metadata: Metadata$Type;
declare class Node$Type extends MessageType<Node> {
    constructor();
    create(value?: PartialMessage<Node>): Node;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Node): Node;
    internalBinaryWrite(message: Node, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message casper.search.engine.proto.Node
 */
export declare const Node: Node$Type;
declare class Cluster$Type extends MessageType<Cluster> {
    constructor();
    create(value?: PartialMessage<Cluster>): Cluster;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Cluster): Cluster;
    private binaryReadMap1;
    internalBinaryWrite(message: Cluster, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message casper.search.engine.proto.Cluster
 */
export declare const Cluster: Cluster$Type;
declare class JoinRequest$Type extends MessageType<JoinRequest> {
    constructor();
    create(value?: PartialMessage<JoinRequest>): JoinRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: JoinRequest): JoinRequest;
    internalBinaryWrite(message: JoinRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message casper.search.engine.proto.JoinRequest
 */
export declare const JoinRequest: JoinRequest$Type;
declare class MappingRequest$Type extends MessageType<MappingRequest> {
    constructor();
    create(value?: PartialMessage<MappingRequest>): MappingRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MappingRequest): MappingRequest;
    internalBinaryWrite(message: MappingRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message casper.search.engine.proto.MappingRequest
 */
export declare const MappingRequest: MappingRequest$Type;
declare class LeaveRequest$Type extends MessageType<LeaveRequest> {
    constructor();
    create(value?: PartialMessage<LeaveRequest>): LeaveRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: LeaveRequest): LeaveRequest;
    internalBinaryWrite(message: LeaveRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message casper.search.engine.proto.LeaveRequest
 */
export declare const LeaveRequest: LeaveRequest$Type;
declare class NodeResponse$Type extends MessageType<NodeResponse> {
    constructor();
    create(value?: PartialMessage<NodeResponse>): NodeResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: NodeResponse): NodeResponse;
    internalBinaryWrite(message: NodeResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message casper.search.engine.proto.NodeResponse
 */
export declare const NodeResponse: NodeResponse$Type;
declare class ClusterResponse$Type extends MessageType<ClusterResponse> {
    constructor();
    create(value?: PartialMessage<ClusterResponse>): ClusterResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ClusterResponse): ClusterResponse;
    internalBinaryWrite(message: ClusterResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message casper.search.engine.proto.ClusterResponse
 */
export declare const ClusterResponse: ClusterResponse$Type;
declare class Document$Type extends MessageType<Document> {
    constructor();
    create(value?: PartialMessage<Document>): Document;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Document): Document;
    internalBinaryWrite(message: Document, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message casper.search.engine.proto.Document
 */
export declare const Document: Document$Type;
declare class GetRequest$Type extends MessageType<GetRequest> {
    constructor();
    create(value?: PartialMessage<GetRequest>): GetRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetRequest): GetRequest;
    internalBinaryWrite(message: GetRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message casper.search.engine.proto.GetRequest
 */
export declare const GetRequest: GetRequest$Type;
declare class GetResponse$Type extends MessageType<GetResponse> {
    constructor();
    create(value?: PartialMessage<GetResponse>): GetResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetResponse): GetResponse;
    internalBinaryWrite(message: GetResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message casper.search.engine.proto.GetResponse
 */
export declare const GetResponse: GetResponse$Type;
declare class SetRequest$Type extends MessageType<SetRequest> {
    constructor();
    create(value?: PartialMessage<SetRequest>): SetRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SetRequest): SetRequest;
    internalBinaryWrite(message: SetRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message casper.search.engine.proto.SetRequest
 */
export declare const SetRequest: SetRequest$Type;
declare class DeleteRequest$Type extends MessageType<DeleteRequest> {
    constructor();
    create(value?: PartialMessage<DeleteRequest>): DeleteRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DeleteRequest): DeleteRequest;
    internalBinaryWrite(message: DeleteRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message casper.search.engine.proto.DeleteRequest
 */
export declare const DeleteRequest: DeleteRequest$Type;
declare class BulkIndexRequest$Type extends MessageType<BulkIndexRequest> {
    constructor();
    create(value?: PartialMessage<BulkIndexRequest>): BulkIndexRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BulkIndexRequest): BulkIndexRequest;
    internalBinaryWrite(message: BulkIndexRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message casper.search.engine.proto.BulkIndexRequest
 */
export declare const BulkIndexRequest: BulkIndexRequest$Type;
declare class BulkIndexResponse$Type extends MessageType<BulkIndexResponse> {
    constructor();
    create(value?: PartialMessage<BulkIndexResponse>): BulkIndexResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BulkIndexResponse): BulkIndexResponse;
    internalBinaryWrite(message: BulkIndexResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message casper.search.engine.proto.BulkIndexResponse
 */
export declare const BulkIndexResponse: BulkIndexResponse$Type;
declare class BulkDeleteElement$Type extends MessageType<BulkDeleteElement> {
    constructor();
    create(value?: PartialMessage<BulkDeleteElement>): BulkDeleteElement;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BulkDeleteElement): BulkDeleteElement;
    internalBinaryWrite(message: BulkDeleteElement, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message casper.search.engine.proto.BulkDeleteElement
 */
export declare const BulkDeleteElement: BulkDeleteElement$Type;
declare class BulkDeleteRequest$Type extends MessageType<BulkDeleteRequest> {
    constructor();
    create(value?: PartialMessage<BulkDeleteRequest>): BulkDeleteRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BulkDeleteRequest): BulkDeleteRequest;
    internalBinaryWrite(message: BulkDeleteRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message casper.search.engine.proto.BulkDeleteRequest
 */
export declare const BulkDeleteRequest: BulkDeleteRequest$Type;
declare class BulkDeleteResponse$Type extends MessageType<BulkDeleteResponse> {
    constructor();
    create(value?: PartialMessage<BulkDeleteResponse>): BulkDeleteResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BulkDeleteResponse): BulkDeleteResponse;
    internalBinaryWrite(message: BulkDeleteResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message casper.search.engine.proto.BulkDeleteResponse
 */
export declare const BulkDeleteResponse: BulkDeleteResponse$Type;
declare class SetMetadataRequest$Type extends MessageType<SetMetadataRequest> {
    constructor();
    create(value?: PartialMessage<SetMetadataRequest>): SetMetadataRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SetMetadataRequest): SetMetadataRequest;
    internalBinaryWrite(message: SetMetadataRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message casper.search.engine.proto.SetMetadataRequest
 */
export declare const SetMetadataRequest: SetMetadataRequest$Type;
declare class DeleteMetadataRequest$Type extends MessageType<DeleteMetadataRequest> {
    constructor();
    create(value?: PartialMessage<DeleteMetadataRequest>): DeleteMetadataRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DeleteMetadataRequest): DeleteMetadataRequest;
    internalBinaryWrite(message: DeleteMetadataRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message casper.search.engine.proto.DeleteMetadataRequest
 */
export declare const DeleteMetadataRequest: DeleteMetadataRequest$Type;
declare class SearchRequest$Type extends MessageType<SearchRequest> {
    constructor();
    create(value?: PartialMessage<SearchRequest>): SearchRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SearchRequest): SearchRequest;
    internalBinaryWrite(message: SearchRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message casper.search.engine.proto.SearchRequest
 */
export declare const SearchRequest: SearchRequest$Type;
declare class CreateIndexRequest$Type extends MessageType<CreateIndexRequest> {
    constructor();
    create(value?: PartialMessage<CreateIndexRequest>): CreateIndexRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CreateIndexRequest): CreateIndexRequest;
    internalBinaryWrite(message: CreateIndexRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message casper.search.engine.proto.CreateIndexRequest
 */
export declare const CreateIndexRequest: CreateIndexRequest$Type;
declare class DropIndexRequest$Type extends MessageType<DropIndexRequest> {
    constructor();
    create(value?: PartialMessage<DropIndexRequest>): DropIndexRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DropIndexRequest): DropIndexRequest;
    internalBinaryWrite(message: DropIndexRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message casper.search.engine.proto.DropIndexRequest
 */
export declare const DropIndexRequest: DropIndexRequest$Type;
declare class ListIndexResponse$Type extends MessageType<ListIndexResponse> {
    constructor();
    create(value?: PartialMessage<ListIndexResponse>): ListIndexResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListIndexResponse): ListIndexResponse;
    internalBinaryWrite(message: ListIndexResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message casper.search.engine.proto.ListIndexResponse
 */
export declare const ListIndexResponse: ListIndexResponse$Type;
declare class SearchResponse$Type extends MessageType<SearchResponse> {
    constructor();
    create(value?: PartialMessage<SearchResponse>): SearchResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SearchResponse): SearchResponse;
    internalBinaryWrite(message: SearchResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message casper.search.engine.proto.SearchResponse
 */
export declare const SearchResponse: SearchResponse$Type;
declare class MappingResponse$Type extends MessageType<MappingResponse> {
    constructor();
    create(value?: PartialMessage<MappingResponse>): MappingResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MappingResponse): MappingResponse;
    internalBinaryWrite(message: MappingResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message casper.search.engine.proto.MappingResponse
 */
export declare const MappingResponse: MappingResponse$Type;
declare class Event$Type extends MessageType<Event> {
    constructor();
    create(value?: PartialMessage<Event>): Event;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Event): Event;
    internalBinaryWrite(message: Event, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message casper.search.engine.proto.Event
 */
export declare const Event: Event$Type;
declare class WatchResponse$Type extends MessageType<WatchResponse> {
    constructor();
    create(value?: PartialMessage<WatchResponse>): WatchResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: WatchResponse): WatchResponse;
    internalBinaryWrite(message: WatchResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message casper.search.engine.proto.WatchResponse
 */
export declare const WatchResponse: WatchResponse$Type;
declare class MetricsResponse$Type extends MessageType<MetricsResponse> {
    constructor();
    create(value?: PartialMessage<MetricsResponse>): MetricsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MetricsResponse): MetricsResponse;
    internalBinaryWrite(message: MetricsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message casper.search.engine.proto.MetricsResponse
 */
export declare const MetricsResponse: MetricsResponse$Type;
/**
 * @generated ServiceType for protobuf service casper.search.engine.proto.Raft
 */
export declare const Raft: ServiceType;
export {};
