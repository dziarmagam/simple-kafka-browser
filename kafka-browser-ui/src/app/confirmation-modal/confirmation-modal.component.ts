import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.css']
})
export class ConfirmationModalComponent implements OnInit {

  @Input() message: string;
  @Input() buttonName: string;
  @Output() confirmationResult = new EventEmitter<boolean>();

  hidden = true;
  constructor() { }

  ngOnInit(): void {
  }

  emitResult(accepted: boolean) {
    this.confirmationResult.emit(accepted);
    this.hidden = true;
  }

  showModal() {
    this.hidden = false;
  }

}
