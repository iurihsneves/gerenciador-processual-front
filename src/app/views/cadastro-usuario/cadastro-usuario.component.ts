import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constantes } from 'src/app/constantes/constantes';
import { Usuario } from 'src/app/modelo/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  usuario = new Usuario();

  erroAoSalvar: boolean = false;

  msgErro = '';

  constructor(private _service : UsuarioService,
    private _router: Router) { }

  ngOnInit(): void {
  }

  cadastrarUsuario(){
    this._service.cadastrarUsuario(this.usuario).subscribe(data => {
      this._router.navigate(['/']);
    },
    error => {
      console.log(error);
      this.erroAoSalvar = true;
      if(error.error.message === Constantes.email_ja_cadastrado) {
        this.msgErro = Constantes.email_ja_cadastrado;
      } else {
        this.msgErro = Constantes.erro_desconhecido + ' ' + Constantes.entre_contato_administrador;
      }
      
    }
  )}

}
