import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatMenuModule, MatIconModule, MatBadgeModule,MatSidenavModule,
MatListModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatRadioModule, MatDatepickerModule, MatNativeDateModule} from '@angular/material';
import { NgxsModule } from '@ngxs/store';
import { TutorialState } from '../../state/tutorial.state';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatMenuModule, MatIconModule, MatBadgeModule, MatSidenavModule, MatListModule,
    MatFormFieldModule, MatInputModule, MatSelectModule,
    MatRadioModule, MatDatepickerModule, MatNativeDateModule]
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
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule, 
    MatNativeDateModule
  ]
})
export class SharedModule {}
