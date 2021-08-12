import { Component, OnInit } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { Processo } from 'src/app/modelo/processo';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Usuario } from 'src/app/modelo/usuario';

@Component({
  selector: 'app-cadastra-processo',
  templateUrl: './cadastra-processo.component.html',
  styleUrls: ['./cadastra-processo.component.css']
})
export class CadastraProcessoComponent implements OnInit {

  processos: Processo[] = new Array<Processo>();
  processoSelecionado: Processo;
  processoClone: Processo;

  usuarios: Usuario[] = new Array<Usuario>();

  constructor() {

    this.criaArrayProcessos();

    this.carregarUsuarios();
    
  }

  carregarUsuarios(){
    let usuario1: Usuario = new Usuario();
    usuario1.id = 1;
    usuario1.email = 'i@i';
    usuario1.nomeCompleto = 'i n';

    let usuario2: Usuario = new Usuario();
    usuario2.id = 2;
    usuario2.email = '2@2';
    usuario2.nomeCompleto = '2 n';

    let usuario3: Usuario = new Usuario();
    usuario3.id = 3;
    usuario3.email = '3@i';
    usuario3.nomeCompleto = '3 n';

    let usuario4: Usuario = new Usuario();
    usuario4.id = 4;
    usuario4.email = '4@i';
    usuario4.nomeCompleto = '4 n';

    this.usuarios.push(usuario1);
    this.usuarios.push(usuario2);
    this.usuarios.push(usuario3);
    this.usuarios.push(usuario4);

    this.usuarios.forEach(item => {
      console.log(item);
    })

    let processo: Processo = new Processo();
    processo.id = 1;
    processo.idUsuario = 2;
    processo.nmReu = 'iuri';
    processo.nrProcesso = '3';

    this.processos.push(processo);

  }

  private criaArrayProcessos() {

    if(this.processos.length == 0) {
      console.log('adicionando um processo vazio');
      this.processos = new Array<Processo>()

      let processo = new Processo();
      
      this.processos.push(processo);

    }

  }

  ngOnInit(): void {
  }

  carregarDadosProcesso(processo: Processo) {
    this.processoSelecionado = processo;
    this.processoClone = Object.assign(new Processo(), processo);
    console.log(processo);

  }

  salvar(processo: Processo) {

  }

  cancelar(processo: Processo) {
    processo = this.processoClone;
  }

}
