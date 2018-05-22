import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddTutorial } from '../.././actions/tutorial.actions';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})
export class CommonComponent implements OnInit {

  constructor(private store: Store) { }
  
  addTutorial(name, url) {
      this.store.dispatch(new AddTutorial({name: name, url: url}))
  }
  
  ngOnInit() {
  }

}
