import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {

  //exposure  to the world 
  //add alias 
  @Input('srvElement') element : {type : string, name:string , content: string}
  constructor() { 

    

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
  }

}
