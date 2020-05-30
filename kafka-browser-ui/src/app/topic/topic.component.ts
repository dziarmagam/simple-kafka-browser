import { Component, OnInit, Input } from '@angular/core';
import { TopicService } from '../topic.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  topics: Topic[] = [];
  displayTopics: Topic[] = [];
  constructor(
    private topicService: TopicService,
    private route: ActivatedRoute) {}

  onFilterInput(event) {
    const filterValue = event.target.value.toLowerCase();
    if (filterValue === undefined || filterValue === '') {
      this.displayTopics = this.topics;
    } else {
      this.displayTopics = this.topics.filter(topic => topic.name.toLowerCase().includes(filterValue));
    }
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.topicService.getTopics(params.environment)
      .subscribe(topics => {
        this.topics = topics;
        this.displayTopics = topics;
      });
    });
  }

  partitionString(topic: Topic): string {
    return topic.partitions.map(it => it.name).toString();
  }

}
