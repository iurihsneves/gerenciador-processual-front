import { Injectable } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { CaixaDialogoComponent } from './caixa-dialogo.component';

@Injectable()
export class CaixaDialogoService {

  

  constructor(private modalService: NgbModal) { }

  public confirma(
    titulo: string,
    mensagem: string,
    showCancelar: boolean,
    btnOkTexto: string = 'OK',
    btnCancelaTexto: string = 'Cancel',
    dialogoSize: 'sm'|'lg' = 'sm'): Promise<boolean> {
    const modalRef = this.modalService.open(CaixaDialogoComponent, { size: dialogoSize });
    modalRef.componentInstance.titulo = titulo;
    modalRef.componentInstance.mensagem = mensagem;
    modalRef.componentInstance.showCancelar = showCancelar;
    modalRef.componentInstance.btnOkTexto = btnOkTexto;
    modalRef.componentInstance.btnCancelaTexto = btnCancelaTexto;

    return modalRef.result;
  }

}
