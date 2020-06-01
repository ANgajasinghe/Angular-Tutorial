import { Component, OnInit, Output , EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  //pass event data to app component -------
  //MUST IMPORT ANGULAR CORE EVENT EMIITER ------
  @Output() serverCreated = new EventEmitter<{serverName : string , serverContent : string}>();
  @Output() bluePrintCreated = new EventEmitter<{serverName : string , serverContent : string}>();


  newServerName = '';
  newServerContent = '';

  //view child this gives acces to the template DOM 
  //this is an Angular type = ElementRef
  @ViewChild('serverContentInput',{static : true}) ServerContentInput : ElementRef;
  
  constructor() { }

  ngOnInit() {
  }

  onAddServer(serverNameInput:HTMLInputElement) {
    /*
      serverNameInput is a html DOM obj that comes from view 
    */
    // this.serverCreated.emit({serverName : this.newServerName , serverContent : this.newServerContent})
    this.serverCreated.emit({
      serverName : serverNameInput.value , 
      serverContent : this.ServerContentInput.nativeElement.value})
  }

  onAddBlueprint(serverNameInput:HTMLInputElement) { 
   

    this.bluePrintCreated.emit({
      serverName : serverNameInput.value , 
      serverContent : this.ServerContentInput.nativeElement.value})
  }

}

