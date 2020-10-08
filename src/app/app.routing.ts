﻿import { FullpreviewComponent } from './pages/fullpreview/fullpreview.component';
import { HomeAdminComponent } from './pages/home-admin/home-admin.component';
import { HomeComponent } from './pages/home/home.component';
import { UserConfigComponent } from './pages/user-config/user-config.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginRegisterComponent } from './pages/login-register/login-register.component';
import { Routes, RouterModule } from "@angular/router";


import { AuthGuard } from "src/app/core/_guards";
import { AppComponent } from './app.component';

const appRoutes: Routes = [
  { path: "", component: HomeComponent,  canActivate: [AuthGuard] },
  { path: "login", component: LoginRegisterComponent },
  { path: "admin", component: HomeAdminComponent, canActivate: [AuthGuard] },
  { path: "fullpreview", component: FullpreviewComponent},
  { path: "config", component: UserConfigComponent},

  // otherwise redirect to home
  { path: "**", component: NotFoundComponent },
];

export const routing = RouterModule.forRoot(appRoutes);
