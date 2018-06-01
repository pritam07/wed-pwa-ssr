import { Component, OnInit, OnDestroy} from '@angular/core';
import { Store } from '@ngxs/store';
import { AddTutorial } from '../.././actions/tutorial.actions';
import {MediaMatcher} from '@angular/cdk/layout';
@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})
export class CommonComponent implements OnInit, OnDestroy {
  mobileQuery: MediaQueryList;  
  private _mobileQueryListener: () => void;
  fillerNav = Array(10).fill(0).map((_, i) => `Nav Item ${i + 1}`);
    fillerContent = Array(50).fill(0).map(() =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);
  constructor(private store: Store, changeDetectorRef:  
  ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
   }
  
  addTutorial(name, url) {
      this.store.dispatch(new AddTutorial({name: name, url: url}))
  }
  
  ngOnInit() {
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}

