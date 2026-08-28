import { Component, computed, inject, signal } from '@angular/core';
import { CarrinhoFacade } from '../../../core/facade/carrinho.facade';
import { CurrencyPipe } from '@angular/common';
import { MatAnchor } from "@angular/material/button";
@Component({
  selector: 'app-carrinho',
  imports: [CurrencyPipe, MatAnchor],
  templateUrl: './carrinho.html',
  styleUrl: './carrinho.css',
})
export class Carrinho {
  carrinhoFacade = inject(CarrinhoFacade);
   
  quantidadeCarrinho = this.carrinhoFacade.quantidade;
  totalCarrinho = this.carrinhoFacade.total;
 
}
