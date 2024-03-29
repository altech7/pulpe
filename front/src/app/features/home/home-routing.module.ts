import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './containers/home/home.component';
import {AuthenticateGuard} from '../auth/guards/authenticate.guard';
import {WelcomeComponent} from './containers/welcome/welcome.component';
import {SigninComponent} from '../auth/containers/signin/signin.component';
import {SignupComponent} from '../auth/containers/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthenticateGuard],
    children: [
      {
        path: 'home',
        loadChildren: 'app/features/dashboard/dashboard.module#DashboardModule',
      },
      {
        path: 'adherents',
        loadChildren: 'app/features/adherent/adherent.module#AdherentModule',
      },
      {
        path: 'exercices',
        loadChildren: 'app/features/exercice/exercice.module#ExerciceModule',
      },
      {
        path: 'machines',
        loadChildren: 'app/features/machine/machine.module#MachineModule',
      },
    ],
  },
  {
    path: 'accueil',
    component: WelcomeComponent,
  },
  {
    path: 'connexion',
    component: SigninComponent,
  },
  {
    path: 'inscription',
    component: SignupComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {
}
