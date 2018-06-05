import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatMenuModule, MatIconModule, MatBadgeModule,MatSidenavModule,
MatListModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import { NgxsModule } from '@ngxs/store';
import { TutorialState } from '../../state/tutorial.state';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatMenuModule, MatIconModule, MatBadgeModule, MatSidenavModule, MatListModule,
    MatFormFieldModule, MatInputModule]
  ],
  declarations: [],
  exports: [
    CommonModule,   
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatBadgeModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class SharedModule {}
