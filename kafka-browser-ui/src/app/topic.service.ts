import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { KafkaEnvironmentService } from './kafka-environment.service';
import { toBase64String } from '@angular/compiler/src/output/source_map';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  private serverUrl = 'http://localhost:8080/api/';
  constructor(
    private httpClient: HttpClient,
    private kafkaEnvironmentService: KafkaEnvironmentService
  ) { }

  getTopics(environment: string): Observable<Topic[]> {
    return this.httpClient.get<Topic[]>(this.serverUrl + environment + '/topics');
  }

  getTopic(name: string, environment: string): Observable<Topic> {
    return this.httpClient.get<Topic>(this.serverUrl + environment + '/topics/' + name);
  }

  getConsumerGroupsForTopic(
    topicName: string,
    environment: string): Observable<string[]> {
    return this.httpClient.get<string[]>(this.serverUrl + environment + '/topics/' + topicName + '/consumer-groups');
  }

  getLastMessage(topic: string, partitionNumber: number, environment: string): Observable<string> {
    const url = this.serverUrl + environment + '/topics/' + topic + '/' + partitionNumber + '/lastMessage';
    return this.httpClient.get(url,
      { responseType: 'text' });
  }

  deleteTopic(topic: string, environment: string): Observable<any> {
    const url = this.serverUrl + environment + '/topics/' + topic;
    return this.httpClient.delete(url);
  }

  sendMessage(topic: string, environment: string, key: string, message: string): Observable<any> {
    const url = this.serverUrl + environment + '/topics/' + topic + "/send";
    return this.httpClient.post(url, {
      key: key,
      value: btoa(message)
    });
  }

}
