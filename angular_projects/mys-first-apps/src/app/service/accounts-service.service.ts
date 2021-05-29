import { Injectable } from '@angular/core';


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

  updateStatus(id: number,status: string){
    this.accounts[id].status=status;
  }
}
