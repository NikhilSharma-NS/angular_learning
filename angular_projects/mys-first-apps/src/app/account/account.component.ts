import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @Input() account: { name: string, status: string };
  @Input() id: number;
  @Output() statusChanged = new EventEmitter<{ id: number, newstatus: string }>();

  onSetTo(status: string) {
    this.statusChanged.emit({ id: this.id, newstatus: status });
    console.log(status)
  }


}
