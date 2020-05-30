import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsumerGroupsService {

  private url = 'http://localhost:8080/api/';

  constructor(
    private httpClient: HttpClient
  ) { }

  getConsumerGroupsNames(environment: string): Observable<string[]> {
    return this.httpClient.get<string[]>(this.url + environment + '/consumer-groups');
  }


  getConsumerGroups(environment: string): Observable<ConsumerGroup[]> {
    return this.httpClient.get<ConsumerGroup[]>(this.url + environment + '/consumer-groups');
  }

  getConsumerGroupMetaData(name: string, environment: string) {
    return this.httpClient.get<ConsumerGroupMetaData>(this.url + environment + '/consumer-groups' + '/' + name + '/meta-data');
  }

  getConsumerGroup(name: string, environment: string): Observable<ConsumerGroup> {
    return this.httpClient.get<ConsumerGroup>(this.url + environment + '/consumer-groups' + '/' + name);
  }

  deleteConsumerGroup(name: string, environment: string): Observable<any> {
    return this.httpClient.delete(this.url + environment + '/consumer-groups' + '/' + name);
  }
}
