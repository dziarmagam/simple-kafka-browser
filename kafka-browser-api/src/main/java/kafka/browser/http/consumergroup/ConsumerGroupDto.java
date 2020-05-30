package kafka.browser.http.consumergroup;

import java.util.List;
import java.util.Objects;
import java.util.Set;

public class ConsumerGroupDto {
    public final String name;
    public final Set<String> topicNames;
    public final List<PartitionInfo> partitions;

    public ConsumerGroupDto(String name, Set<String> topicNames, List<PartitionInfo> partitions) {
        this.name = name;
        this.topicNames = topicNames;
        this.partitions = partitions;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ConsumerGroupDto that = (ConsumerGroupDto) o;
        return Objects.equals(name, that.name) &&
                Objects.equals(topicNames, that.topicNames) &&
                Objects.equals(partitions, that.partitions);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, topicNames, partitions);
    }

    public static class PartitionInfo {
        public final  Partition partition;
        private Long lag;

        public PartitionInfo(Partition partition, Long lag) {
            this.partition = partition;
            this.lag = lag;
        }

        public Long getLag() {
            return lag;
        }

        public void setLag(Long lag) {
            this.lag = lag;
        }

        @Override
        public boolean equals(Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;
            PartitionInfo that = (PartitionInfo) o;
            return Objects.equals(partition, that.partition) &&
                    Objects.equals(lag, that.lag);
        }

        @Override
        public int hashCode() {
            return Objects.hash(partition, lag);
        }

        @Override
        public String toString() {
            return "PartitionInfo{" +
                    "partition=" + partition +
                    ", lag=" + lag +
                    '}';
        }
    }

    public static class Partition {
        public final String name;
        public final int number;
        public final String topicName;
        public final Long lastLog;

        public Partition(String name, int number, String topicName, Long lastLog) {
            this.name = name;
            this.number = number;
            this.topicName = topicName;
            this.lastLog = lastLog;
        }

        @Override
        public boolean equals(Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;
            Partition partition = (Partition) o;
            return number == partition.number &&
                    Objects.equals(name, partition.name) &&
                    Objects.equals(topicName, partition.topicName) &&
                    Objects.equals(lastLog, partition.lastLog);
        }

        @Override
        public int hashCode() {
            return Objects.hash(name, number, topicName, lastLog);
        }

        @Override
        public String toString() {
            return "Partition{" +
                    "name='" + name + '\'' +
                    ", number=" + number +
                    ", topicName='" + topicName + '\'' +
                    ", lastLog=" + lastLog +
                    '}';
        }
    }

}

