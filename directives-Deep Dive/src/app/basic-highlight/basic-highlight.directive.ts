import { Directive, ElementRef, OnInit } from "@angular/core";

/*
this is a custom Directive

01 . we need to declear this derective in app.module.ts 
*/


@Directive({
    selector:'[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit{
    
    constructor(private elementRef : ElementRef){}
    
    ngOnInit(){
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }


}