import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs';
import { map , filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObsDubcription: Subscription;

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
    //  this.firstObsDubcription = interval(2000).subscribe(count =>{
    //                               console.log(count);
    //                             });

    //=========================Build Custome Obs

    //observer : - we Talked this in the introduction 
    const customIntervalObservable = Observable.create(observer => {

      let count = 0;

      setInterval(() => {
        observer.next(count);
        if (count === 2) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error('Count is grater than 3'));
        }
        count++;
      }, 1000)
    });


    // customIntervalObservable.pipe(map((data : number)=> {
    //     return `Rounde ${data + 1}`;
    // }));

    // this.firstObsDubcription = customIntervalObservable.subscribe(data => {
    //                               console.log(data);
    //                             }, error => {
    //                               alert(error.message);
    //                             },()=>{
    //                               console.log('Completed!');
    //                             });



    this.firstObsDubcription = customIntervalObservable.pipe(
      filter(data=>{
        return data > 0
      }),
      map((data: number) => {
      return `Rounde ${data + 1}`;
    })).subscribe(data => {
      console.log(data);
    }, error => {
      alert(error.message);
    }, () => {
      console.log('Completed!');
    });

  }

  ngOnDestroy(): void {
    this.firstObsDubcription.unsubscribe();
  }

}
