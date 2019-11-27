import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppModule as AppModuleOne} from '../../../app1/src/app/app.module';
import {IServiceService} from '../../../app1/src/app/IService.service';
import {Service2Service} from './service2.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppModuleOne
  ],
  providers: [
    {provide: IServiceService, useClass: Service2Service}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
