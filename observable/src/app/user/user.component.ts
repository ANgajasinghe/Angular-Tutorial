import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UserServices } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id: number;

  constructor(private route: ActivatedRoute , private userServices : UserServices) {
  }

  ngOnInit() {
    //observable  this.route.params.subscribe( )
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
    });
  }

  onActivate(){
    this.userServices.activatedEmitter.next(true);
  }
}
