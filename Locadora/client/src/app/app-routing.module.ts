import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ClienteCadastroComponent } from './components/cliente-cadastro/cliente-cadastro.component';
import { ClienteDetalhesComponent } from './components/cliente-detalhes/cliente-detalhes.component';
import { ClienteEdicaoComponent } from './components/cliente-edicao/cliente-edicao.component';
import { LocadorasComponent } from './components/locadoras/locadoras.component';
import { LocadoraCadastroComponent } from './components/locadora-cadastro/locadora-cadastro.component';
import { LocadoraDetalhesComponent } from './components/locadora-detalhes/locadora-detalhes.component';
import { LocadoraEdicaoComponent } from './components/locadora-edicao/locadora-edicao.component';

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
      path: 'locadoras', component: LocadorasComponent, data: { title: 'Lista de Locadoras' }
    },
    {
      path: 'locadora-detalhes/:id', component: LocadoraDetalhesComponent, data: { title: 'Detalhes do Locadora' }
    },
    {
      path: 'locadora-cadastro', component: LocadoraCadastroComponent, data: { title: 'Cadastro Locadora' }
    },
    {
      path: 'locadora-edicao/:id', component: LocadoraEdicaoComponent, data: { title: 'Edição Locadora' }
    },
    { 
       path: '', redirectTo: '/locadoras', pathMatch: 'full'
    }
  
  ];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
