import { Component, OnInit} from '@angular/core';




@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
  
})
export class ServersComponent implements OnInit {

    allowNewServer:boolean  = false;

    serverCreationStatus = "No servers created";
    serverName = "TestServer";
    serverCreated : boolean = false;

    servers = ["Asia server" , "USA server"];


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

      this.servers.push(this.serverName);
      
      this.serverCreated = true;
      this.serverCreationStatus = `server was created !!! ${this.serverName}`;
  }

  onUpdateServerName(event : any){
      console.log(event);
      //<HTMLInputElement> casting and identifing weather this is input event 
      this.serverName = (<HTMLInputElement>event.target).value;
  }

}
