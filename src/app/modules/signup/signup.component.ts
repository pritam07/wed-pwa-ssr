import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormArray, FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { TutorialState } from '../../state/tutorial.state';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup; 
  createdList: Array<any> = [
    {value: 'self', viewValue: 'Self'},
    {value: 'sibling', viewValue: 'Sibling'}   
  ];
  genderList: Array<any> = [
    {value: 'male', viewValue: 'Option 1'},
    {value: 'female', viewValue: 'Option 2'}   
  ];
  endDate: any;
  constructor(private fb: FormBuilder,) {

  }
createSignupForm() {
    this.signupForm = this.fb.group({
    createdby: ['', Validators.required], 
    fullname: ['', Validators.required],
    gender: ['', Validators.required],
    dob: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    mobile: ['', [Validators.required]]
    });
}
  ngOnInit() {
    this.createSignupForm()
  }
  onSubmit() {

  }
  genderChange(data) {
    let currentDate =  new Date();    
    if(data && data.value === 'male') {
    this.endDate = new Date(currentDate.setFullYear(new Date().getFullYear() - 18));    }
    else if(data && data.value === 'female') {
    this.endDate = new Date(currentDate.setFullYear(new Date().getFullYear() - 21));
    }
  }
  get f(): any { return this.signupForm.controls; }
}
