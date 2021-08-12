import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-caixa-dialogo',
  templateUrl: './caixa-dialogo.component.html',
  styleUrls: ['./caixa-dialogo.component.css']
})
export class CaixaDialogoComponent implements OnInit {

  @Input() titulo: string;
  @Input() mensagem: string;
  @Input() btnOkTexto: string;
  @Input() btnCancelaTexto: string;

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  public decline() {
    this.activeModal.close(false);
  }

  public accept() {
    this.activeModal.close(true);
  }

  public dismiss() {
    this.activeModal.dismiss();
  }

}
