package kafka.browser.http.topic;

import org.apache.kafka.common.TopicPartition;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;

import kafka.browser.admin.KafkaAdminServiceManager;
import kafka.browser.admin.service.KafkaAdminService;

import static org.mockito.Mockito.*;

class TopicResourceTest {

    @Test
    void shouldReturnLastMessageHttpResponse() {
        //given
        var topicName = "testTopic";
        int partition = 1;
        var topicPartition = new TopicPartition(topicName, partition);
        var expectedMessage = "expectedMessage";
        var environment = "test";
        var kafkaAdminServiceManager = mock(KafkaAdminServiceManager.class);
        var kafkaAdminService = mock(KafkaAdminService.class);
        when(kafkaAdminServiceManager.getService(environment)).thenReturn(kafkaAdminService);
        when(kafkaAdminService.getLastMessage(topicPartition)).thenReturn(expectedMessage);
        //then
        ResponseEntity<String> lastMessage =
                new TopicResource(kafkaAdminServiceManager).getLastMessage(topicName, partition, environment);
        //when
        Assertions.assertThat(lastMessage.getStatusCode()).isEqualTo(HttpStatus.OK);
        Assertions.assertThat(lastMessage.getBody()).isEqualTo(expectedMessage);
        Assertions.assertThat(lastMessage.getHeaders().getContentType()).isEqualTo(MediaType.TEXT_PLAIN);
    }
}