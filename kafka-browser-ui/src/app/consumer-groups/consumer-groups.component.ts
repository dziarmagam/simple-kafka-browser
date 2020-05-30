import { Component, OnInit } from '@angular/core';
import { ConsumerGroupsService } from '../consumer-groups.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-consumer-groups',
  templateUrl: './consumer-groups.component.html',
  styleUrls: ['./consumer-groups.component.css']
})
export class ConsumerGroupsComponent implements OnInit {

  consumerGroups: ConsumerGroup[];
  displayGroups: ConsumerGroup[];

  constructor(
    private consumerGroupsService: ConsumerGroupsService,
    private route: ActivatedRoute
  ) { }


  ngOnInit() {
    this.route.params.subscribe(params => {
      const environment = params.environment;

      this.consumerGroupsService.getConsumerGroups(environment)
        .subscribe(cGroups => {
          this.consumerGroups = cGroups;
          this.displayGroups = cGroups;
        });
    });
  }

  onFilterInput(event) {
    const filterValue = event.target.value.toLowerCase();
    if (filterValue === undefined || filterValue === '') {
      this.displayGroups = this.consumerGroups;
    } else {
      this.displayGroups = this.consumerGroups.filter(cg => cg.name.toLowerCase().includes(filterValue));
    }
  }

}
