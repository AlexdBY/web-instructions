import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import {AUTH_PROVIDERS} from 'angular2-jwt';
import {Auth} from './auth.service';

import { TranslateModule, TranslatePipe } from 'ng2-translate';
import { WelcomeComponent } from './welcome/welcome.component';
import {routing} from "./app.routing";
import { TopuserstabComponent } from './topuserstab/topuserstab.component';
import { ProfileComponent } from './profile/profile.component';
import { InstructionCreatorComponent } from './instruction-creator/instruction-creator.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    TopuserstabComponent,
    ProfileComponent,
    InstructionCreatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TranslateModule.forRoot(),
    routing
  ],
  providers: [ AUTH_PROVIDERS, Auth],
  bootstrap: [AppComponent]
})
export class AppModule { }
