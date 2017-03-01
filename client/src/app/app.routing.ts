import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from "./welcome/welcome.component";
import { ProfileComponent } from './profile/profile.component';
import { InstructionCreatorComponent } from './instruction-creator/instruction-creator.component';
import { TopInstructionsComponent } from './top-instructions/top-instructions.component';
import { LastInstructionsComponent } from './last-instructions/last-instructions.component';


const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
    children: [
      {path: '', component: TopInstructionsComponent},
      {path: 'last', component: LastInstructionsComponent}
    ]
  },
  {
    path:':id',
    component:ProfileComponent
  },
  {
    path: ':id/constructor',
    component: InstructionCreatorComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
