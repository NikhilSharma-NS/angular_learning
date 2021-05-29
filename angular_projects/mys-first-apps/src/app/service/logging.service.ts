import { Injectable } from '@angular/core';

export class LoggingService {

  constructor() { }

  logStatusChange(status: string){
    console.log("Service called-account is created "+status);
  }
}
