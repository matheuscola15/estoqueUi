import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/core/model';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {

  categoria: Categoria [] = [
    {id: 1, nomecategoria: "Eletrônico"},
    {id: 2, nomecategoria: "Eletrodoméstico"},
    {id: 3, nomecategoria: "Roupa"},
    {id: 4, nomecategoria: "Alimento"},
    {id: 5, nomecategoria: "Automóvel"},
    {id: 6, nomecategoria: "Perfumaria"},
    {id: 7, nomecategoria: "Bebida"}

  ]
  displayedColumns = ['id', 'nomecategoria']

  constructor() { }

  ngOnInit(): void {
  }

}
