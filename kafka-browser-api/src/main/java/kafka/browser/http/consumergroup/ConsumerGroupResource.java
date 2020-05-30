package kafka.browser.http.consumergroup;


import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import kafka.browser.admin.KafkaAdminServiceManager;

@RestController
@CrossOrigin
@RequestMapping("api/{env}/consumer-groups")
class ConsumerGroupResource {

    private final KafkaAdminServiceManager kafkaAdminServiceManager;
    Gson gson = new GsonBuilder().create();

    ConsumerGroupResource(KafkaAdminServiceManager kafkaAdminServiceManager) {
        this.kafkaAdminServiceManager = kafkaAdminServiceManager;
    }

    @GetMapping
    List<ConsumerGroupDto> getConsumerGroups(@PathVariable String env) {
        return kafkaAdminServiceManager.getService(env).getAllConsumerGroups();
    }

    @GetMapping("/names")
    List<String> getConsumerGroupsNames(@PathVariable String env) {
        return kafkaAdminServiceManager.getService(env).getConsumerGroupsNames();
    }

    @GetMapping("/{name}")
    ConsumerGroupDto getConsumerGroupDetails(@PathVariable String name, @PathVariable String env) {
        return kafkaAdminServiceManager.getService(env).getConsumerGroup(name);
    }
    @GetMapping("/{name}/meta-data")
    String getConsumerGroupMetaData(@PathVariable String name, @PathVariable String env) {
        return gson.toJson(kafkaAdminServiceManager.getService(env).getConsumerGroupMetaData(name));
    }

    @DeleteMapping("/{name}")
    void deleteConsumerGroup(@PathVariable String name, @PathVariable String env) {
        kafkaAdminServiceManager.getService(env).deleteConsumerGroup(name);
    }
}
