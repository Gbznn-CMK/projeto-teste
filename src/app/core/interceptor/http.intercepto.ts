import { HttpInterceptorFn } from '@angular/common/http';
import { tap, catchError,throwError} from 'rxjs';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
    // TOKEN
const token = 'fake-jwt-token';
const novaReq = req.clone({
setHeaders: {
Authorization: `Bearer ${token}`
}
});

console.log('Interceptando requisição:', req.url);

return next(novaReq).pipe(
    tap({
        next :(Event) => console.log(`RESPONSE:`,Event),
        error : (Error) => console.log(`ERROR:`,Error)
    }),
    catchError((error) => {
console.error('ERRO GLOBAL:', error);
if (error.status === 401) {
console.warn('Não autorizado!');
}
if (error.status === 500) {
console.warn('Erro interno do servidor!');
}
return throwError(() => error);
}),
);
}