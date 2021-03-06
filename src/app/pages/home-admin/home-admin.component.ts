﻿import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { first } from "rxjs/operators";

import { UserService, AuthenticationService } from "src/app/core/_services";
import { Usuario } from 'src/app/shared/models';

@Component({
  templateUrl: "home-admin.component.html",
  styleUrls: ["home-admin.component.css"],
})
export class HomeAdminComponent implements OnInit, OnDestroy {
  currentUser: Usuario;
  currentUserSubscription: Subscription;
  users: Usuario[] = [];

  constructor(
    private authenticationService: AuthenticationService,
    private userService: UserService
  ) {
    this.currentUserSubscription = this.authenticationService.currentUser.subscribe(
      (user) => {
        this.currentUser = user;
      }
    );
  }

  ngOnInit() {
    this.loadAllUsers();
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.currentUserSubscription.unsubscribe();
  }

  deleteUser(id: number) {
    this.userService
      .delete(id)
      .pipe(first())
      .subscribe(() => {
        this.loadAllUsers();
      });
  }

  private loadAllUsers() {
    this.userService
      .getAll()
      .pipe(first())
      .subscribe((users) => {
        this.users = users;
      });
  }
}
