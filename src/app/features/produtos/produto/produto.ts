import { Component , EventEmitter, input, Input, Output, output} from '@angular/core';
import { CurrencyPipe ,UpperCasePipe } from '@angular/common';
import { PrecoFormatadoPipe } from '../../../shared/pipes/preco-formatado-pipe';
import { CaptalizePipe } from '../../../shared/pipes/captalize-pipe';

@Component({
  selector: 'app-produto',
  imports: [CurrencyPipe,UpperCasePipe,PrecoFormatadoPipe,CaptalizePipe],
  templateUrl: './produto.html',
  styleUrl: './produto.css',
})
export class Produto {
  @Input() nome = "";
 @Input() preco = 0;
 @Output() produtoselecionado = new EventEmitter();
  mostrapreco= true
  
  selecionarProduto(){
    this.produtoselecionado.emit(this.nome)
  }

  
}
