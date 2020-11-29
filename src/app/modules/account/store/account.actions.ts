import { Account } from '../models/account';

export class GetAccounts {
  static readonly type = '[funbank] Get Accounts';
  constructor() { }
}

export class GetAccountById {
  static readonly type = '[funbank] Get Single Account';
  constructor(id: number) { }
}

export class CreateAccount {
  static readonly type = '[funbank] Create Account';
  constructor(account: Account) { }
}

export class UpdateAccount {
  static readonly type = '[funbank] Update Account';
  constructor(id: number, account: Account) { }
}

export class DeleteAccount {
  static readonly type = '[funbank] Delete Account';
  constructor(id: number) { }
}
