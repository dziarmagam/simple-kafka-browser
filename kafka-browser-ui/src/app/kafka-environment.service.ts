import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class KafkaEnvironmentService {

  currentEnvironment: string;

  private readonly serverUrl = 'http://localhost:8080/api';
  private environments: KafkaEnvironment[];
  constructor(
    private httpClient: HttpClient,
    private router: Router,
  ) { }

  getAwailableEnvironments(): Observable<KafkaEnvironment[]> {
    return this.httpClient.get<KafkaEnvironment[]>(this.serverUrl + '/environments');
  }

  loadEnvironment(): Observable<boolean> {
    return this.getAwailableEnvironments()
      .pipe(
        tap(environments => this.environments = environments),
        map(_ => true)
      );
  }


  getCurrentEnvironment(): string {
    const rsult = this.router.url.split('/')[1] || this.environments[0].name;
    return decodeURI(rsult);
  }


}

export interface KafkaEnvironment {
  name: string;
}
