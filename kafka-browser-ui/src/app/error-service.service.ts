import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorServiceService {

  private errorsStream = new Subject();

  constructor() { }

  showError(error: string) {
    console.log('showing error' + error);
    this.errorsStream.next(error);
  }

  subscriveToErrors(errorHandler: (error) => void) {
    console.log('creating subscription for errors');
    return this.errorsStream.subscribe(errorHandler);
  }
}
