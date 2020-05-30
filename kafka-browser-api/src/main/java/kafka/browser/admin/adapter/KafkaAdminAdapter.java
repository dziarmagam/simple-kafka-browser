package kafka.browser.admin.adapter;

import org.apache.kafka.clients.admin.ConsumerGroupDescription;
import org.apache.kafka.clients.admin.ConsumerGroupListing;
import org.apache.kafka.clients.admin.TopicDescription;
import org.apache.kafka.clients.consumer.OffsetAndMetadata;
import org.apache.kafka.common.TopicPartition;

import java.io.Closeable;
import java.util.Collection;
import java.util.Map;
import java.util.Set;

public interface KafkaAdminAdapter extends Closeable {

    Collection<ConsumerGroupListing> getConsumerGroupListing();

    Map<TopicPartition, OffsetAndMetadata> getConsumerGroupOffsets(String consumerGroupName);

    TopicDescription describeTopic(String topicName);

    Map<String, TopicDescription> describeTopics(Collection<String> topicNames);

    Set<String> getTopicNames();

    ConsumerGroupDescription describeConsumerGroup(String consumerGroupName);

    void deleteConsumerGroup(String consumerGroupName);

    void deleteTopic(String topicName);

}
