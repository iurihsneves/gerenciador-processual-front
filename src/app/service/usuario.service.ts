import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../modelo/usuario';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Constantes } from '../constantes/constantes';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor( private _http : HttpClient,
              private _router: Router) { }

  urlLogin = Constantes.endpoint + Constantes.port + Constantes.login;

  

  async login(usuario: any) {

    return this._http.post(this.urlLogin, JSON.stringify(usuario)).subscribe(data => {
      console.log(JSON.parse(JSON.stringify(data)));
      if(data != null) {
        console.log(JSON.parse(JSON.stringify(data)).Authorization);
        var token = JSON.parse(JSON.stringify(data)).Authorization;
        sessionStorage.setItem("token", token);
        this._router.navigate(['/home']);
        console.log('token recuperado: ' + sessionStorage.getItem("token"));
      } else {
        console.log('veio nulo ?');
      }

    },
    error => {
      console.error("Erro ao efetuar login");
    }
    )};

  public cadastrarUsuario(usuario: Usuario): Observable<any>{

    let url = Constantes.endpoint + Constantes.port +
    Constantes.apiUsuario + Constantes.cadastrar_usuario;

    console.log(url);

    return this._http.post<any>(url, usuario);
  }

}
