#### ngIf and nf For 


###### Step1

Add the even and oddNumber is directive-dee.component.ts

```
  numbers=[1,2,3,4,5]
  oddNumber=[1,3,5]
  evenNumber=[2,4]
  onlyOdd = false;
```

###### Step2

directive-dee.component.html 
Inside this file show odd data on click of button so we need to add 
ngIf Condition
For display  the number we need to use ngFor

```
<div class="container">
    <div class="row">
        <div class="col-xs-12">
            <button class="btn btn-primary" (click)="onlyOdd = !onlyOdd">Only show odd numbers</button>
            <br><br>
            <ul class="list-group">
                <div *ngIf="onlyOdd">
                    <li class="list-group-item" *ngFor="let n of oddNumber">{{n}}
                    </li>
                </div>
                <div *ngIf="!onlyOdd">
                    <li class="list-group-item" *ngFor="let n of evenNumber">{{n}}
                    </li>
                </div>


            </ul>
        </div>
    </div>
</div>
```


#### ngClass and ngStyple 

Step1
directive-dee.component.css

```
.odd{
    color: blue;
}

.even{
    color: brown;
}
```

Step2
directive-dee.component.html

add the condition for directive

```
<div class="container">
    <div class="row">
        <div class="col-xs-12">
            <button class="btn btn-primary" (click)="onlyOdd = !onlyOdd">Only show odd numbers</button>
            <br><br>
            <ul class="list-group">
                <div *ngIf="onlyOdd">
                    <li class="list-group-item" [ngClass]="{odd: n % 2 != 0}" *ngFor="let n of oddNumber">{{n}}
                    </li>
                </div>
                <div *ngIf="!onlyOdd">
                    <li class="list-group-item" [ngClass]="{odd: n % 2 != 0}" *ngFor="let n of evenNumber">{{n}}
                    </li>
                </div>


            </ul>
        </div>
    </div>
</div>
```

Step 3: add styple in directive-dee.component.html

 [ngStyle]="{backgroundColor: n % 2 != 0 ? 'yellow':'transparent'}"

```
<div class="container">
    <div class="row">
        <div class="col-xs-12">
            <button class="btn btn-primary" (click)="onlyOdd = !onlyOdd">Only show odd numbers</button>
            <br><br>
            <ul class="list-group">
                <div *ngIf="onlyOdd">
                    <li class="list-group-item" 
                    [ngClass]="{odd: n % 2 != 0}" 
                    [ngStyle]="{backgroundColor: n % 2 != 0 ? 'yellow':'transparent'}"
                    *ngFor="let n of oddNumber">{{n}}
                    </li>
                </div>
                <div *ngIf="!onlyOdd">
                    <li class="list-group-item" 
                    [ngClass]="{odd: n % 2 != 0}"
                    [ngStyle]="{backgroundColor: n % 2 != 0 ? 'yellow':'transparent'}"
                     *ngFor="let n of evenNumber">{{n}}
                    </li>
                </div>


            </ul>
        </div>
    </div>
</div>

```


#### Creating a Basic Attribute Directives

Step 1:

Create the ts file basic-hightlight-directive.ts

Step 2: basic-hightlight-directive.ts update

add the selecter and create constuctor and override onOnit func

```
import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector:'[appbBasicHightlight]'
})
export class BasicHighlightDirective implements OnInit{

constructor(private elementRef: ElementRef){

}

ngOnInit(){
    this.elementRef.nativeElement.style.backgroundColor='yellow';
}

}
```

Step 3

we need to inform to angular that we have a new directive

add inside declaration section of module

```
import { BasicHighlightDirective } from './basic-highlight/basic-highlight-directive';
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    DirectivesDeeComponent,
    BasicHighlightDirective
  ],
```

Step 4:

Now use this directive in directive-dee.component.html

```
<p appbBasicHightlight>
                Basic Directive demo
            </p>
```

##### Using the Renderer to build a Better Attribute Directive

Step1 :

ng g directive better-highlight


Step 2: Now add the below inside better-hightlight.directive.ts

```
import { Directive,ElementRef,OnInit,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  constructor(private eleref:ElementRef,private ren:Renderer2) { }

  ngOnInit(){
    this.ren.setStyle(this.eleref.nativeElement,'background-color','green')
  }

}

```


Step3 : add below content in directive.dee.componnet.html

```
 <p appBetterHighlight>
                Better Directive demo
            </p>
```

