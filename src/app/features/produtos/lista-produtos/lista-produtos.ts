import { Component, signal , computed , effect, Signal } from '@angular/core';
import { Produto } from '../produto/produto';
import { CurrencyPipe } from '@angular/common';


@Component({
  selector: 'app-lista-produtos',
  imports: [Produto , CurrencyPipe],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})
export class ListaProdutos {
  constructor() {
    effect(() => {
    console.log('Lista de Produtos alteradas :', this.produtos())
    })
    effect(() => {
      console.log('O valor Atualizado :', this.valorTotal())
    })
     
    effect(() =>{
      document.title = ''
    })
  };
  produtos = signal<
    {
      nome: string;
      preco: number;
    }[]
  >([]);


  carrinho = signal < {nome:string , preco:number}[]> ([]);

quantidadeCarrinho = computed (() => this.carrinho().length);
 
totalCarrinho = computed (() =>this.carrinho().reduce((total,item)=> total + item.preco, 0));



  produtosselecionado = signal < string | null>(null);


totalprodutos = computed(() =>this.produtos().length);


valorTotal = computed(() => {
  return this.produtos().reduce(
    (total, item ) => total + item.preco , 0)
})
 


  produtosNovos = [
    { nome: 'notebook', preco: 3500 },
    { nome: 'Mouse', preco: 150 },
    { nome: 'Teclado', preco: 250.55 },
  ];

  filtrarNovoProduto() {
    /* Esta função irá filtar a lista atual de produtos 
    e irá retornar um objeto novo que 
    não esteja atualmente na lista de produtos */

    /* Caso a lista de produtos não tenha item nenhum 
    ele retorna e adiciona o primeiro item da lista de produtosNovos */
    if (this.produtos().length === 0) return this.produtosNovos[0];

    /* Verifica o tamanho da lista na tela, com o tamanho da lista de novos produtos
    caso a lista de novos produtos seja maior ou igual, ele continua adicionando na tela
    caso a lista de novos produtos seja menor, ele não faz nada
    */
    if (this.produtosNovos.length >= this.produtos().length) {
      /* Returna o item na posição atual baseada na quantidade de itens na tela
      Se tiver 2 item na tela, ele vai pegar o terceiro item na lista de novos produtos
      */
      return this.produtosNovos[this.produtos().length];
    }
    /* Caso nenhuma das condições anteriores sejam aplicadas, 
    ele retorna um valor nulo para verificação na inclusão da lista */
    return null;
  }

  adicionarProduto() {
    let novoproduto: { nome: string; preco: number } | null = this.filtrarNovoProduto();

    /* Caso a minha função retorne um item novo, eu adiciono na lista */
    if (novoproduto) {
      this.produtos.update((listaAtual) => [...listaAtual, novoproduto]);
    } else {
      /* Caso contrario, não faço nada */
    }
  }

  adicionarAoCarrinho(produtos: { nome: string; preco: number }) {
this.carrinho.update(listaCarrinhoAtual => [
...listaCarrinhoAtual
,produtos
]);
}
  
  substituirProduto(){
    this.produtos.set([
      {nome:'Produto Novo', preco:940 }
    ]) 
  }


  exibirProduto(nome: string) {
    this.produtosselecionado.set(nome);
    console.log('Produto selecionado é ' + nome);
  }
  
}


