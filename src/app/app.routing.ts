﻿import { RegisterComponent } from './pages/login-register/register/register.component';
import { LoginRegisterComponent } from './pages/login-register/login-register.component';
import { Routes, RouterModule } from "@angular/router";
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { HomeComponent } from './home/home.component';


import { AuthGuard } from "src/app/core/_guards";
import { AppComponent } from './app.component';
import { FullpreviewComponent } from './fullpreview/fullpreview.component';

const appRoutes: Routes = [
  { path: "", component: HomeComponent,  canActivate: [AuthGuard] },
  { path: "login", component: LoginRegisterComponent },
  { path: "admin", component: HomeAdminComponent, canActivate: [AuthGuard] },
  { path: "fullpreview", component: FullpreviewComponent},

  // otherwise redirect to home
  { path: "**", redirectTo: "" },
];

export const routing = RouterModule.forRoot(appRoutes);
