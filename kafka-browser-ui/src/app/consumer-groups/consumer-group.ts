interface ConsumerGroupPartitionInfo {
    partition: Partition;
    lag: number;
}

interface ConsumerGroup {
    name: string;
    partitions: ConsumerGroupPartitionInfo[];
    topicNames: string[];
}

interface ConsumerGroupMetaData {
    groupId: string;
    consumerGroupState: ConsumerGroupState;
    memberDescriptionList: MemberDescription[];
    partitionAssignor: string;
    coordinator: string;
}

interface MemberDescription {
    memberId: string;
    clientId: string;
    host: string;
    assignment: Assignment;
}

interface Assignment {
    topicPartitions: TopicPartition;
}

interface TopicPartition {
    partition: number;
    topic: string;
}

enum ConsumerGroupState {
    UNKNOWN,
    PREPARING_REBALANCE,
    COMPLETING_REBALANCE,
    STABLE,
    DEAD,
    EMPTY
}
