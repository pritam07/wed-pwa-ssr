import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { NgxsModule } from '@ngxs/store';
import { TutorialState } from '../../state/tutorial.state';

@NgModule({
  imports: [
    CommonModule,
    [MatButtonModule, MatCheckboxModule]
  ],
  declarations: [],
  exports: [
    CommonModule,   
    MatButtonModule,
    MatCheckboxModule,
    
  ]
})
export class SharedModule {}
