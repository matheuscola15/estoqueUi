import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriaRoutingModule } from './categoria-routing.module';
import { CategoriaComponent } from './categoria/categoria.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    CategoriaComponent
  ],
  imports: [
    CommonModule,
    CategoriaRoutingModule,
    MatTableModule,
    MatButtonModule
  ]
})
export class CategoriaModule { }
