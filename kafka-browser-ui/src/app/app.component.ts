import { Component, OnInit } from '@angular/core';
import { KafkaEnvironmentService } from './kafka-environment.service';
import { ActivatedRoute, Router, PRIMARY_OUTLET } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  applicationLoaded = false;

  constructor(
    public environmentService: KafkaEnvironmentService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.environmentService.loadEnvironment().subscribe(
        result => {
          this.applicationLoaded = result;
        }
      );
    });
  }
}
