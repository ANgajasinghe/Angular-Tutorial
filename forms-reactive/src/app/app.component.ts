import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

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
      'username': new FormControl(null, Validators.required),
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      'gender' : new FormControl('male')
    });
  }

  onSubmit() {
    // in this approach we dont need local reference because we created this form
    console.log(this.signupForm);
  }
}
