import { Component , signal,computed , effect } from '@angular/core';
import { Produto } from '../../produtos/produto/produto';
import { CurrencyPipe } from '@angular/common';


@Component({
  selector: 'app-carrinho',
  imports: [Produto,CurrencyPipe],
  templateUrl: './carrinho.html',
  styleUrl: './carrinho.css',
})
export class Carrinho {
//   carrinho = signal < {nome:string , preco:number}[]> ([]);

// quantidadeCarrinho = computed (() => this.carrinho().length);
 
// totalCarrinho = computed (() =>this.carrinho().reduce((total,item)=> total + item.preco, 0));

// adicionarAoCarrinho(produtos: { nome: string; preco: number }) {
// this.carrinho.update(listaCarrinhoAtual => [
// ...listaCarrinhoAtual
// ,produtos
// ]);
// }

}
