import { AlertService } from './../../shared/components/alert/alert.service';
import { AplicativoGenericoApiComponent } from '@aplicativos/aplicativo-generico-api/aplicativo-generico-api.component';
import { AplicativoFlickr } from '@models/aplicativo';
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { AplicativoService } from '@services/aplicativo.service';
import { ApiService } from '@services/api.service';

@Component({
  selector: 'app-flickr',
  templateUrl: './flickr.component.html',
  styleUrls: ['./flickr.component.scss']
})
export class FlickrComponent extends AplicativoGenericoApiComponent implements OnInit {

  @Input() dados: AplicativoFlickr;
  dadosBkp: AplicativoFlickr;

  constructor(
    _appServ: AplicativoService,
    _apiServ: ApiService,
    alertService: AlertService
  ) {
    super(_appServ, alertService, _apiServ);
  }

  ngOnInit() {
    this.loading = true;
    this.criaBackupDados();
    this.loadAll();
  }

  /**
   * Carrega todos os dados
   */
  loadAll(): void {
    this.loading = true;
    this._appServ.requestFlickrData(this.dados).subscribe((novosDados) => {
      this.dados = novosDados;
      this.setVariaveisIniciais();
      this.loading = false;
    },
      err => {
        this.tratarErros(err, 'Flickr', true);
        if (this.dados.username != this.dadosBkp.username) {
          this.dados = this.dadosBkp;
          this._appServ.replaceAplicativo(this.dados);
          this.criaBackupDados();
          this.loadAll();
        } else {
          this.setVariaveisIniciais();
          this._appServ.replaceAplicativo(this.dados);
          this.loading = false;
        }
      }
    )
  }

  /**
   * Seta variáveis adicionais
   */
  setVariaveisIniciais(): void {
    this.criaBackupDados();
    this.setEstadoAplicativo();
  }

  /**
   * Handler ao clicar no botão de abrir o modal
   */
  onOpenModal(): void {
    console.log(`[${this.dados.component_name}] clicado no botão de abrir modal`);
  }

  onUsernameSubmit(username: string) {
    this.dados.username = username;
    this.dados.imagensFlickr = [];
    this.loadAll()
  }
}
