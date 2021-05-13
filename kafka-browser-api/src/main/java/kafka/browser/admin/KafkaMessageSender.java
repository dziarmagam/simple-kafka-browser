package kafka.browser.admin;

import org.apache.kafka.clients.producer.KafkaProducer;
import org.apache.kafka.clients.producer.ProducerConfig;
import org.apache.kafka.clients.producer.ProducerRecord;
import org.apache.kafka.common.serialization.Serdes;

import java.io.Closeable;
import java.io.IOException;
import java.util.Map;

import kafka.browser.environment.Environment;

public class KafkaMessageSender implements Closeable {

    private final KafkaProducer<String, byte[]> kafkaProducer;

    public KafkaMessageSender(Environment environment) {
        Map<String, Object> properties = Map.of(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, environment.bootstrapServer);
        this.kafkaProducer = new KafkaProducer<>(properties, Serdes.String().serializer(), Serdes.ByteArray().serializer());
    }

    public void sendMessage(String topic, String key, String message) {
        kafkaProducer.send(new ProducerRecord<>(topic, key, message.getBytes()));
    }

    @Override
    public void close() throws IOException {
        kafkaProducer.close();
    }
}
