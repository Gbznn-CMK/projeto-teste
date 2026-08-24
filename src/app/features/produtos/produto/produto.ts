import { Component, EventEmitter, input, Input, Output, output } from '@angular/core';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { PrecoFormatadoPipe } from '../../../shared/pipes/preco-formatado-pipe';
import { CaptalizePipe } from '../../../shared/pipes/captalize-pipe';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-produto',
  imports: [CurrencyPipe, CaptalizePipe, MatButtonModule, MatCardModule],
  templateUrl: './produto.html',
  styleUrl: './produto.css',
})
export class Produto {
  @Input() nome = '';
  @Input() preco = 0;
  @Output() produtoselecionado = new EventEmitter();
  @Output() adicionarProdutoAoCarrinho = new EventEmitter();
  mostrapreco = true;

  selecionarProduto() {
    this.produtoselecionado.emit(this.nome);
  }
  adicionarAoCarrinho(){
    this.adicionarProdutoAoCarrinho.emit({
      nome : this.nome,
      preco : this.preco
    });
  }
}





