import { Injectable, OnDestroy } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { BaseComponent } from 'src/app/core/components/base-component';
import { Account } from '../models/account';
import { AccountService } from '../services/account.service';
import { GetAccounts } from './account.actions';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface AccountStateModel {
  current: Account;
  accounts: Account[];
}

@State<AccountStateModel>({
  name: 'account',
  defaults: {
    current: undefined,
    accounts: []
  }
})
@Injectable()
export class AccountState extends BaseComponent implements OnDestroy {
  constructor(private accountService: AccountService) {
    super();
  }

  @Action(GetAccounts)
  getAccounts(ctx: StateContext<AccountStateModel>): Observable<Account[]> {
    return this.accountService.getAccounts().pipe(
      tap(data => {
        const state = ctx.getState();
        ctx.setState({
          ...state,
          accounts: data
        });
      })
    );
  }

  ngOnDestroy(): void {
    this.onDestroy();
  }
}
