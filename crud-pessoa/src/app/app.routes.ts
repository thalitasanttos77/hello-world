import { Routes } from '@angular/router';
import { ListarPessoaComponent } from './pages/listar-pessoa/listar-pessoa.component';
import { InserirPessoaComponent } from './pages/inserir-pessoa/inserir-pessoa.component';
import { EditarPessoaComponent } from './pages/editar-pessoa/editar-pessoa.component';

export const routes: Routes = [
    { path: '',
        redirectTo: 'pessoas/listar',
        pathMatch: 'full' 
    },

    { path: 'pessoas', 
        redirectTo: 'pessoas/listar'
    },

    { path: 'pessoas/listar',
        component: ListarPessoaComponent
    },

    { path: 'pessoas/novo',
      component: InserirPessoaComponent
    },

    { path: 'pessoas/editar/:id',
      component: EditarPessoaComponent
    }

];