#### Using HostListener to Listen to Host Events

Step 1:

we can add the css on the basic of event of directive

for mouseenter,mouseleave,click -> need to add below function in better-hightligt.directive.ts

```
 @HostListener('mouseenter')mouseenter(eve:Event){
    this.ren.setStyle(this.eleref.nativeElement,'background-color','green')
  }
  @HostListener('mouseleave')mouseleave(eve:Event){
    this.ren.setStyle(this.eleref.nativeElement,'background-color','yellow')
  }
  @HostListener('click')click(eve:Event){
    this.ren.setStyle(this.eleref.nativeElement,'background-color','red')
  }
```


#### Using HostBinding to bind to Host Properties

better-hightligt.directive.ts

```
@HostBinding('style.backgroundColor') backgroundColor: string;

  ngOnInit(){
   // this.ren.setStyle(this.eleref.nativeElement,'background-color','green')
  }

  @HostListener('mouseenter')mouseenter(eve:Event){
   // this.ren.setStyle(this.eleref.nativeElement,'background-color','green')
    this.backgroundColor='green'
  }
  @HostListener('mouseleave')mouseleave(eve:Event){
    //this.ren.setStyle(this.eleref.nativeElement,'background-color','yellow')
    this.backgroundColor='yellow'
  }
  @HostListener('click')click(eve:Event){
   // this.ren.setStyle(this.eleref.nativeElement,'background-color','red')
    this.backgroundColor='red'
  }
```


#### binding to directive Properties 

Step1

Inside better-highlight.directive.ts

```
@Input() defaultColor: string = 'transparent'
 @Input() hightlightColor: string = 'yellow'

  @HostBinding('style.backgroundColor') backgroundColor: string=this.defaultColor;

  ngOnInit(){
   // this.ren.setStyle(this.eleref.nativeElement,'background-color','green')
  }

  @HostListener('mouseenter')mouseenter(eve:Event){
   // this.ren.setStyle(this.eleref.nativeElement,'background-color','green')
    //this.backgroundColor='green'
    this.backgroundColor=this.hightlightColor;
  }
  @HostListener('mouseleave')mouseleave(eve:Event){
    //this.ren.setStyle(this.eleref.nativeElement,'background-color','yellow')
    //this.backgroundColor='yellow'
    this.backgroundColor=this.defaultColor;
  }

```

Step2 :

Inside directive-dee.componenet.html

```
 <p appBetterHighlight [defaultColor]="'purple'" [hightlightColor]="'green'">
                Better Directive demo Properties
            </p>
```


##### What Happens behind the Scenes On Structural Directives

*ngIf

it will add ng-template and add the condition 


#### Building a Strctural Directive

Step 1:
ng g d unless

Step 2:

Add the below conatin in unless.directive.ts file

```
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  @Input() set unless(condition: boolean) {
    if (!condition) {
      this.vcRef.createEmbeddedView(this.temRef);
    } else {
      this.vcRef.clear();
    }
  }
  constructor(private temRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}

```

Step 3:
Add below inside directive-dee.component.html

```
 <div *appUnless="onlyOdd">
                <li class="list-group-item" 
                [ngClass]="{odd: n % 2 != 0}"
                [ngStyle]="{backgroundColor: n % 2 != 0 ? 'yellow':'transparent'}"
                 *ngFor="let n of evenNumber">{{n}}
                </li>
            </div>
```

Step 4: 
Now we will get this error 

core.js:10126 NG0303: Can't bind to 'appUnless' since it isn't a known property of 'div'.

Step 5:

Need to update inside unless.directive.ts file 

```
 @Input() set unless(condition: boolean) {

     to 
  @Input() set appUnless(condition: boolean) {
```

#### Understaning of ngSwwitch

Step 1: 
add the value in ts file
directives-dee.component.ts

```
value = 15
```

Step 2: 
add the condition in html file
directives-dee.component.html

```
 <div [ngSwitch]="value">
                <p *ngSwitchCase="5">Value is 5</p>
                <p *ngSwitchCase="10">Value is 10</p>
                <p *ngSwitchCase="15">Value is 15</p>
                <p *ngSwitchDefault="20">Value is Default</p>
            </div>
```


#### Services and Dependecy Injection

###### What are services

```
Application

                         AppComponent                                 <- Log Service
AboutComponent                            UserComponent               <- User Service 
(log data to console)                     (Store user data)   
                                                |
                                          UserDetailComponent                              
                                          (log data to console)   

```




