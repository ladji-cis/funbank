import { Component, OnDestroy, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { BaseComponent } from 'src/app/core/components/base-component';
import { AppState } from 'src/app/store/app.state';
import { Account } from './models/account';
import { AccountService } from './services/account.service';
import { GetAccountById, GetAccounts } from './store/account.actions';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent extends BaseComponent implements OnInit {

  @Select(state => state.app.account.accounts) accounts$: Observable<Account[]>;
  // @Select(state => state.app.account.current) currentAccount$: Observable<Account>;

  constructor(private store: Store) {
    super();
  }

  ngOnInit(): void {
    this.store.dispatch(new GetAccounts());
    // this.store.dispatch(new GetAccountById(1));
  }

}
