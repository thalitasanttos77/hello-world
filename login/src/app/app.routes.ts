import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { InserirPessoaComponent } from './auth/inserir-pessoa/inserir-pessoa.component';
import { InserirCidadeComponent } from './auth/inserir-cidade/inserir-cidade.component';
import { authGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';
import { ListarUsuarioComponent } from './usuario/listar-usuario/listar-usuario.component';
import { InserirEditarUsuarioComponent } from './usuario/inserir-editar-usuario/inserir-editar-usuario.component';

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
    },
    {
        path: 'usuarios',
        redirectTo: 'usuarios/listar'
    },
    {
        path: 'usuarios/listar',
        component: ListarUsuarioComponent,
        canActivate: [authGuard],
        data: {
        role: 'ADMIN'
        }
    },
    {
    path: 'usuarios/novo',
    component: InserirEditarUsuarioComponent,
    canActivate: [authGuard],
    data: {
    role: 'ADMIN'
    }
    },
    {
    path: 'usuarios/editar/:id',
    component: InserirEditarUsuarioComponent,
    canActivate: [authGuard],
    data: {
    role: 'ADMIN'
    }
}


    





];

