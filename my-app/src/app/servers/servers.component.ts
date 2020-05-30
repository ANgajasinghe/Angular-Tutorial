import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

    allowNewServer:boolean  = false;

    serverCreationStatus = "No servers created";
    serverName = "";


  constructor() {
      setTimeout(()=>{
        this.allowNewServer = true;
      },2000)

   }

  ngOnInit(): void {
  }

  //on mean event :- naming conventions 
  onCreateServer(obj){
      console.log(obj); // angualr obj
      this.serverCreationStatus = "server was created !!! "
  }

  onUpdateServerName(event : any){
      console.log(event);
      //<HTMLInputElement> casting and identifing weather this is input event 
      this.serverName = (<HTMLInputElement>event.target).value;
  }

}
