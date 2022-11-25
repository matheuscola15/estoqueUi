import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/core/model';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {

  produto: Produto [] = [
    {id: 1, nomeproduto: "Celular", modelo: 'Iphone', modelo1: '12 Pro Max', preco: 'R$ 9000.99'},
    {id: 2, nomeproduto: "Geladeira", modelo: 'Eletrolux', modelo1: 'Frost Free', preco: 'R$ 499.50'},
    {id: 3, nomeproduto: "Camiseta", modelo: 'Urban Clothing', modelo1: 'Verde escuro', preco: 'R$ 99.10'},
    {id: 4, nomeproduto: "Salgadinho", modelo: 'Cheetos', modelo1: 'Requeijão', preco: 'R$ 6.50'},
    {id: 5, nomeproduto: "Carro", modelo: 'Corolla', modelo1: '2.0 V8', preco: 'R$ 99999.99'},
    {id: 6, nomeproduto: "Perfume", modelo: 'Carolina Herrera', modelo1: '212 VIP', preco: 'R$ 220.20'},
    {id: 7, nomeproduto: "Refrigerante", modelo: 'Coca Cola', modelo1: '2 Litros',  preco: 'R$ 10.99'}
    ];
  displayedColumns = ['id', 'nomeproduto', 'modelo', 'modelo1', 'preco']

  constructor() { }

  ngOnInit(): void {
  }

}
