import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/view/home/home.component';
import { PessoaCreateComponent } from './components/view/pessoa-create/pessoa-create.component';
import { PessoaDeleteComponent } from './components/view/pessoa-delete/pessoa-delete.component';
import { PessoasReadComponent } from './components/view/pessoas-read/pessoas-read.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'pessoas',
    component: PessoasReadComponent
  },
  {
    path: 'novo',
    component: PessoaCreateComponent
  },
  {
    path: 'pessoas/apagar/:codigo',
    component: PessoaDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
