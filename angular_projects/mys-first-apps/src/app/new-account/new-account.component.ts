import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AccountsServiceService } from '../service/accounts-service.service';
import { LoggingService } from '../service/logging.service';


@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers:[LoggingService,AccountsServiceService]
})
export class NewAccountComponent {

  constructor(private logservice:LoggingService,private accService:AccountsServiceService){

  }

//@Output() accountAdded = new EventEmitter<{name:string,status:string}>();
  onCreateAccount(accountName: string, accountStatus: string) {
  // this.accountAdded.emit({name:accountName,status:accountStatus});
   this.logservice.logStatusChange(accountName);
   this.accService.addAccount(accountName,accountStatus)
  }
}