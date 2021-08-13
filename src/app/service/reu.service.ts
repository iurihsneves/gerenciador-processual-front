import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Constantes } from '../constantes/constantes';
import { Reu } from '../modelo/reu';

@Injectable({
  providedIn: 'root'
})
export class ReuService {

  constructor(private _http: HttpClient,
    private _router: Router) { }


  public listaReu(idProcesso: number): Observable<any> {

    let url = Constantes.endpoint + Constantes.port +
      Constantes.apiReu + Constantes.lista_reu + '/' + idProcesso;

    return this._http.get(url);
  }

  public salvarReu(reu: Reu): Observable<any> {

    let url = Constantes.endpoint + Constantes.port +
      Constantes.apiReu + Constantes.reu;

    return this._http.post<any>(url, reu);
  }

  public excluirReu(reu: Reu): Observable<any> {

    let url = Constantes.endpoint + Constantes.port +
      Constantes.apiReu + Constantes.excluir_reu + '/' + reu.id;

    return this._http.delete<any>(url);
  }
}