Step 1:

ng g c account

account.component.html

```
<div class="row">
    <div class="col-xs-12 col-md-8 col-md-offset-2">
      <h5>{{ account.name }}</h5>
      <hr>
      <p>This account is {{ account.status }}</p>
      <button class="btn btn-default" (click)="onSetTo('active')">Set to 'active'</button>
      <button class="btn btn-default" (click)="onSetTo('inactive')">Set to 'inactive'</button>
      <button class="btn btn-default" (click)="onSetTo('unknown')">Set to 'unknown'</button>
    </div>
  </div>
```
account.component.ts

```
export class AccountComponent {
  @Input() account: { name: string; status: string };
  @Input() id: number;
  @Output() statusChanged = new EventEmitter<{ id: number, newstatus: string }>();

  onSetTo(status: string) {
    this.statusChanged.emit({ id: this.id, newstatus: status });

  }
}

```

Step 2:

ng g c new-account 

new-account.component.ts

```
export class NewAccountComponent {

@Output() accounAdded = new EventEmitter<{name:string,status:string}>();
  onCreateAccount(accountName: string, accountStatus: string) {
   this.accounAdded.emit({name:accountName,status:accountStatus});
  }
}
```

new-account.component.html
```
<div class="row">
    <div class="col-xs-12 col-md-8 col-md-offset-2">
      <div class="form-group">
        <label>Account Name</label>
        <input
          type="text"
          class="form-control"
          #accountName>
      </div>
      <div class="form-group">
        <select class="form-control" #status>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
          <option value="hidden">Hidden</option>
        </select>
      </div>
      <button
        class="btn btn-primary"
        (click)="onCreateAccount(accountName.value, status.value)">
        Add Account
      </button>
    </div>
  </div>
```
Step 3:

Add the below data in app component
app.component.ts
```
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
```
app.component.html

```
<div class="container">
    <div class="row">
      <div class="col-xs-12 col-md-8 col-md-offset-2">
        <app-new-account (accountAdded)="addAccount($event)"></app-new-account>
        <hr />
        <app-account
          *ngFor="let acc of accounts; let i = index"
          [account]="acc"
          [id]="i"
          (statusChanged)="updateStatus($event)"
        ></app-account>
      </div>
    </div>
  </div>

```

##### Creating a Logging Service

Step 1: create the service
ng g s service/logging

```
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }

  logStatusChange(status: string){
    console.log("Status Changed to "+status);
  }
}


```

Step 2:

Now we will use the logging service in the component

inside new-account.component.ts

```
 onCreateAccount(accountName: string, accountStatus: string) {
    const logService=new LoggingService();
    logService.logStatusChange(status);
 }
```


###### Injecting the logging service into components

Step1: Add the constructor in new-account.component
we need to add provider as well 

```
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers:[LoggingService]
})
export class NewAccountComponent {

  constructor(private logservice:LoggingService){

  }

@Output() accountAdded = new EventEmitter<{name:string,status:string}>();
  onCreateAccount(accountName: string, accountStatus: string) {
   this.accountAdded.emit({name:accountName,status:accountStatus});
   this.logservice.logStatusChange(accountName);
  }
}
```

##### creating the data Service

Step 1: 

create the service  ( ng g s AccountsService)

Step 2:

```
import { Injectable } from '@angular/core';


export class AccountsServiceService {
  accounts= [{
    name: 'Master',
    status: 'active'
  }, 
  {
    name: 'Test',
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

```

Step 3: 
add the AccountsServiceService in AppComponent and assign the account 

```
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
```

Step 4: Go inside new account component and use the account service

```
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
```

Step 5:

Now go inside account component

```
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


```

Step 6:
for now remove the binding in app.component.html

```
<app-servers></app-servers>

<app-directives-dee></app-directives-dee>


<div class="container">
    <div class="row">
      <div class="col-xs-12 col-md-8 col-md-offset-2">
        <app-new-account ></app-new-account>
        <hr />
        <app-account
          *ngFor="let acc of accounts; let i = index"
          [account]="acc"
          [id]="i"
        ></app-account>
      </div>
    </div>
  </div>
```


##### Hierarchial Injector
```

AppModule -> Same Instance of service is avaliable Application wide

AppComponent -> Same Instance Service is avaliable for all components(but not for 
other Services)

Any Other Component -> Same instance of service is avaliable for the components 
and all its child components

```

