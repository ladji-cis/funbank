import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/core/components/base-component';
import { Account } from './models/account';
import { AccountService } from './services/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent extends BaseComponent implements OnInit {

  accounts: Account[] = [];

  constructor(private accountService: AccountService) {
    super();
  }

  ngOnInit(): void {
    this.subsriptions.push(this.accountService.getAccouns().subscribe(data => {
      this.accounts = data;
      console.log(data);
    }));
  }

}
