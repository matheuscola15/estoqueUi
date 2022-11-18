import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoRoutingModule } from './produto-routing.module';
import { ProdutoComponent } from './produto/produto.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    ProdutoComponent
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule,
    MatTableModule,
    MatButtonModule
  ]
})
export class ProdutoModule { }
