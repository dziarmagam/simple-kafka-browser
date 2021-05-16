package kafka.browser.http.topic;

import com.fasterxml.jackson.databind.JsonNode;

import kafka.browser.admin.service.MessageQuery;
import kafka.browser.admin.service.MessageQuery.KeyMessageQueryValue;

import static org.apache.tomcat.util.codec.binary.Base64.decodeBase64;

public class MessageQueryDto {
    private MessageQuery.QueryType queryType;
    private JsonNode value;
    private Long from;
    private Long to;

    public MessageQueryDto() {
    }

    public MessageQueryDto(MessageQuery.QueryType queryType, JsonNode value, Long from, Long to) {
        this.queryType = queryType;
        this.value = value;
        this.from = from;
        this.to = to;
    }

    public MessageQuery toMessageQuery() {
        switch (queryType) {
            case Message:
            case Key:
                return new MessageQuery(queryType, new String(decodeBase64(value.asText())));
            case KeyAndMessage:
                return new MessageQuery(queryType, new KeyMessageQueryValue(
                        new String(decodeBase64(value.get("key").asText())),
                        new String(decodeBase64(value.get("message").asText()))
                ));
            default:
                throw new RuntimeException("Unsupported query type " + queryType);
        }
    }

    public MessageQuery.QueryType getQueryType() {
        return queryType;
    }

    public JsonNode getValue() {
        return value;
    }

    public Long getFrom() {
        return from;
    }

    public void setQueryType(MessageQuery.QueryType queryType) {
        this.queryType = queryType;
    }

    public void setValue(JsonNode value) {
        this.value = value;
    }

    public void setFrom(Long from) {
        this.from = from;
    }

    public Long getTo() {
        return to;
    }

    public void setTo(Long to) {
        this.to = to;
    }
}
