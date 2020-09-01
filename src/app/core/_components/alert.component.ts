﻿import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";

import { AlertService } from "src/app/core/_services";
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: "alert",
  templateUrl: "alert.component.html",
})
export class AlertComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  message: any;

  constructor(private alertService: AlertService) {}

  ngOnInit() {
    this.subscription = this.alertService.getMessage().subscribe((message) => {
      console.log(message);
      this.message = message;

    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
