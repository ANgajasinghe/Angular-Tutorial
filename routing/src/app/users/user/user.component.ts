import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
    //{path:'users/:id/:name' , component : UserComponent},//:id = (:) == dynamaic

    //no route parameters change use this , 
    this.user = {
        id:this.route.snapshot.params['id'],
        name:this.route.snapshot.params['name']
    };

    //this is a Observable(asyn)

    //IF not add this too
    this.route.params.subscribe((params : Params) =>{
        this.user.id = params['id'];
        this.user.name = params['name'];
    });
  }

}
