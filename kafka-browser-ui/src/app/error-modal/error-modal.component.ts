import { Component, OnInit, OnDestroy } from '@angular/core';
import { ErrorServiceService } from '../error-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-error-modal',
  templateUrl: './error-modal.component.html',
  styleUrls: ['./error-modal.component.css']
})
export class ErrorModalComponent implements OnInit, OnDestroy {

  message = 'no error';
  hidden = true;
  private subscription: Subscription;
  constructor(private errorServiceService: ErrorServiceService) { }

  ngOnInit(): void {
    console.log('subscribing to errors');
    this.subscription = this.errorServiceService.subscriveToErrors(error => {
      this.hidden = false;
      this.message = error;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  closeModal() {
    this.hidden = true;
  }

}
