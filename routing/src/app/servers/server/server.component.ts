import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';


@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService , 
    private currentRoute : ActivatedRoute,
    private router : Router ) { }

  ngOnInit() {
    // this.currentRoute.params.subscribe((param : Params)=>{
    //    this.server = this.serversService.getServer(+param['id']);
    // });

    //Uses or resolver 
    this.currentRoute.data.subscribe(
      (data : Data)=>{
        this.server = data['server'];
      }
    );
  }


  onEdit(){
    //relative to append
    //queryParamsHandling 
    /*
    How to handle query parameters in a router link. One of:
        merge : Merge new with current parameters.
        preserve : Preserve current parameters.
    */
    this.router.navigate(['edit'],{relativeTo:this.currentRoute, queryParamsHandling:'preserve'})
  }

}
