import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { TopicService } from '../topic.service';
import { ActivatedRoute, Router } from '@angular/router';
import { pull, unsubscribe } from '../utils/pulling';
import { Subscription, of } from 'rxjs';
import { ErrorServiceService } from '../error-service.service';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-topic-details',
  templateUrl: './topic-details.component.html',
  styleUrls: ['./topic-details.component.css']
})
export class TopicDetailsComponent implements OnInit, OnDestroy {

  private CONSUMER_GROUP_PULL_INTERVAL_MS = 30000;

  topic: Topic;
  consumerGroups: string[];
  message: string;
  environment: string;
  messagesPerSec: number;
  messageOffset = '0';
  private lastUpdate: number;
  private topicUpdateSubscription: Subscription;
  private consumerGroupsUpdateSubscription: Subscription;

  constructor(
    private topicService: TopicService,
    private route: ActivatedRoute,
    private errorService: ErrorServiceService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {

      const name = params.name;
      this.environment = params.environment;
      const getTopicDetails = () => this.topicService.getTopic(name, this.environment);
      const getConsumerGroups = () => this.topicService.getConsumerGroupsForTopic(name, this.environment);

      this.topicUpdateSubscription = pull(getTopicDetails,
        topic => {
          this.messagesPerSec = this.calculateMessagePerSec(topic);
          this.lastUpdate = Date.now();
          this.topic = topic;
        }
      ).subscribe();

      this.consumerGroupsUpdateSubscription = pull(getConsumerGroups,
        cGroups => this.consumerGroups = cGroups, this.CONSUMER_GROUP_PULL_INTERVAL_MS).subscribe();
    });
  }

  ngOnDestroy(): void {
    unsubscribe(this.topicUpdateSubscription);
    unsubscribe(this.consumerGroupsUpdateSubscription);
  }

  getLastMessage(partition: Partition) {
    this.topicService.getLastMessage(this.topic.name, partition.partitionNumber, this.environment)
      .subscribe(message => {
        if (typeof message === 'object') {
          this.message = JSON.stringify(message);
        } else {
          this.message = message;
        }
      },
        error => {
          this.errorService.showError(error.error);
        });
  }

  updateInput(event) {
    this.messageOffset +=  event.target.value;
  }

  onDeleteConfirmation(shouldDelete: boolean) {
    if (shouldDelete) {
      this.delete();
    }
  }

  delete() {
    this.topicService.deleteTopic(this.topic.name, this.environment)
      .pipe(catchError(val => of(val.error)))
      .subscribe(error => {
        if (error) {
          this.errorService.showError(error);
        } else {
          this.router.navigateByUrl('/' + this.environment + '/topics');
        }
      });
  }

  calculateMessagePerSec(newTopicData: Topic): number {
    if (this.topic === undefined) {
      return 0;
    } else {
      const newMessages = (newTopicData.messages - this.topic.messages);
      const secPassed = (Date.now() - this.lastUpdate) / 1000;
      return Math.round((newMessages / secPassed) * 100) / 100;
    }
  }

}
