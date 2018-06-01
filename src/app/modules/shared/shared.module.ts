import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatMenuModule, MatIconModule, MatBadgeModule,MatSidenavModule,
MatListModule} from '@angular/material';
import { NgxsModule } from '@ngxs/store';
import { TutorialState } from '../../state/tutorial.state';

@NgModule({
  imports: [
    CommonModule,
    [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatMenuModule, MatIconModule, MatBadgeModule, MatSidenavModule, MatListModule]
  ],
  declarations: [],
  exports: [
    CommonModule,   
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatBadgeModule,
    MatSidenavModule,
    MatListModule
  ]
})
export class SharedModule {}
