## DataBinding
```
Communication between both 

TypeScript Code     ->          Template(Html)

1) type script to template ( output data)

1.1) string interpolation
{{data}}

1.2) proprty binding 
[property]="data"


2) React to User Events ( template to typescript)
2.1) Event Binding 
(event)="expression"

3) Combination of both 1 & 2

3.1) Two-way-Binding
[(ngModel)]="data"

```

### 1) String Interpolation

Step1:
inside server.component.ts
```
export class ServerComponent{
  serverId: number=10;  
}
```
Step2:

to get the connection between ts to html file

i can use server id in the html file
```
<p>{{serverId}}</p>
```

### 2) Property Binding

Step1:

add 1 button in html file

```
<button class="btn btn-primary" disabled>Add Server</button>
```

Step2:

inside ts file declare a varibale and inside constructor make it true

```
export class ServerComponent implements OnInit{
  allowNewServer = false;
  constructor(){
setTimeout(()=>{
  this.allowNewServer=true
},2000)
  }
}
```

Step3:

add [disabled]="allowNewServer" in the button.
Now after 2000 micro sec the button will be disabled

```
<button class="btn btn-primary" [disabled]="allowNewServer">Add Server</button>

```


#### Property binding vs String Interpolation

if you want to output in template -> string interpolation
if you want to change the propety/directive -> property binding

### 3) Event Binding

Step1:
in type script

```
export class ServerComponent implements OnInit{
  serverstatus = 'no server';
  constructor(){
}
ngOnInit(){

}

onCreateserver(){
this.serverstatus='server created'
}
```
Step2
in html

```
<button class="btn btn-primary" (click)="onCreateserver()">Add Server</button>
<p>{{serverstatus}}<p>
```

Step3

once we will click on the button value of serverStatus will changed


#### Passing and using data with Event Binding

Step1
in html  add the input type text
```
<input="text" (input)="onupdatename()">
```

Step2
in type script write the onupdatename function

```
onupdatename(){

}
```

Step3:
use $event (this is predefined )
```
<input="text" (input)="onupdatename($event)">
```

Step4:
assign the value in onupdatename function and take from the event
```
serverName='';
onupdatename(event: Event){
this.serverName=(<HTMLInputElement>event.target).value;
}
```

Step5: display serverName on html page

```
<input="text" (input)="onupdatename($event)">
{{serverName}}
```


### 4) Two-way data Binding

we will combine property and event binding

Step1) in html file we will use ngModel

```
<input type="text" class="form-control" [(ngModel)]="serverName">
<p>{{serverName}}</p>
```

Step2) 

in type script we will declare serverName in the type script
```
export class ServerComponent implements OnInit{
  serverName = 'testserver';
  constructor(){
}
ngOnInit(){

}
```

Step3

input will be prepoupulated with testserver value
if we will update the value of input box it will update the value of below 
text as well of input text.

