package kafka.browser.admin.service;

public class MessageQuery {
    public final String value;
    public final QueryType queryType;

    public MessageQuery(QueryType queryType, String value) {
        this.queryType = queryType;
        this.value = value;
    }

    public enum QueryType {
        Key,
        Message
    }
}
