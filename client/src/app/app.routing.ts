/**
 * Created by Alex on 22.02.2017.
 */
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from "./welcome/welcome.component";
import {TopuserstabComponent} from "./topuserstab/topuserstab.component";

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
    children: [
      {path: '', component: TopuserstabComponent}
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
