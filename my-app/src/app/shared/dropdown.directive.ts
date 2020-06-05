import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {



  @HostBinding('class.show') isOpen = false;
  constructor() { }
  @HostListener('click') toggleShow(){
      console.log("calling");
      this.isOpen = !this.isOpen;
  }
 

}
