#### Deep Dive in Componets

##### Splitttling Apps into Component

Property & Event Binding

we can use in property and event binding in  below sections 

```
1) HTML Elemets (Native Properties)
2) Directive (Custom Properties and Events)
3) Components (Custom Properties & Events)

```

##### Binding to Custom Properties

Inside server-elements-componnent.ts

```
 @Input() element: { type: string, name: string, content: string };
```

I want to access element in another components. by default all property can not be accessible outside the component. so we need to add the decorator

Now can bind it like below in app.component.html

```
<div class="row">
    <div class="col-xs-12">
      <app-server-elements
        *ngFor="let serverElement of serverElements"
        [element]="serverElement"
      ></app-server-elements>
    </div>
  </div>

```

##### Assigning an Alias to custome Properties


```
 @Input('srvElement') element: { type: string, name: string, content: string };
```
```
<div class="row">
    <div class="col-xs-12">
      <app-server-elements
        *ngFor="let serverElement of serverElements"
        [srvElement]="serverElement"
      ></app-server-elements>
    </div>
  </div>

```


##### Binding to Custom Events

inside appcomponent.html

```
  <app-cockpits
    (srvCreate)="onServerAdded($event)"
    (blueprintCreated)="onBlueprintAdded($event)"
  ></app-cockpits>
```

inside app.ts

```
  onServerAdded(serverData: {name: string, content: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.name,
      content: serverData.content
    });
  }

  onBlueprintAdded(blueprintData: {name: string, content: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.name,
      content: blueprintData.content
    });
  }
```

inside cockpits.ts

```
  @Output('srvCreate') serverCreated = new EventEmitter<{name: string, content: string}>();
  @Output() blueprintCreated = new EventEmitter<{name: string, content: string}>();
```

```
 onAddServer(): void {
      this.serverCreated.emit({name: this.newServerName, content: this.newServerContent});
  }

  onAddBlueprint(): void {
      this.blueprintCreated.emit({name: this.newServerName, content: this.newServerContent});
  }

```

#### Assigning an alias to Custom Events

```
  @Output('srvCreate') serverCreated = new EventEmitter<{name: string, content: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{name: string, content: string}>();
```


#### Understanding View Encapsulation

add the ViewEncapsulation inside server-element.component.ts

```
@Component({
  selector: 'app-server-elements',
  templateUrl: './server-elements.component.html',
  styleUrls: ['./server-elements.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class ServerElementsComponent implements OnInit {

  // alias found in template
  @Input('srvElement') element: { type: string, name: string, content: string };

  constructor() { }

  ngOnInit() {
  }

}
```
add the css inside server-element.component.css
```
label{
    color: green;
}
```
encapsulation:ViewEncapsulation.None -> apply the css what every I am adding inside css file of component

encapsulation:ViewEncapsulation.Native -> this is called ShadowDom instead of Native Now the functionality is the same though.


#### Using Local Refernces in Templates

inside cockpits.component.html : serverNameInput
and pass insdie onclick function argument

```
<input type="text" class="form-control" #serverNameInput [(ngModel)]="newServerName">

 <button
        class="btn btn-primary btn-outline-primary"
        (click)="onAddServer(serverNameInput)">Add Server </button>
```

Inside cockpits.component.ts file

```
 onAddServer(name): void {
    console.log(name.value)
 }
```


#### Getting Access to the Template & DOM with @ViewChild
inside cockpits.component.html 

```
 <input type="text" class="form-control" #servernamesInput>
```

inside cockpits.component.ts

```
 @ViewChild('servernamesInput') servernamesInputva: ElementRef;

  onAddServer(): void {
      console.log(this.servernamesInputva.nativeElement.value)
  }
```

#### Understanding the Component Life Cycle

LifeCycle 

1) ngOnChanges -> Called after a bound input property changes
2) ngOnInit -> Called once the component is initialized
3) ngDoCheck -> Called during every change detection run
4) ngAfterContentInit -> Called after content (ng-content) has been projected into view
5) ngAfterContentChecked -> Called every time the projected content has been checked 
6) ngAfterViewInit -> Called after the component's view(and child views ) has been initialized
7) ngAfterViewChecked -> Called every time the view (and child views) has been checked
8) ngOnDestroy -> Called once the component is about to be destroyed


#### Seeing Lifecycle Hooks in Action

inside server-elements.componenet.ts

1) Inside constructor
```
constructor() {
    console.log("Construtor called")
   }
```

2) ngOnChanges()

we need to implement the OnChanges method in the ServerElementsComponent class
```

export class ServerElementsComponent implements OnInit,OnChanges{
 ngOnChanges(changes: SimpleChanges){
    console.log("ngOnChanges called") 
    console.log(changes) 
   }
}

```

3) ngOnInit()
we need to implement the ngOnInit method in the ServerElementsComponent class

```
export class ServerElementsComponent implements OnInit,OnChanges{
 ngOnInit() {
    console.log("ngOnInit called")
  }
}
```

4) ngDoCheck

we need to implement the ngDoCheck method in the ServerElementsComponent class
```
export class ServerElementsComponent implements OnInit,OnChanges,DoCheck {
 ngDoCheck(){
    console.log("ngDoCheck  called")
  }
}
```

5) ngAfterContentInit

we need to implement the ngAfterContentInit method in the ServerElementsComponent class
```
export class ServerElementsComponent implements OnInit,OnChanges,DoCheck,AfterContentInit {
 ngAfterContentInit(){
    console.log("ngAfterContentInit  called")
  }
}
```

6) ngAfterContentChecked

we need to implement the ngAfterContentChecked method in the ServerElementsComponent class
```
export class ServerElementsComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked {
 ngAfterContentChecked(){
    console.log("ngAfterContentChecked  called")
  }
}
```

7) ngAfterViewInit

we need to implement the ngAfterContentInit method in the ServerElementsComponent class
```
export class ServerElementsComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit {
 ngAfterViewInit(){
    console.log("ngAfterViewInit  called")
  }
}
```

8) ngAfterViewChecked

we need to implement the ngAfterViewChecked method in the ServerElementsComponent class
```
export class ServerElementsComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked {
 ngAfterViewChecked(){
    console.log("ngAfterViewChecked  called")
  }
}
```

9) ngOnDestroy

we need to implement the ngOnDestroy method in the ServerElementsComponent class
```
export class ServerElementsComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {
  ngOnDestroy(){
    console.log("ngOnDestroy  called")
  }
}
```



