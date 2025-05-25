import { Routes } from '@angular/router';
import { ListarCidadeComponent } from './pages/listar-cidade/listar-cidade.component';
import { InserirCidadeComponent } from './pages/inserir-cidade/inserir-cidade.component';
import { EditarCidadeComponent } from './pages/editar-cidade/editar-cidade.component';

export const routes: Routes = [
      {
        path:'',
        redirectTo: 'cidade/listar', 
        pathMatch: 'full'
    },

    {
        path:'cidade',
        redirectTo: 'cidade/listar',
    },

     {
        path:'cidade/listar',
        component: ListarCidadeComponent
    },

    {
        path:'cidade',
        redirectTo: 'cidade/novo',
    },

    {
        path:'cidade/novo',
        component: InserirCidadeComponent
    },
     {
        path:'cidade',
        redirectTo: 'cidade/editar',
    },

    {
        path:'cidade/editar/:id',
        component: EditarCidadeComponent
    },

];
