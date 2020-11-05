import { Injectable } from '@angular/core';
import { 
  AplicativoBase,
  AplicativoFlickr,
  AplicativoFoto, 
  AplicativoFreesound,
  AplicativoGithub,
  AplicativoTags,
  AplicativoTexto,
} from '@models/aplicativo';
import { Foto, Audio, Repo, Texto } from '@models/aplicativo-item';
import { AplicativosModels } from '@shared/constants/aplicativos';

@Injectable({
  providedIn: 'root'
})
export class AplicativoService {

  aplicativos: AplicativoBase[] = [];
  constructor() {
    this.aplicativos = [];
    this.aplicativos.push(this.getMockFlickr());
    this.aplicativos.push(this.getMockFotos());
    this.aplicativos.push(this.getMockFreesound());
    // this.aplicativos.push(this.getMockGithub());
    // this.aplicativos.push(this.getMockTags());
    // this.aplicativos.push(this.getMockTexto());
   }

  

  /**
   * Retorna a lista de aplicativos adicionados à página
   */
  getAplicativos(): AplicativoBase[] {
    return this.aplicativos;
  }

  /**
   * Seta uma lista de aplicativos
   * @param aplicativos Lista de aplicativos
   */
  setAplicativos(aplicativos: AplicativoBase[]): void {
    this.aplicativos = aplicativos;
  }

  /**
   * Adiciona um aplicativo à lista de aplicativos
   * @param aplicativo Aplicativo para ser adicionado
   */
  addAplicativo(aplicativo: AplicativoBase): void {
    // Pegar o order do último aplicativo
    let apps = this.aplicativos.sort((a, b) => a.order - b.order);
    aplicativo.order = apps[apps.length - 1].order + 1;

    // Adicionar o aplicativo
    this.aplicativos.push(aplicativo);
  }

  /**
   * Remove um aplicativo da lista com base no order
   * @param aplicativo Aplicativo para ser removido
   */
  removeAplicativo(order: number): void {
    let i = this.aplicativos.findIndex((app) => app.order === order);
    if (i >= 0) {
      this.aplicativos.splice(i, 1);
    }

    // Shift na ordem dos aplicativos
    this.aplicativos.forEach((app) => {
      if (app.order > order) {
        app.order -= 1;
      }
    })
  }

  /**
   * Retorna um aplicativo a partir da sua ordem
   * @param order Ordem do aplicativo
   */
  getAplicativoByOrder(order: number): AplicativoBase {
    let app = this.aplicativos.find((app) => app.order === order);
    return app;
  }

  /**
   * Substitui um aplicativo da lista
   * @param app Aplicativo novo que irá substituir
   */
  replaceAplicativo(app: AplicativoBase): void {
    console.log(app);
    let i = this.aplicativos.findIndex((aplicativo) => aplicativo.order === app.order);
    if (i >= 0) {
      console.log(i)
      console.log(this.aplicativos);
      this.aplicativos.splice(i, 1, app);
      console.log(this.aplicativos);
    } else {
      this.addAplicativo(app);
    }
  }

  /**
   * Retorna a lista de todos os aplicativos 
   */
  getTiposAplicativos(): Array<{type: string, label: string}> {
    return AplicativosModels.TODOS;
  }

  private getMockFlickr(): AplicativoFlickr{
    let dado = new AplicativoFlickr();
    dado.component_name = 'Fotos do flickr nome gigante tralalalalalalalalalal anskfdasdfa asdfasf';
    dado.order = 2;
    dado.type = 'flickr';
    dado.fgColor = '#444444';
    dado.bgColor = '#b894f6';

    dado.username = 'flickrUser';
    dado.description = 'Fotos maravilhosas do Flickr';
    dado.profile_url = 'urlParaProfileFlickr';
    dado.avatar_img = 'urlAvatarFlickr';
    
    dado.full_name = 'Usuario do Flickr';
    dado.alias = 'Flickrito';
    dado.photo_array = [];

    let foto1 = new Foto();
    foto1.name = 'Foto 1 Flickr';
    foto1.description = 'Essa é a foto 1 do flickr';
    foto1.url = 'Url para a foto 1 do flickr';
    dado.photo_array.push(foto1);

    let foto2 = new Foto();
    foto2.name = 'Foto 2 Flickr';
    foto2.description = 'Essa é a foto 2 do flickr'
    foto2.url = 'Url para a foto 2 do flickr';
    dado.photo_array.push(foto2);
    
    return dado;
  }

