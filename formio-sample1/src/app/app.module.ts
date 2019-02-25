import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormioAppConfig, FormioModule} from 'angular-formio';
import {AppConfig} from './formio-config';
import {HttpClientModule} from '@angular/common/http';
import { RendererComponent } from './renderer/renderer.component';
import { BuilderComponent } from './builder/builder.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    RendererComponent,
    BuilderComponent
  ],
  imports: [
    RouterModule.forRoot([
      {
        path: 'renderer',
        component: RendererComponent
      },
      {
        path: 'builder',
        component: BuilderComponent
      }
    ]),
    BrowserModule,
    FormioModule,
    HttpClientModule
  ],
  providers: [],
  // providers: [{provide: FormioAppConfig, useValue: AppConfig}],
  bootstrap: [AppComponent]
})
export class AppModule { }
