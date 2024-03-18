import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TransacoesComponent } from './pages/transacoes/transacoes.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { LandingComponent } from './pages/landing/landing.component';
import { authGuard } from './guards/auth/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    // canActivate: [authGuard],
  },
  {
    path: 'transacoes',
    component: TransacoesComponent,
    // canActivate: [authGuard],
  },
  {
    path: 'logar',
    redirectTo: 'login',
  },
  {
    path: 'signin',
    redirectTo: 'login',
  },
  {
    path: 'cadastrar',
    redirectTo: 'signup',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
