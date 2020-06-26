import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators, FormArray, FormBuilder} from '@angular/forms';
import { Observable } from 'rxjs';
import { Console } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;

  forbiddenUsernames = ['Chris','Anna'];



  constructor(private formBuilder : FormBuilder){}

  ngOnInit(): void {
    // how to create a form
    this.signupForm = new FormGroup({
      'userData' : new FormGroup({
        'username': new FormControl(null,[ Validators.required , this.forbiddenNames.bind(this)]),
        'email' : new FormControl(null, [Validators.required, Validators.email],this.forbiddenEmails)
      }),
      'gender' : new FormControl('male'),
      //'hobbies' : new FormArray([new FormControl()])
      'hobbies' : new FormArray([])
    });


    // Observable ================= 01 Retuen values 

    // this.signupForm.valueChanges.subscribe(
    //   (value) => {
    //     console.log(value);
    //   }
    // );

    // Observable ================= 01 Return valide invalide status
    
    this.signupForm.statusChanges.subscribe(
      (value) => {
        console.log(value);
      }
    );
  }

  onSubmit() {
    // in this approach we dont need local reference because we created this form
    console.log(this.signupForm);
  }
  onAddHobby(){
    const control = new FormControl(null,Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control)
  }


  forbiddenNames(control: FormControl) : {[s:string]:boolean}{
    // ===== this part will execute when match the usernames=====
    // if(this.forbiddenUsernames.indexOf(control.value)){
    //   return {'isValidUser':true};
    // } else {
    //   return null; // ** only return null or omit the return statement
    // }

    // ===== this part will execute when usernames dosen't matches=====

    if(this.forbiddenUsernames.indexOf(control.value) !== -1){
      return {'isValidUser':true};
    } else {
      return null; // ** only return null or omit the return statement
    }


  }

  forbiddenEmails(control : FormControl) : Promise<any> | Observable<any>{
    const promise = new Promise((resolve , reject)=>{
        setTimeout(() => {
          if(control.value === 'test@test.com'){
            resolve({'isValideEmail': true})
          } else {
            resolve(null);
          }
        }, 1500);
    });

    return promise;
  }
}
