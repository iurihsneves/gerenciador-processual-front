import { Component, OnInit } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { Processo } from 'src/app/modelo/processo';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Usuario } from 'src/app/modelo/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';
import { ProcessoService } from 'src/app/service/processo.service';
import { CaixaDialogoService } from 'src/app/caixa-dialogo/caixa-dialogo.service';
import { Router } from '@angular/router';

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
  msgErro: string;

  constructor(private caixaDialogoService: CaixaDialogoService,
    private _usuarioService: UsuarioService,
    private _processoService: ProcessoService,
    private _router: Router) {

    this.processoSelecionado = new Processo();

    this.carregarUsuarios();

    this.carregarProcessos();

  }

  efetuarLogout() {
    this.caixaDialogoService.confirma('Confirmar logout', 'Deseja realmente sair do sistema ?', true)
    .then((confirmed) => this.excluirToken(confirmed))
    .catch(() => console.log('Logout cancelado'));
  }

  excluirToken(resposta: boolean) {
    if (resposta == true) {
      sessionStorage.removeItem('token');
      this._router.navigate(['/login']);
    } else {
      console.log('Recusou a saída do sistema.');
    }
  }

  carregarUsuarios() {

    this._usuarioService.listarUsuarios().subscribe(data => {
      console.log("Resposta recebida");
      console.log(data);
      this.usuarios = data;
      console.log(this.usuarios);
    },
      error => {
        console.log(error);
      }
    )
  }

  private carregarProcessos() {

    let processoNovo = new Processo;
    processoNovo.usuario = new Usuario;
    this.processos = new Array<Processo>()

    this._processoService.listaProcessos().subscribe(data => {
      console.log("Resposta recebida");
      console.log(data);
      this.processos = data;
      this.processos.unshift(processoNovo);
    },
      error => {
        console.log(error);
      }
    )


  }

  ngOnInit(): void {
  }

  carregarDadosProcesso(processo: Processo) {
    this.processoSelecionado = processo;
    this.processoClone = Object.assign(new Processo(), processo);
  }

  salvarProcesso() {
    if(this.processoSelecionado.nrProcesso != null && this.processoSelecionado.nrProcesso != '') {
      this.caixaDialogoService.confirma('Confirmar!', 'Deseja realmente salvar o processo ?', true)
        .then((confirmed) => {
          console.log('processo', this.processoSelecionado);
          this._processoService.salvarProcesso(this.processoSelecionado).subscribe(data => {
            console.log('salvo com sucesso', data);
            if (this.processoSelecionado.id != null) {

              this.caixaDialogoService.confirma('Salvo!', 'Processo salvo com sucesso!', false)
                .then((confirmed) => this.carregarProcessos())
                .catch(() => console.log('Faz nada, cancel desabilitado'));

            } else {
              console.log('foi um cadastro novo');
              this.carregarProcessos();
            }

          },
            error => {
              console.log(error);
            }
          )
        })
        .catch(() => console.log('Save cancelado'));
    } else {
      this.caixaDialogoService.confirma('Opa!', 'É obrigatório preencher o número do processo!', false)
      .then((confirmed) => console.log('Número do processo nulo ou vazio.'))
      .catch(() => console.log('Faz nada, cancel desabilitado'));
    }
  }

  cancelar() {

    this.processoSelecionado = new Processo();
    this.processoSelecionado = this.processoClone;

  }

  excluir(processo: Processo) {
    if (confirm("Confirma deletar o processo: " + processo.nrProcesso)) {
      this._processoService.excluirProcesso(processo).subscribe(data => {
        console.log('Excluído com sucesso', data);

        this.caixaDialogoService.confirma('Salvo!', 'Processo excluído com sucesso!', false)
          .then((confirmed) => this.carregarProcessos())
          .catch(() => console.log(''));
        this.carregarProcessos();
      },
        error => {
          console.log(error);
        }
      )
    }
  }

}
