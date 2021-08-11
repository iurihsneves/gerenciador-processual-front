import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Constantes } from 'src/app/constantes/constantes';
import { Usuario } from 'src/app/modelo/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = new Usuario();

  loginInvalido: boolean = false;

  msgUsuarioSenhaInvalidos: String;

  constructor(private _service : UsuarioService,
              private _router: Router) { }

  ngOnInit(): void {
  }



  async loginUsuario() {
    try {
      const resultado = await this._service.login(this.usuario);

    } catch (error) {
      console.error(error);
    }
  }

}
