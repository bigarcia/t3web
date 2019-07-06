import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ClienteCadastroComponent } from './components/cliente-cadastro/cliente-cadastro.component';
import { ClienteDetalhesComponent } from './components/cliente-detalhes/cliente-detalhes.component';
import { ClienteEdicaoComponent } from './components/cliente-edicao/cliente-edicao.component';


const routes: Routes = [
  {
      path: 'clientes', component: ClientesComponent, data: { title: 'Lista de Clientes' }
    },
    {
      path: 'cliente-detalhes/:id', component: ClienteDetalhesComponent, data: { title: 'Detalhes do Cliente' }
    },
    {
      path: 'cliente-cadastro', component: ClienteCadastroComponent, data: { title: 'Cadastro Cliente' }
    },
    {
      path: 'cliente-edicao/:id', component: ClienteEdicaoComponent, data: { title: 'Edição Cliente' }
    },
    { 
       path: '', redirectTo: '/clientes', pathMatch: 'full'
    }
  ];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
