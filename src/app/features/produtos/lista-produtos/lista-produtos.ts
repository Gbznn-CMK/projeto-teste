import { Component, signal , computed , effect, Signal, inject } from '@angular/core';
import { Produto } from '../produto/produto';
import { CurrencyPipe } from '@angular/common';
import { ProdutosService } from '../produtos.services';
import { MatButtonModule } from '@angular/material/button';

type produtotype = {nome : string,preco:number}// serve para usar este tipo sem precisar ficar toda hora classificando variavel como : produtos = siganal <produtotype>

@Component({
  selector: 'app-lista-produtos',
  imports: [Produto , CurrencyPipe , MatButtonModule],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})
export class ListaProdutos {
  constructor() {
    
    this.carregarProdutos();

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

  erro = signal<string | null>(null);

  private produtoService= inject(ProdutosService);

  produtos = signal<
    {
      nome: string;
      preco: number;
    }[]
  >([]);

  carregando = signal (true);

  carrinho = signal < produtotype[]> ([]);

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

  adicionarAoCarrinho(produtos: produtotype) {
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
  carregarProdutos(){this.carregando.set(true);

this.produtoService.buscarProdutos()
.subscribe({
next: (dados) => {
const produtos = this.produtoService
.transformarProdutos(dados);
this.produtos.set(produtos);
this.carregando.set(false);
},
error: (erro) => {
console.error('Erro ao carregar produtos:', erro);
this.erro.set('Erro ao carregar produtos. Verifique sua conexão e tente novamente.');
this.carregando.set(false);
}
});
      }
  

  exibirProduto(nome: string) {
    this.produtosselecionado.set(nome);
    console.log('Produto selecionado é ' + nome);
  }
  
}


