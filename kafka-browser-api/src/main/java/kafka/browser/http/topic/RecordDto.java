package kafka.browser.http.topic;

import org.apache.kafka.clients.consumer.ConsumerRecord;

public class RecordDto {

    private String key;
    private String message;
    private String topic;
    private Integer partition;
    private Long offset;
    private Long timestamp;

    public RecordDto() {
    }

    public RecordDto(String key, String message, String topic, Integer partition, Long offset, Long timestamp) {
        this.key = key;
        this.message = message;
        this.topic = topic;
        this.partition = partition;
        this.offset = offset;
        this.timestamp = timestamp;
    }

    public String getKey() {
        return key;
    }

    public void setKey(String key) {
        this.key = key;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getTopic() {
        return topic;
    }

    public void setTopic(String topic) {
        this.topic = topic;
    }

    public Integer getPartition() {
        return partition;
    }

    public void setPartition(Integer partition) {
        this.partition = partition;
    }

    public Long getOffset() {
        return offset;
    }

    public void setOffset(Long offset) {
        this.offset = offset;
    }

    public Long getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Long timestamp) {
        this.timestamp = timestamp;
    }

    public static RecordDto from(ConsumerRecord<byte[], byte[]> record) {
        return new RecordDto(new String(record.key()), new String(record.value()), record.topic(), record.partition(), record.offset(), record.timestamp());
    }
}
