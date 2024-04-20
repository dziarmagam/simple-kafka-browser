package kafka.browser.admin;

import org.apache.kafka.clients.admin.AdminClient;

import java.util.Properties;

import kafka.browser.environment.Environment;

public class AdminClientCreator {

    private final AdminClient adminClient;

    AdminClientCreator(Environment env) {
        this.adminClient = AdminClient.create(createProperties(env));
    }

    public AdminClient getAdminClient() {
        return adminClient;
    }

    Properties createProperties(Environment env) {
        Properties properties = new Properties();
        properties.put("bootstrap.servers", env.bootstrapServer);
        properties.put("security.protocol", "SASL_SSL");
        properties.put("sasl.mechanism", "PLAIN");
        if ((env.username != null && !env.username.isBlank() && (env.password != null && !env.password.isBlank()))) {
            properties.put("sasl.jaas.config", "org.apache.kafka.common.security.plain.PlainLoginModule   required username='" + env.username + "'   password='" + env.password + "';");
        }
        return properties;
    }
}
