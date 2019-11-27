import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { App1Component } from './app1/app1.component';
import {IServiceService} from './IService.service';
import {Service1Service} from './service1.service';

@NgModule({
  declarations: [
    AppComponent,
    App1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {provide: IServiceService, useClass: Service1Service}
    ],
  exports: [
    App1Component
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
