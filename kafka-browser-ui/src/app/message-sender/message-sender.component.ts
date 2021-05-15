import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TopicService } from '../topic.service';
import { FormBuilder } from '@angular/forms';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { ErrorServiceService } from '../error-service.service';

@Component({
  selector: 'app-message-sender',
  templateUrl: './message-sender.component.html',
  styleUrls: ['./message-sender.component.css']
})
export class MessageSenderComponent implements OnInit {

  topics: Topic[] = [];
  selectedTopic: string;
  message: string = "";
  key: string = "";
  environment: string;


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
    if (this.key !== "" && this.message !== "") {
      this.topicService.sendMessage(this.selectedTopic, this.environment, this.key, this.message)
        .pipe(catchError(val => of(val.error)))
        .subscribe(error => {
          if (error) {
            this.errorService.showError(error);
          } else {
            console.log("Message was send");
          }
        });
    }
  }

}
