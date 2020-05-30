package kafka.browser.admin;

import org.apache.kafka.clients.admin.AdminClient;

import java.util.Properties;

import kafka.browser.environment.Environment;

public class AdminClientCreator {

    private final AdminClient adminClient;

    AdminClientCreator(Environment env) {
        this.adminClient = AdminClient.create(createProperties(env));
    }

    public AdminClient getAdminClient(){
        return adminClient;
    }

    Properties createProperties(Environment env) {
        Properties properties = new Properties();
        properties.put("bootstrap.servers", env.bootstrapServer);
        return properties;
    }
}
