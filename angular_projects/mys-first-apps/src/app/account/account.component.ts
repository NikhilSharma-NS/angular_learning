import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountsServiceService } from '../service/accounts-service.service';
import { LoggingService } from '../service/logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers:[LoggingService]
})
export class AccountComponent {

  constructor(private logServ:LoggingService,private accService:AccountsServiceService){

  }

  @Input() account: { name: string, status: string };
  @Input() id: number;
  //@Output() statusChanged = new EventEmitter<{ id: number, newstatus: string }>();

  onSetTo(status: string) {
    //this.statusChanged.emit({ id: this.id, newstatus: status });
this.accService.updateStatuss(this.id,status)
    console.log(status)
  }


}
