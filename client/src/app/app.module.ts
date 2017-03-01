import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import {AUTH_PROVIDERS} from 'angular2-jwt';
import {Auth} from './auth.service';
import { UserService } from './user.service';

import {routing} from "./app.routing";

import { TranslateModule, TranslatePipe } from 'ng2-translate';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProfileComponent } from './profile/profile.component';
import { InstructionCreatorComponent } from './instruction-creator/instruction-creator.component';
import { TopInstructionsComponent } from './top-instructions/top-instructions.component';
import { LastInstructionsComponent } from './last-instructions/last-instructions.component';
import { InstructionConstructorComponent } from './instruction-constructor/instruction-constructor.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProfileComponent,
    InstructionCreatorComponent,
    TopInstructionsComponent,
    LastInstructionsComponent,
    InstructionConstructorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TranslateModule.forRoot(),
    routing
  ],
  providers: [ AUTH_PROVIDERS, Auth, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
