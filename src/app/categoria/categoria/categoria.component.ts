import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/core/model';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {

  categoria: Categoria [] = [
    {id: 1, nomecategoria: "Matheus"},
    {id: 2, nomecategoria: "Graziela"},
    {id: 3, nomecategoria: "Daniel"},
    {id: 4, nomecategoria: "Derek"},
    {id: 5, nomecategoria: "Victor"},
    {id: 6, nomecategoria: "Francis"},
    {id: 7, nomecategoria: "Karina"}

  ]
  displayedColumns = ['id', 'nomecategoria']

  constructor() { }

  ngOnInit(): void {
  }

}
