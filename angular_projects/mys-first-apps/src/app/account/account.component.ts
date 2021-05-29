import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountsServiceService } from '../service/accounts-service.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers:[AccountsServiceService]
})
export class AccountComponent {

  constructor(private accService:AccountsServiceService){

  }

  @Input() account: { name: string, status: string };
  @Input() id: number;
  //@Output() statusChanged = new EventEmitter<{ id: number, newstatus: string }>();

  onSetTo(status: string) {
    //this.statusChanged.emit({ id: this.id, newstatus: status });
this.accService.updateStatus(this.id,status)
    console.log(status)
  }


}
