import { Component, OnInit, OnDestroy } from '@angular/core';
import { ConsumerGroupsService } from '../consumer-groups.service';
import { ActivatedRoute, Router } from '@angular/router';
import { of, timer, Observable, Subscription } from 'rxjs';
import { map, mergeMap, tap, delay, repeat, catchError } from 'rxjs/operators';
import { pull, unsubscribe } from '../utils/pulling';
import { ErrorServiceService } from '../error-service.service';

@Component({
  selector: 'app-consumer-group-details',
  templateUrl: './consumer-group-details.component.html',
  styleUrls: ['./consumer-group-details.component.css']
})
export class ConsumerGroupDetailsComponent implements OnInit, OnDestroy {

  consumerGroup: ConsumerGroup;
  consumerGroupMetaData: ConsumerGroupMetaData;
  lagSum: number;
  environment: string;
  lastCGUpdate: number;
  dataCollector: ConsumerGroupDataDiff;
  private consumerGroupSubscription: Subscription;
  private consumerGroupMDSubscription: Subscription;

  constructor(
    private consumerGroupsService: ConsumerGroupsService,
    private route: ActivatedRoute,
    private errorService: ErrorServiceService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.removeSubscribtions();
      const name = params.name;
      this.environment = params.environment;

      const getter = () => this.consumerGroupsService.getConsumerGroup(name, this.environment);
      const updater = (cg: ConsumerGroup) => {
        this.dataCollector = this.calulcateConsumerGroupDataDiff(cg);
        this.consumerGroup = cg;
        this.lagSum = cg.partitions.map(it => it.lag).reduce((part, sum) => part + sum);
        this.lastCGUpdate = Date.now();
      };
      this.consumerGroupSubscription = pull(getter, updater).subscribe();

      const metaDataGetter = () => this.consumerGroupsService.getConsumerGroupMetaData(name, this.environment);
      const metaDataUpdater = cg => this.consumerGroupMetaData = cg;
      this.consumerGroupMDSubscription = pull(metaDataGetter, metaDataUpdater, 10000).subscribe();
    });
  }

  ngOnDestroy(): void {
    this.removeSubscribtions();
  }

  private removeSubscribtions() {
    unsubscribe(this.consumerGroupSubscription);
    unsubscribe(this.consumerGroupMDSubscription);
  }

  onConfirmation(shouldDelete: boolean) {
    if (shouldDelete) {
      this.delete();
    }
  }

  delete() {
    this.consumerGroupsService.deleteConsumerGroup(this.consumerGroup.name, this.environment)
      .pipe(catchError(val => of(val.error)))
      .subscribe(error => {
        if (error) {
          this.errorService.showError(error);
        } else {
          this.router.navigateByUrl('/' + this.environment + '/consumer-groups');
        }
      });
  }

  joinPartitionAssigments(assignments: TopicPartition[]): string {
    return assignments.map(assignment => assignment.topic + '_' + assignment.partition).join(' | ');
  }

  calulcateConsumerGroupDataDiff(newConsumerGroup: ConsumerGroup): ConsumerGroupDataDiff {
    if (this.consumerGroup === undefined) {
      const lagDiffMap = new Map<Partition, LagData>();
      newConsumerGroup.partitions.forEach(part => lagDiffMap.set(part.partition, { lagValue: 0, lagPerSecound: 0 }));
      return {
        messagesPerSec: 0,
        lagPerSec: 0
        // lagDiff: lagDiffMap
      };
    }
    const timeDiffSec = (Date.now() - this.lastCGUpdate) / 1000;
    const newMessages = this.messageCount(newConsumerGroup) - this.messageCount(this.consumerGroup);
    const newLag = this.lagCount(newConsumerGroup) - this.lagCount(this.consumerGroup);
    const messagesPerSec = Math.round((newMessages / timeDiffSec) * 100) / 100;
    const lagPerSec = Math.round((newLag / timeDiffSec) * 100) / 100;

    return {
      messagesPerSec,
      lagPerSec
    };
  }

  private messageCount(consumerGroup: ConsumerGroup): number {
    return consumerGroup.partitions.map(it => it.partition.lastLog).reduce((a, b) => a + b);
  }

  private lagCount(consumerGroup: ConsumerGroup): number {
    return consumerGroup.partitions.map(it => it.lag).reduce((a, b) => a + b);
  }

}

interface ConsumerGroupDataDiff {
  messagesPerSec: number;
  lagPerSec: number;
  // lagDiff: Map<Partition, LagData>;
}

interface LagData {
  lagValue: number;
  lagPerSecound: number;
}
