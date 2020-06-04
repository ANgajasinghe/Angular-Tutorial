import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
    navigateType : string = 'r';

    onNavigate(type_:string){

      this.navigateType = type_;
      
    }
}
