import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoRoutingModule } from './produto-routing.module';
import { ProdutoComponent } from './produto/produto.component';
import {MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';

import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    ProdutoComponent
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatMenuModule
  ]
})
export class ProdutoModule { }
