import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Tutorial } from '../../models/tutorial.model'
import { TutorialState } from '../../state/tutorial.state' // We will use this shortly
import { Observable } from 'rxjs'
import { RemoveTutorial } from '../../actions/tutorial.actions'
import { FormArray, FormBuilder, FormGroup, Validators  } from '@angular/forms'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  signupForm: FormGroup;
  tutorials$: Observable<Tutorial>

  constructor(private store: Store, private fb: FormBuilder,) {
        this.tutorials$ = this.store.select(state => state.tutorials.tutorials)
  }
  delTutorial(name) {
    this.store.dispatch(new RemoveTutorial(name))
  }
createSignupForm() {
    this.signupForm = this.fb.group({
    name: ['', Validators.required],    
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
    });
}
  ngOnInit() {
    this.createSignupForm()
  }
  onSubmit() {

  }
  get f() { return this.signupForm.controls; }
}
