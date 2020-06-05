import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterH]'
})
export class BetterHDirective implements OnInit{
  
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elRef : ElementRef , private renderer : Renderer2) { }

  //this is better way to access element
  ngOnInit(): void {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

  //reactive directive 
  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    //this.backgroundColor = this.defaultColor;
  }

}
