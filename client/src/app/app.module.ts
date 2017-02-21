import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import {AUTH_PROVIDERS} from 'angular2-jwt';
import {Auth} from './auth.service';

import { TranslateModule, TranslatePipe } from 'ng2-translate';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TranslateModule.forRoot()
  ],
  providers: [ AUTH_PROVIDERS, Auth],
  bootstrap: [AppComponent]
})
export class AppModule { }
