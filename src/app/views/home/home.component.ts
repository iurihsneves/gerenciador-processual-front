import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { CaixaDialogoService } from 'src/app/caixa-dialogo/caixa-dialogo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private caixaDialogoService: CaixaDialogoService,
              private _router: Router) { }

  ngOnInit(): void {
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

  cadastrarProcesso() {
    this._router.navigate(['/cadastra-processo']);
  }

}
