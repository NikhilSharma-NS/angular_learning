import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoggingService } from '../service/logging.service';


@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {

@Output() accountAdded = new EventEmitter<{name:string,status:string}>();
  onCreateAccount(accountName: string, accountStatus: string) {
    const logService=new LoggingService();
    logService.logStatusChange(accountName);
   this.accountAdded.emit({name:accountName,status:accountStatus});
  }
}