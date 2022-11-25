import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch:'full',
    redirectTo: ''
  },
  {
    path: 'produto',
    loadChildren: () =>import('./produto/produto.module').then(p => p.ProdutoModule)
  },
  {
    path: 'categoria',
    loadChildren: () =>import('./categoria/categoria.module').then(c => c.CategoriaModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
