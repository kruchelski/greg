import { LoaderService } from './core/_services/loader.service';
import { HttpClientModule, HttpParams, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ApiService } from './core/_services/api.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ComponentesComponent } from './componentes/componentes.component';
import { PreviewComponent } from './preview/preview.component';
import { FormsModule } from '@angular/forms';
import { GithubliteComponent } from './componentes/githublite/githublite.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ResumoliteComponent } from './componentes/resumolite/resumolite.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import {DialogModule} from 'primeng/dialog';
import {SidebarModule} from 'primeng/sidebar';
import { GithubComponent } from './preview/github/github.component';
import { CardModule } from 'primeng/card';
import {GalleriaModule} from 'primeng/galleria';
import { TabViewModule } from 'primeng/tabview';
import { ResumoComponent } from './preview/resumo/resumo.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TooltipModule } from 'primeng/tooltip';
import { FlickrliteComponent } from './componentes/flickrlite/flickrlite.component';
import { FlickrComponent } from './preview/flickr/flickr.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FreesoundliteComponent } from './componentes/freesoundlite/freesoundlite.component';
import { FreesoundComponent } from './preview/freesound/freesound.component';
import  {OrderListModule } from 'primeng/orderlist';
import { ReactiveFormsModule } from "@angular/forms";

// used to create fake backend
import { fakeBackendProvider } from "src/app/core/_helpers";
import { JwtInterceptor, ErrorInterceptor } from "src/app/core/_helpers";

import { routing } from "./app.routing";
import { HomeAdminComponent } from "./home-admin";
import { LoginComponent } from "./login";
import { RegisterComponent } from "./register";
import { AlertComponent } from "src/app/core/_components";
import { HomeComponent } from './home/home.component';
import { FullpreviewComponent } from './fullpreview/fullpreview.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ComponentesComponent,
    PreviewComponent,
    GithubliteComponent,
    ResumoliteComponent,
    GithubComponent,
    ResumoComponent,
    FlickrliteComponent,
    FlickrComponent,
    FreesoundliteComponent,
    FreesoundComponent,
    AlertComponent,
    HomeAdminComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    FullpreviewComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DropdownModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    ToastModule,
    MessageModule,
    MessagesModule,
    HttpClientModule,
    CardModule,
    TabViewModule,
    InputTextareaModule,
    TooltipModule,
    ProgressSpinnerModule,
    GalleriaModule,
    DragDropModule,
    OrderListModule,
    DialogModule,
    SidebarModule,
    routing
  ],
  providers: [
    MessageService,
    ApiService,
    LoaderService,
    
    // { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    // fakeBackendProvider,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
