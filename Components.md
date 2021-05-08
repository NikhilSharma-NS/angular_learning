## 

Components
```
AppComponents-> Combination of below component

HeaderComponent

MainComponent

FooterComponent
```
### Step1 : Create a Component

1) Create a folder inside the app folder by name server
2) Create a component by name ServerComponent
3) create the class and add the Component Decorator
```

export class ServerComponent{

}
```
4) import the Component from angular/core
```
import { Component } from "@angular/core";

@Component()
export class ServerComponent{

}
```
5) Inside Component we need to add the selector
```
import { Component } from "@angular/core";

@Component({
    selector:'app-server'
})
export class ServerComponent{

}
```
6) add the templateUrl
```
import { Component } from "@angular/core";


@Component({
    selector:'app-server',
    templateUrl:'./server.component.html'
})
export class ServerComponent{

}
```

### Step2: Role of App Module and Component Declaration

1) Add ServerComponent in declaration in declartion
2) and add the import of server component as well
```

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms'
import { ServerComponent } from './server/server.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
 
 ## Step3: Using Custom Component

 1) add the add-server tag inside the app.component.html

 ```
 <app-server></app-server>
 ```

 ## Step4: Creating Component with cli & Nesting Component

 ```
 option1 : ng generate component servers
 option2 : ng g c servers

 ```

 ## Step 5 Working with Component Templates

 we can right the code of html in ts file only
 1) TemplateUrl to Template

 ```
 template:'
 <app-server></app-server>'
 ```

## working with Component Styles

1) we can override the css in the app.componnet.css
Example
```
h3 {
color: red
}
```

2) Instead of styleUrls we can use styles

```
styles:[
    h3{
        color:red;
    }
]
```

## Fully Understanding the Component Selector

1) Selector by element
1.1) 
```
@Component({
    selector:'app-server'
})

in html of app.component
<app-server></app-server>
```
1.2) selector by attribute
```
@Component({
    selector:[app-server]
})

in html of app.component
<div app-server></div>
```
1.3)selector by class
```
@Component({
    selector:'.app-server'
})

in html of app.component
<div class="app-server"></div>
```
1.4)selector by id : Not work in angular



