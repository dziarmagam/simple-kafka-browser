package kafka.browser.http.consumergroup;

import org.apache.kafka.clients.admin.ConsumerGroupDescription;
import org.apache.kafka.clients.admin.MemberDescription;
import org.apache.kafka.common.ConsumerGroupState;

import java.util.ArrayList;
import java.util.List;

public class ConsumerGroupMetaDataDto {
    public final String groupId;
    public final ConsumerGroupState consumerGroupState;
    public final List<MemberDescription> memberDescriptionList;
    public final String partitionAssignor;
    public final String coordinator;

    public ConsumerGroupMetaDataDto(ConsumerGroupDescription description) {
        this.groupId = description.groupId();
        this.consumerGroupState = description.state();
        this.memberDescriptionList = new ArrayList<>(description.members());
        this.partitionAssignor = description.partitionAssignor();
        this.coordinator = description.coordinator().toString();
    }
}
