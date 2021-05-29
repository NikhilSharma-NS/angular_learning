import { Component, OnInit } from '@angular/core';
import { AccountsServiceService } from './service/accounts-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AccountsServiceService]
})
export class AppComponent implements OnInit{
  title = 'mys-first-apps';
  accounts:
  {
    name:string,
    status: string
  }[]=[];
 
  constructor(private accountService: AccountsServiceService){

  }

  ngOnInit(){
    this.accounts=this.accountService.accounts
  }


}