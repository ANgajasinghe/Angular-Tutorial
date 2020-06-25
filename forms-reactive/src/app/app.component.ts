import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;

  ngOnInit(): void {
    // how to create a form
    this.signupForm = new FormGroup({
      'username': new FormControl(null),
      'email' : new FormControl(null),
      'gender' : new FormControl('male')
    });
  }
}
