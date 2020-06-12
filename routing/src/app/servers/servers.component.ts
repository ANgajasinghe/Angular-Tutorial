import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  private servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService , private router : Router , private currentRoute:ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onServerReload(){
    /*
      navigate function did not know where we are,so that it always act as globaly,

      private currentRoute:ActivatedRoute) { }
      SOLUTION : - {relativeTo:this.currentRoute}
    */
    this.router.navigate(['../servers'],{relativeTo:this.currentRoute});
  }

}
