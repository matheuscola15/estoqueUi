import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/core/model';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {

  produto: Produto [] = [
    {id: 1, nomeproduto: "Desenvolvimento de Sistemas"},
    {id: 2, nomeproduto: "Logística"},
    {id: 3, nomeproduto: "Química"},
    {id: 4, nomeproduto: "Administração"},
    {id: 5, nomeproduto: "Edificações"},
    {id: 6, nomeproduto: "Marketing"},
    {id: 7, nomeproduto: "Contabilidade"}
    ];
  displayedColumns = ['id', 'nomeproduto']

  constructor() { }

  ngOnInit(): void {
  }

}
