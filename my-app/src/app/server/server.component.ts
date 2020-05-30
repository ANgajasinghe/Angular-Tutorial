import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})

export class ServerComponent{

    //data binding 
    serverID : number = 10;
    serverStatus : string ="offline";


    getServerStatus(){
        return this.serverStatus
    }

    
    
}


