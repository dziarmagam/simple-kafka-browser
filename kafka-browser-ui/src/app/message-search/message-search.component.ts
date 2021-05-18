import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorServiceService } from '../error-service.service';
import { TopicService } from '../topic.service';

@Component({
  selector: 'app-message-search',
  templateUrl: './message-search.component.html',
  styleUrls: ['./message-search.component.css']
})
export class MessageSearchComponent implements OnInit {


  topics: Topic[] = [];
  selectedTopic: string;
  message: string = "";
  key: string = "";
  environment: string;
  foundMessage: string = "loading...";


  constructor(
    private topicService: TopicService,
    private errorService: ErrorServiceService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.environment = params.environment;
      this.topicService.getTopics(params.environment).subscribe(topics => {
        this.topics = topics;
        this.selectedTopic = topics[0].name;
      })
    })
  }

  onMessageInput() {
    if (this.key !== "" || this.message !== "") {
      this.topicService.findMessage(this.selectedTopic, this.environment, this.key, this.message)
      .subscribe(response => {
        if (typeof response === 'object') {
          this.foundMessage = JSON.stringify(response);
        } else {
          this.foundMessage = response;
        }
      },
        error => {
          this.errorService.showError(error.error);
        });
    }
  }

}
