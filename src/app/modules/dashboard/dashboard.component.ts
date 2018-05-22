import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Tutorial } from '../../models/tutorial.model'
import { TutorialState } from '../../state/tutorial.state' // We will use this shortly
import { Observable } from 'rxjs'
import { RemoveTutorial } from '../../actions/tutorial.actions'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  tutorials$: Observable<Tutorial>

  constructor(private store: Store) {
        this.tutorials$ = this.store.select(state => state.tutorials.tutorials)
  }
  delTutorial(name) {
    this.store.dispatch(new RemoveTutorial(name))
  }

  ngOnInit() {
  }

}
