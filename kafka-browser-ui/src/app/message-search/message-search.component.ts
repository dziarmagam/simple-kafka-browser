import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorServiceService } from '../error-service.service';
import { KafkaRecord, TopicService } from '../topic.service';

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
  searchSince: number = 60 * 60
  environment: string;
  messages: KafkaRecord[] = [];

  private filterValue: string = ""

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

  filtredTopics(){
    return this.topics.filter(it => it.name.toLowerCase().includes(this.filterValue.toLowerCase()))
  }

  onFilterInput(event){
    this.filterValue = event.target.value.toLowerCase();
  }

  onMessageInput() {
    if (this.key !== "" || this.message !== "") {
      this.topicService.findMessage(this.selectedTopic, this.environment, this.key, this.message, this.searchSince)
      .subscribe(response => {
       this.messages = response.sort((a,b) => a.timestamp > b.timestamp ? -1: ((b.timestamp > a.timestamp) ? 1 : 0))
      },
        error => {
          this.errorService.showError(error.error);
        });
    }
  }

  toDate(timestamp: number){
    return new Date(timestamp).toISOString();
  }

}
