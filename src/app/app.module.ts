import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { appRouter } from './app.router';

import { AppComponent } from './app.component';
import { HomeModule} from './modules/home/home.module';
import {SharedModule} from './modules/shared/shared.module';
import {CommonComponent} from './modules/common/common.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { NgxsModule } from '@ngxs/store';
import { TutorialState } from './state/tutorial.state';

@NgModule({
  declarations: [
    AppComponent,
    CommonComponent    
  ],
  imports: [
    BrowserModule.withServerTransition({ 
      appId: 'weddings' 
    }),
    BrowserAnimationsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    FlexLayoutModule,
    HomeModule,
    appRouter,
    SharedModule,
    NgxsModule.forRoot([
      TutorialState
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
