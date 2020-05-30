
interface Partition {
    name: string;
    partitionNumber: number;
    lastLog: number;
}

interface Topic {
    name: string;
    messages: number;
    partitionCount: number;
    partitions: Partition[];
    consumerGroups: string[];
}
