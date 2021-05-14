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

