import { Injectable } from '@angular/core';
import { State } from '@ngxs/store';
import { AccountState, AccountStateModel } from '../modules/account/store/account.state';

export interface AppStateModel {
  currentUser: any;
}

@State<AppStateModel>({
  name: 'app',
  defaults: {
    currentUser: {}
  },
  children: [
    AccountState
  ]
})
@Injectable()
export class AppState {

}
