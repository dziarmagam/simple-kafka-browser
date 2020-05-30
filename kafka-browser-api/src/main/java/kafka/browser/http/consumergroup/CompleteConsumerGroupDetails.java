package kafka.browser.http.consumergroup;

import org.apache.kafka.clients.admin.ConsumerGroupDescription;
import org.apache.kafka.clients.consumer.OffsetAndMetadata;
import org.apache.kafka.common.TopicPartition;

import java.util.Map;


public class CompleteConsumerGroupDetails {
    public final Map<TopicPartition, OffsetAndMetadata> offsetData;
    public final ConsumerGroupDescription description;

    public CompleteConsumerGroupDetails(Map<TopicPartition, OffsetAndMetadata> offsetData,
                                        ConsumerGroupDescription description) {
        this.offsetData = Map.copyOf(offsetData);
        this.description = description;
    }
}
