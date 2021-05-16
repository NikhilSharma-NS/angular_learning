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