import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { Constantes } from '../constantes/constantes';
import { Router } from '@angular/router';
import { Processo } from '../modelo/processo';

@Injectable({
  providedIn: 'root'
})
export class ProcessoService {

  constructor(private _http : HttpClient,
              private _router: Router) { }


  public listaProcessos(): Observable<any> {

    let urlListaProcessos = Constantes.endpoint + Constantes.port +
    Constantes.apiProcessos + Constantes.lista_processos;

    return this._http.get(urlListaProcessos);
  }

  public salvarProcesso(processo: Processo): Observable<any>{

    let url = Constantes.endpoint + Constantes.port +
    Constantes.apiProcessos + Constantes.processo;

    return this._http.post<any>(url, processo);
  }
}
