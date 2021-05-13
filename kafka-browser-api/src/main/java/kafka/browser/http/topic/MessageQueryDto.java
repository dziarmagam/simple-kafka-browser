package kafka.browser.http.topic;

import java.time.Instant;

import kafka.browser.admin.service.MessageQuery;

public class MessageQueryDto {
    private MessageQuery.QueryType queryType;
    private String value;
    private Instant since;

    public MessageQueryDto() {
    }

    public MessageQueryDto(MessageQuery.QueryType queryType, String value, Instant since) {
        this.queryType = queryType;
        this.value = value;
        this.since = since;
    }

    public MessageQuery toMessageQuery(){
        return new MessageQuery(queryType, value);
    }

    public MessageQuery.QueryType getQueryType() {
        return queryType;
    }

    public String getValue() {
        return value;
    }

    public Instant getSince() {
        return since;
    }

    public void setQueryType(MessageQuery.QueryType queryType) {
        this.queryType = queryType;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public void setSince(Instant since) {
        this.since = since;
    }
}
