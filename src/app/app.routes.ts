import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { TransacoesComponent } from './componentes/transacoes/transacoes.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'transacoes', component: TransacoesComponent},
];
