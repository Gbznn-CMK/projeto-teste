import { signal } from "@angular/core";

 export const usuarioLogado= signal<boolean>(false)

export function login(){
    usuarioLogado.set(true);
 }

 export function logOut(){
    usuarioLogado.set(false);
 }