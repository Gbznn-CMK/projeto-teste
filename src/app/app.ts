import { Component, signal } from '@angular/core';
import { RouterOutlet , RouterLink } from '@angular/router';
import { ListaProdutos } from './features/produtos/lista-produtos/lista-produtos';
import { usuarioLogado,login , logOut } from './core/auth';
import { Header } from './shared/layout/header/header';
@Component({
  selector: 'app-root',
  imports: [ListaProdutos,RouterLink ,RouterOutlet,Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('projeto-teste');
  
  usuarioLogado=usuarioLogado;
  login=login;
  logOut=logOut
}
