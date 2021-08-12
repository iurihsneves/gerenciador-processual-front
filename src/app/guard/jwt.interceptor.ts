import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CaixaDialogoService } from '../caixa-dialogo/caixa-dialogo.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(  private caixaDialogoService: CaixaDialogoService,
                private _router: Router) {

                }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
        }
      }, (err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401 || err.status === 403) {
            this.caixaDialogoService.confirma('Token expirado !', 'Seu token de login expirou e você será redirecionado para a página de login !', false)
            .then((confirmed) => this.excluirToken())
            .catch(() => console.log('Finalizado'));
          }
        }
      }))
  }

  excluirToken() {
    sessionStorage.removeItem('token');
    this._router.navigate(['/login']);
  }
}