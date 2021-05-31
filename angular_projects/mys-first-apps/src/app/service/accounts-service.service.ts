import { Injectable } from '@angular/core';


@Injectable()
export class AccountsServiceService {
  accounts= [{
    name: 'Master',
    status: 'active'
  }, 
  {
    name: 'Tes1t',
    status: 'inactive'
  }
];

  constructor() { }


  addAccount(name: string,status: string){
    this.accounts.push({name:name,status:status});
  }

  updateStatuss(id: number,status: string){
    this.accounts[id].status=status;
  }
}