  private getMockFotos(): AplicativoFoto {
    let dado = new AplicativoFoto()
    dado.component_name = 'Fotos simples';
    dado.order = 4;
    dado.type = 'fotos';
    dado.fgColor = '#444444';
    dado.bgColor = '#fefb99';
    dado.photo_array = [];
    
    let foto1 = new Foto();
    foto1.name = 'Foto 1 Simples';
    foto1.description = 'Essa é a foto 1 simples';
    foto1.url = 'Url para a foto 1 simples';
    dado.photo_array.push(foto1);

    let foto2 = new Foto();
    foto2.name = 'Foto 2 Simples';
    foto2.description = 'Essa é a foto 2 simples'
    foto2.url = 'Url para a foto 2 simples';
    dado.photo_array.push(foto2);

    return dado;
  }

  private getMockFreesound(): AplicativoFreesound {
    let dado = new AplicativoFreesound();

    dado.component_name = 'Freesoundzera';
    dado.order = 1;
    dado.type = 'freesound';
    dado.fgColor = '#444444';
    dado.bgColor = '#94a1f6';

    dado.username = 'freesoundUser';
    dado.description = 'Áudios maravilhosos do Freesound';
    dado.profile_url = 'URL para o perfil do Freesound';
    dado.avatar_img = 'Url para imagem do perfil do Freesound';

    dado.audio_array = [];

    let audio1 = new Audio();
    audio1.name = 'Áudio 1';
    audio1.description = 'Este é o áudio 1';
    audio1.url = 'Url para o áudio 1';
    audio1.tags = ['opa', 'ahh', 'papapapa'];

    dado.audio_array.push(audio1);

    let audio2 = new Audio();
    audio2.name = 'Áudio 2';
    audio2.description = 'Este é o áudio 2';
    audio2.url = 'Url para o áudio 2';
    audio2.tags = ['tnc', 'tccdocaralho', 'cu'];

    dado.audio_array.push(audio2);

    return dado;
  }

  private getMockGithub(): AplicativoGithub {
    let dado = new AplicativoGithub();

    dado.component_name = 'Githubnei';
    dado.order = 0;
    dado.type = 'github';
    dado.fgColor = '#444444';
    dado.bgColor = '#e994f6';

    dado.username = 'githubUser';
    dado.description = 'Repos maravilhosos do Github';
    dado.profile_url = 'URL para o perfil do Github';
    dado.avatar_img = 'Url para imagem do perfil do Github';

    dado.repo_array = [];

    let repo1 = new Repo();
    repo1.name = 'Repo 1';
    repo1.description = 'Este é o Repo 1';
    repo1.url = 'Url para Repo 1';
    repo1.data = '10/10/1929';

    dado.repo_array.push(repo1);
    
    let repo2 = new Repo();
    repo2.name = 'Repo 2';
    repo2.description = 'Este é o Repo 2';
    repo2.url = 'Url para Repo 2';
    repo2.data = '31/12/2340';

    dado.repo_array.push(repo2);
    return dado;
  }

  private getMockTags(): AplicativoTags {
    let dado = new AplicativoTags();

    dado.component_name = 'Tagues';
    dado.order = 3;
    dado.type = 'tags';
    dado.fgColor = '#444444';
    dado.bgColor = '#E57373';

    dado.tag_array = ['teste', 'vai-tomar-no-cu', 'socorro', 'cansera'];

    return dado;
  }

  private getMockTexto(): AplicativoTexto {
    let dado = new AplicativoTexto();

    dado.component_name = 'Textinhos';
    dado.order = 5;
    dado.type = 'texto';
    dado.fgColor = '#444444';
    dado.bgColor = '#80CBC4';

    dado.texto_array = [];

    let texto1 = new Texto();
    texto1.title = 'Título do texto 1';
    texto1.body = 'Este é o corpo to texto 1 tralalalala';
    dado.texto_array.push(texto1);

    let texto2 = new Texto();
    texto2.title = 'Título do texto 2';
    texto2.body = 'Este é o corpo to texto 2 tralalalala';
    dado.texto_array.push(texto2);
      
    return dado;
  }

  // TEMP:
  addQualquerCoisa(): void {
    let dado = new AplicativoTexto();

    dado.component_name = 'Textinhos 2';
    dado.order = 6;
    dado.type = 'texto';
    dado.fgColor = '#444444';
    dado.bgColor = '#80CBC4';

    dado.texto_array = [];

    let texto1 = new Texto();
    texto1.title = 'Título do texto 10';
    texto1.body = 'Este é o corpo to texto 1 tralalalala';
    dado.texto_array.push(texto1);

    let texto2 = new Texto();
    texto2.title = 'Título do texto 20';
    texto2.body = 'Este é o corpo to texto 2 tralalalala';
    dado.texto_array.push(texto2);
      
    this.aplicativos.push(dado);
  }


}
