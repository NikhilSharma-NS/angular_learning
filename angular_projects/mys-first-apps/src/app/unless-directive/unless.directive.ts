import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      this.vcRef.createEmbeddedView(this.temRef);
    } else {
      this.vcRef.clear();
    }
  }
  constructor(private temRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
