package kafka.browser.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class Config {


    @Value("${environments.file.path:environments.json}")
    private String environmentFilePath;
    @Value("${client.id:skb-client}")
    private String clientId;
    @Value("${connection.pool.size:10}")
    private Integer connectionPoolSize;
    @Value("${server.port:17511}")
    private Integer serverPort;


    public Config(String environmentFilePath, String clientId, Integer connectionPoolSize, Integer serverPort) {
        this.environmentFilePath = environmentFilePath;
        this.clientId = clientId;
        this.connectionPoolSize = connectionPoolSize;
        this.serverPort = serverPort;
    }

    private Config() {

    }

    public Integer getConnectionPoolSize() {
        return connectionPoolSize;
    }

    public String getClientId() {
        return clientId;
    }

    public String getEnvironmentFilePath() {
        return environmentFilePath;
    }

    public Integer getServerPort() {
        return serverPort;
    }
}
