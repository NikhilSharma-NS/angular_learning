import { Directive,ElementRef,HostBinding,HostListener,Input,OnInit,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
 @Input() defaultColor: string = 'transparent'
 @Input() hightlightColor: string = 'yellow'

  @HostBinding('style.backgroundColor') backgroundColor: string=this.defaultColor;
  constructor(private eleref:ElementRef,private ren:Renderer2) { }

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
  @HostListener('click')click(eve:Event){
   // this.ren.setStyle(this.eleref.nativeElement,'background-color','red')
    this.backgroundColor='red'
  }

}


