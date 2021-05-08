import {AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-server-elements',
  templateUrl: './server-elements.component.html',
  styleUrls: ['./server-elements.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class ServerElementsComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,
AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {

  // alias found in template
  @Input('srvElement') element: { type: string, name: string, content: string };

  constructor() {
    console.log("Construtor called")
   }

   ngOnChanges(changes: SimpleChanges){
    console.log("ngOnChanges called") 
    console.log(changes) 
   }

  ngOnInit() {
    console.log("ngOnInit called")
  }

  ngDoCheck(){
    console.log("ngDoCheck  called")
  }

  ngAfterContentInit(){
    console.log("ngAfterContentInit  called")
  }

  ngAfterContentChecked(){
    console.log("ngAfterContentChecked  called")
  }

  ngAfterViewInit(){
    console.log("ngAfterViewInit  called")
  }
  
  ngAfterViewChecked(){
    console.log("ngAfterViewChecked  called")
  }
  ngOnDestroy(){
    console.log("ngOnDestroy  called")
  }

}