import { Routes } from '@angular/router';
import { ListarEnderecoComponent } from './pages/listar-endereco/listar-endereco.component';
import { InserirEnderecoComponent } from './pages/inserir-endereco/inserir-endereco.component';
import { EditarEnderecoComponent } from './pages/editar-endereco/editar-endereco.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo: 'endereco/listar', 
        pathMatch: 'full'
    },

    {
        path:'endereco',
        redirectTo: 'endereco/listar',
    },

     {
        path:'endereco/listar',
        component: ListarEnderecoComponent
    },

    {
        path:'endereco',
        redirectTo: 'endereco/novo',
    },

    {
        path:'endereco/novo',
        component: InserirEnderecoComponent
    },
     {
        path:'endereco',
        redirectTo: 'endereco/editar',
    },

    {
        path:'endereco/editar/:id',
        component: EditarEnderecoComponent
    },
];
