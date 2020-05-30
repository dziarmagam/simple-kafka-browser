import { Component, OnInit } from '@angular/core';
import { KafkaEnvironmentService, KafkaEnvironment } from '../kafka-environment.service';
import { Router, PRIMARY_OUTLET } from '@angular/router';

@Component({
  selector: 'app-kafka-environment',
  templateUrl: './kafka-environment.component.html',
  styleUrls: ['./kafka-environment.component.css']
})
export class KafkaEnvironmentComponent implements OnInit {

  selectedEnv: string;
  environments: string[] = [];
  constructor(
    private kafkaEnvironmentService: KafkaEnvironmentService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.kafkaEnvironmentService.getAwailableEnvironments().subscribe(
      it => this.environments = it.map(env => env.name)
    );
    this.selectedEnv = this.kafkaEnvironmentService.getCurrentEnvironment();
  }

  onSelectChange(event): void {
    const envName = event.target.value;
    this.selectedEnv = this.environments.filter(it => it === envName)[0];
    const urlParts = this.router.url.split('/');
    urlParts[1] = envName;
    this.router.navigateByUrl(urlParts.join('/'));
  }


}
