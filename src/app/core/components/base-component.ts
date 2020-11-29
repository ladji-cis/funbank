import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

export abstract class BaseComponent {

  protected subsriptions: Subscription[];

  constructor() {
    this.subsriptions = [];
  }

  protected onDestroy(): void {
    this.subsriptions.forEach(sub => {
      sub.unsubscribe();
      console.log('unsubscribe: ' + JSON.stringify(sub));
    });
  }
}
