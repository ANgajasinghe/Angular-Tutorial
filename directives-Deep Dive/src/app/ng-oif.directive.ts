import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appNgOif]'
})
export class NgOifDirective {

  //setter of property 
  //appNgOif must same with input name 
  @Input() set appNgOif (condition : boolean){
      if(!condition){
        this.vcRef.createEmbeddedView(this.templateRef);
      } else{
        this.vcRef.clear();
      }
  }
  //p-1 template 
  //p-2 where to show
  constructor(private templateRef : TemplateRef<any>,private vcRef : ViewContainerRef) { }

}
