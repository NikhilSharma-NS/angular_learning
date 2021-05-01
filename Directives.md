### Directives

#### what are the directives

Directives are Instrctions in the DOM

```
<p appTurnGreen>Receive a green backgroud</p>
```

```
@Directive({
    selector:'[appTurnGreen]'
})
export class TuenGreenDirective{

}

```

#### Using ngif to output Data Conditionally

Step1)

in html file add the directive ngif.
ngIf is a strtcutual directive so * is required
```
<p *ngIf="serverCreated">Server was created,Sever name is {{serverName}}</p>
<button (click)="onCreateServer">Add Server</button>
```

Step2)


```
export class ServerComponent implements OnInit{
  serverCreated = false;
  constructor(){
}
ngOnInit(){

}
onCreateServer(){
    this.serverCreated=true;
}
```


#### Enhancing ngif with an else Condition

Step1 
we will add ng-template and add what ever we want to display in else condition 
inside ngif we will add else blcok by using noServer name
```
<p *ngIf="serverCreated; else noSever">Server was created,Sever name is {{serverName}}</p>
<ng-template #noSever>
 <p>No Server</p>
</ng-template>
<button (click)="onCreateServer">Add Server</button>
```

#### Styling Elements Dynamically with ngStyle

Step1 :

in type script will create serverStatus varibale and set in the constructor

```
export class ServerComponent implements OnInit{
  serverStatus: string = 'offline';
  constructor(){
      this.serverStatus=Math.random()>0.5?'online':'offline';
}
ngOnInit(){

}
```

Step2 :
In html we will ngStyle which is buildIn Directive .
we can use property binding on this

```
<p [ngStyle]="{'backgroundColor:getColor()}">Server is {{serverStatus}}</p>
```

Step3:
we will getColor method and add the implementaion 


```
export class ServerComponent implements OnInit{
  serverStatus: string = 'offline';
  constructor(){
      this.serverStatus=Math.random()>0.5?'online':'offline';
}
ngOnInit(){

}

getColor(){
return this.serverStatus=="online" ? 'green' : 'red';
}
```


#### Applying CSS classes dynamicallly with ngClsss

Step 1:

Inside css file add the online clas

```
.online{
  color:white;
}
```

Step2 :
in html file add ngClass . and it is again take the data same as  ngStyle . key and value pair.

```
<p [ngStyle]="{'backgroundColor:getColor()}" [ngClass]="{online:serverStatus=='online'}">Server is {{serverStatus}}</p>
```

#### Outputting List with ngFor

Step1 :
in ts file

```
export class ServerComponent implements OnInit{
servers=['firstSever','secondServer']
serverName="thirdServer"
ngOnInit(){

}
onCreateSever(){
    this.servers.push(this.serverName);
}

```

Step2 

In html file
```

<p *ngFor="let server of servers">{{server}}</p>
```


#### Getting the index when using ngFor

```
<p *ngFor="let server of servers;let i=index">{{i}}{{server}}</p>
```

