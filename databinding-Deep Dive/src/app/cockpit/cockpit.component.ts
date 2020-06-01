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

  onAddServer() {
    // this.serverElements.push({
    //   type: 'server',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
    this.serverCreated.emit({serverName : this.newServerName , serverContent : this.newServerContent})
  }

  onAddBlueprint() {
    // this.serverElements.push({
    //   type: 'blueprint',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });

    this.bluePrintCreated.emit({serverName : this.newServerName , serverContent : this.newServerContent})
  }

}

