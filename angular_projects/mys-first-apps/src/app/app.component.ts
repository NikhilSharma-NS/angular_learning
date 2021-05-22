import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mys-first-apps';
  accounts= [{
    name: 'Master',
    status: 'active'
  }, 
  {
    name: 'Test',
    status: 'inactive'
  }
];
onaddAccount(newAccount:{name:string,status:string}){
this.accounts.push(newAccount);
}
onupdateStatus(undateInfo:{id:number,newstatus:string}){
this.accounts[undateInfo.id].status=undateInfo.newstatus
}
}