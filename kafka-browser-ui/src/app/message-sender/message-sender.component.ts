import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TopicService } from '../topic.service';

@Component({
  selector: 'app-message-sender',
  templateUrl: './message-sender.component.html',
  styleUrls: ['./message-sender.component.css']
})
export class MessageSenderComponent implements OnInit {

  topics: Topic[] = [];
  selectedTopic: Topic

  constructor(
    private topicService: TopicService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.topicService.getTopics(params.environment).subscribe(topics => {
        this.topics = topics;
        this.selectedTopic = topics[0]
      })
    })
  }

  onSelectChange(event){
    console.dir(event)
  }

}
