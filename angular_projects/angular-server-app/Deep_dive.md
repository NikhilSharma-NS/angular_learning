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