import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { InserirPessoaComponent } from './auth/inserir-pessoa/inserir-pessoa.component';
import { InserirCidadeComponent } from './auth/inserir-cidade/inserir-cidade.component';
import { authGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [

    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },

    {
        path: 'pessoas/novo',
        component: InserirPessoaComponent,
        canActivate: [authGuard],
        data: {
            role: 'ADMIN,GERENTE,FUNC'
        }
    },
    {
        path: 'enderecos/novo',
        component: InserirCidadeComponent,
        canActivate: [authGuard],
        data: {
            role: 'ADMIN,GERENTE'
        }
    },
    {
        path: 'cidade/novo',
        component: InserirCidadeComponent,
        canActivate: [authGuard],
        data: {
            role: 'ADMIN'
        }
    },
    {
        path: 'cidade/novo',
        component: InserirCidadeComponent,
        canActivate: [authGuard],
        data: {
            role: 'ADMIN,FUNC'
        }
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [authGuard],
        data: {
            role: 'ADMIN,FUNC,GERENTE'
        }
    }
    





];

