import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserServices } from './user/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit , OnDestroy {
  userActivated : boolean = false;

  private activrSub : Subscription
  constructor(private userServices : UserServices) {}

  //Must Close this event 
  ngOnDestroy(): void {
    this.activrSub.unsubscribe();
  }

  ngOnInit() {
   this.activrSub = this.userServices.activatedEmitter.subscribe((data : boolean)=>{
      this.userActivated = data;
    })
  }
}
