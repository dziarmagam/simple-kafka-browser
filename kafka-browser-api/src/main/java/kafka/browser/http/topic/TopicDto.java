package kafka.browser.http.topic;

import java.util.List;
import java.util.Objects;

public class TopicDto {
    public final String name;
    public final long messages;
    public final int partitionCount;
    public final List<PartitionInfo> partitions;

    public TopicDto(String name, long messages, int partitionCount, List<PartitionInfo> partitions) {
        this.name = name;
        this.messages = messages;
        this.partitionCount = partitionCount;
        this.partitions = partitions;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        TopicDto topicDto = (TopicDto) o;
        return messages == topicDto.messages &&
                partitionCount == topicDto.partitionCount &&
                Objects.equals(name, topicDto.name) &&
                Objects.equals(partitions, topicDto.partitions);
    }

    @Override
    public String toString() {
        return "TopicDto{" +
                "name='" + name + '\'' +
                ", messages=" + messages +
                ", partitionCount=" + partitionCount +
                ", partitions=" + partitions +
                '}';
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, messages, partitionCount, partitions);
    }

    public static class PartitionInfo {
        public final String name;
        public final int partitionNumber;
        public final long lastLog;

        public PartitionInfo(String name, int partitionNumber, long lastLog) {
            this.name = name;
            this.partitionNumber = partitionNumber;
            this.lastLog = lastLog;
        }

        @Override
        public boolean equals(Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;
            PartitionInfo that = (PartitionInfo) o;
            return partitionNumber == that.partitionNumber &&
                    lastLog == that.lastLog &&
                    Objects.equals(name, that.name);
        }

        @Override
        public int hashCode() {
            return Objects.hash(name, partitionNumber, lastLog);
        }

        @Override
        public String toString() {
            return "PartitionInfo{" +
                    "name='" + name + '\'' +
                    ", partitionNumber=" + partitionNumber +
                    ", lastLog=" + lastLog +
                    '}';
        }
    }
}
