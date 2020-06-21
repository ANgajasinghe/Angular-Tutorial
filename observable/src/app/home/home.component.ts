import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { count } from 'console';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit , OnDestroy {

  private firstObsDubcription : Subscription;

  constructor() { }
  

  ngOnInit() {

    //This is a observable 
    //This observable run on V8 web Api section it mean this is nerver ending through out routing 

    // If you come to this page again new observable will start
    // It introduce a memory leak 

    // interval(2000).subscribe(count =>{
    //   console.log(count);
    // });


    // ---  TO AVOID MEMORY LEAK
   this.firstObsDubcription = interval(2000).subscribe(count =>{
                                console.log(count);
                              });
  }

  ngOnDestroy(): void {
    this.firstObsDubcription.unsubscribe();
  }

}
