package kafka.browser.http.topic;

import java.util.List;

public class TopicDetailsDto {
    public final String name;
    public final long messages;
    public final int partitionCount;
    public final List<String> consumerGroups;
    public final List<TopicDto.PartitionInfo> partitions;

    public TopicDetailsDto(String name, long messages, int partitionCount, List<String> consumerGroups, List<TopicDto.PartitionInfo> partitions) {
        this.name = name;
        this.messages = messages;
        this.partitionCount = partitionCount;
        this.consumerGroups = consumerGroups;
        this.partitions = partitions;
    }

    public static class PartitionInfo {
        public final String name;
        public final long lastLog;

        public PartitionInfo(String name, long lastLog) {
            this.name = name;
            this.lastLog = lastLog;
        }
    }
}
