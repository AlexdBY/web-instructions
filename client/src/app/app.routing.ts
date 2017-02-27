/**
 * Created by Alex on 22.02.2017.
 */
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from "./welcome/welcome.component";
import {TopInstructionsComponent} from "./top-instructions/top-instructions.component";
import {LastInstructionsComponent} from "./last-instructions/last-instructions.component";

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
    children: [
      {path: '', component: TopInstructionsComponent},
      {path: 'last', component: LastInstructionsComponent}
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
