import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Account', cols: 1, rows: 1 },
          { title: 'Operations', cols: 1, rows: 1 },
          { title: 'Rewards', cols: 1, rows: 1 },
        ];
      }

      return [
        { title: 'Account', cols: 2, rows: 1 },
        { title: 'Operations', cols: 1, rows: 1 },
        { title: 'Rewards', cols: 1, rows: 1 },
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
