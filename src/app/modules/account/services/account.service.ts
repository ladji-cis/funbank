import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseHttpService } from 'src/app/core/services/base-http.service';
import { Account } from '../models/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService extends BaseHttpService<Account> {
  private url = '/account';

  constructor(http: HttpClient) {
    super(http);
  }

  getAccount(id: number): Observable<Account> {
    return this.getOne(this.url + '/' + id);
  }

  getAccouns(): Observable<Account[]> {
    return this.getMultiple(this.url);
  }
}
