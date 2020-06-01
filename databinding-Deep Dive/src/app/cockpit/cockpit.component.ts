import { Component, OnInit, Output , EventEmitter } from '@angular/core';


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
  
  constructor() { }

  ngOnInit() {
  }

  onAddServer(serverNameInput:HTMLInputElement) {
  
    /*
      serverNameInput is a html DOM obj that comes from view 
    */
    console.log(serverNameInput.value);
    // this.serverCreated.emit({serverName : this.newServerName , serverContent : this.newServerContent})
    this.serverCreated.emit({serverName : serverNameInput.value , serverContent : this.newServerContent})
  }

  onAddBlueprint() {
    
    this.bluePrintCreated.emit({serverName : this.newServerName , serverContent : this.newServerContent})
  }

}

