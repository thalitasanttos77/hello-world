import { Routes } from '@angular/router';
import { ListarEstadoComponent } from './pages/listar-estado/listar-estado.component';
import { InserirEstadoComponent } from './pages/inserir-estado/inserir-estado.component';
import { EditarEstadoComponent } from './pages/editar-estado/editar-estado.component';

export const routes: Routes = [
        {
        path:'',
        redirectTo: 'estado/listar', 
        pathMatch: 'full'
    },

    {
        path:'estado',
        redirectTo: 'estado/listar',
    },

     {
        path:'estado/listar',
        component: ListarEstadoComponent
    },

    {
        path:'estado',
        redirectTo: 'estado/novo',
    },

    {
        path:'estado/novo',
        component: InserirEstadoComponent
    },
     {
        path:'estado',
        redirectTo: 'estado/editar',
    },

    {
        path:'estado/editar/:id',
        component: EditarEstadoComponent
    },

];
