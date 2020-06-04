import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit 
, OnChanges , 
DoCheck , 
AfterContentInit , 
AfterContentChecked , 
AfterViewInit , 
AfterViewChecked, 
OnDestroy{

  //exposure  to the world 
  //add alias 
  @Input('srvElement') element : {type : string, name:string , content: string};
  @Input() name : string;
  
  @ViewChild('heading',{static : true}) header : ElementRef;

  constructor() { 

    console.log( " contructor is called ");

  }

   //life cycle hook
  /*
    Life cycle :- 
    
    ngOnChanges : called after a bound input property changes

    ngOnInit : Called onece the component is initialized (run after the constuctor)

    ngDoCheck : Execute during every chnange detected run 
                  -click some button 
                  -value change 
                  -etc;
    
    ngAfterContentInit : called after content (ng-content) has been projectd into view

    ngAfterContentChecked : called every time projected content has been checked 

    ngAfterViewInit : called after the component's view (and child views) has been initialized 

    ngAfterViewChecked : called every time  view (and child views) has been checked  

    ngOnDestroy : Called once the component is about to be destroyed 
  
  */

  ngOnInit() {

    console.log( " ngOnInit() called  ")
    console.log(this.header);
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy____Called');
  }

  ngAfterViewInit(): void {
    
    console.log('ngAfterViewInit__Called');
    console.log(this.header.nativeElement.textContent);
  }

  ngAfterViewChecked(): void {
    
    console.log('ngAfterViewChecked__Called');

  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked__Called');
  }

  ngAfterContentInit(): void {
 
    console.log('ngAfterContentInitCalled');
    //only called onece ;
  }

  ngDoCheck(): void {
  
    console.log('ngDoCheckCalled');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    //use you need to change manulaly some things
  }

 

  

  

}
