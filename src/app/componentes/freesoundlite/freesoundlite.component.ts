import { MessageService } from 'primeng/api';
import { Info } from './../../models/info.model';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-freesoundlite',
  templateUrl: './freesoundlite.component.html',
  styleUrls: ['./freesoundlite.component.scss']
})
export class FreesoundliteComponent implements OnInit {

  @Output() createComponent: EventEmitter<Info>= new EventEmitter<Info>() // Emissor de evento quando um componente é selecionado
  @Input() inputName: string;                                             // Nome que é recebido quando o componente já está criado
  @Input() inputTitle: string;                                            // Título do componente que é recebido quando o componente já está criado
  @Input() inputType: string;                                             // Tipo do componente que é recebido quando o componente já está criado
  @Input() isEdit: boolean;                                               // Informação se o editor do componente está ativado ou não

  userName: string;
  componentName: string;
  info: Info;
  edit: boolean;
  tipo: string;

  constructor(private _msgSrv: MessageService) { }

  ngOnInit(): void {
  }

  /**
   * Inicialização das variávies com base nos Inputs()
   */
  ngAfterContentInit() {
    this.userName = this.inputName;
    this.componentName = (this.inputTitle || 'Meu Freesound');
    this.tipo = this.inputType;
    this.edit = this.isEdit;
  }

  /**
   * Liga um componente e emite o evento do componente criado
   */
  emitirEvento() {
    if (!this.userName) {
      console.log('Não foi possível ligar o componente');
      this._msgSrv.add({severity:'warn', summary: 'Erro', detail:'Forneça um nome para prosseguir'});
      return;
    }
    this.info = new Info();
    this.info.id = -1;
    this.info.user = this.userName;
    this.info.titulo = this.componentName;
    this.info.tipo = this.tipo;
    this.info.bgColor = 'default';
    this.createComponent.emit(this.info);
  }

}
