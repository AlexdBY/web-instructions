import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import {AUTH_PROVIDERS} from 'angular2-jwt';
import {Auth} from './auth.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ AUTH_PROVIDERS, Auth],
  bootstrap: [AppComponent]
})
export class AppModule { }
