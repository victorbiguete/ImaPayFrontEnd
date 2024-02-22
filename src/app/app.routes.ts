import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { TransacoesComponent } from './componentes/transacoes/transacoes.component';
import { LoginPageComponent } from './componentes/login-page/login-page.component';
import { LoginFormComponent } from './componentes/login-page/login-form/login-form.component';
import { CadastroFormComponent } from './componentes/login-page/cadastro-form/cadastro-form.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent,
    children: [
      {
        path: '', // child route path
        component: LoginFormComponent, // child route component that the router renders
      },
      {
        path: 'cadastro', // child route path
        component: CadastroFormComponent, // child route component that the router renders
      },
    ],
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'transacoes',
    component: TransacoesComponent,
  },
];
