package kafka.browser.http.topic;


import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.apache.kafka.common.TopicPartition;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;

import kafka.browser.admin.KafkaAdminServiceManager;

@RestController
@CrossOrigin
@RequestMapping("api/{env}/topics")
class TopicResource {

    private final KafkaAdminServiceManager kafkaAdminServiceManager;

    TopicResource(KafkaAdminServiceManager kafkaAdminServiceManager) {
        this.kafkaAdminServiceManager = kafkaAdminServiceManager;
    }

    @GetMapping
    List<TopicDto> getTopics(@PathVariable String env) {
        return kafkaAdminServiceManager.getService(env).getTopics();
    }

    @GetMapping("/{topicName}")
    TopicDto getTopic(@PathVariable String topicName, @PathVariable String env) {
        return kafkaAdminServiceManager.getService(env).getTopic(topicName);
    }

    @DeleteMapping("/{topicName}")
    void deleteTopic(@PathVariable String topicName, @PathVariable String env){
        kafkaAdminServiceManager.getService(env).deleteTopic(topicName);
    }

    @GetMapping("/{topicName}/consumer-groups")
    List<String> getConsumerGroups(@PathVariable String topicName, @PathVariable String env) {
        return kafkaAdminServiceManager.getService(env).getConsumerGroupsForGivenTopic(topicName);
    }

    @GetMapping("/{topicName}/{partition}/lastMessage")
    ResponseEntity<String> getLastMessage(@PathVariable String topicName, @PathVariable int partition, @PathVariable String env) {
        String message = kafkaAdminServiceManager.getService(env).getLastMessage(new TopicPartition(topicName, partition));
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.setContentType(MediaType.TEXT_PLAIN);
        return new ResponseEntity<>(message, httpHeaders, HttpStatus.OK);
    }

    @PostMapping("/{topicName}/find")
    ResponseEntity<List<RecordDto>> getLastMessage(@PathVariable String topicName, @PathVariable String env, @RequestBody MessageQueryDto messageQueryDto) {
        List<ConsumerRecord<byte[], byte[]>> records = kafkaAdminServiceManager.getService(env).findMessage(topicName, messageQueryDto.toMessageQuery(),
                Instant.ofEpochMilli(messageQueryDto.getFrom()), Instant.ofEpochMilli(messageQueryDto.getTo()));
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.setContentType(MediaType.APPLICATION_JSON);
        return new ResponseEntity<>(records.stream().map(RecordDto::from).collect(Collectors.toList()), httpHeaders, HttpStatus.OK);
    }

    @PostMapping("/{topicName}/send")
    void sendMessage(@PathVariable String topicName, @PathVariable String env, @RequestBody MessageDto messageDto) {
        kafkaAdminServiceManager.getService(env).sendMessage(topicName, messageDto.getKey(), messageDto.decodeContent());
    }

}
