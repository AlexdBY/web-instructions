import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from "./welcome/welcome.component";
import {TopuserstabComponent} from "./topuserstab/topuserstab.component";
import { ProfileComponent } from './profile/profile.component';
import { InstructionCreatorComponent } from './instruction-creator/instruction-creator.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
    children: [
      {path: '', component: TopuserstabComponent}
    ]
  },
  {
    path:':id',
    component:ProfileComponent,
    children:[
      {path:'create', component:InstructionCreatorComponent}
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
