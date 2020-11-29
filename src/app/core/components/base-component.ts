import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

export abstract class BaseComponent implements OnDestroy {

  protected subsriptions: Subscription[];

  constructor() {
    this.subsriptions = [];
  }

  ngOnDestroy(): void {
    this.subsriptions.forEach(sub => sub.unsubscribe());
    console.log('unsubscribe');
  }
}
