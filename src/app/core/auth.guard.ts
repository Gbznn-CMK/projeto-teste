import {CanActivateFn } from "@angular/router";
import { usuarioLogado } from "./auth";

export const authGuard: CanActivateFn = () =>{
    return usuarioLogado();
};
// ve se o usuario esta logado ou n 