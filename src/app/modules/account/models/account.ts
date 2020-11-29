import { Entity } from 'src/app/core/models/entity';

export class Account implements Entity {
  id: number;
  name: string;
  balance: number;
  type: AccountType;
}

export enum AccountType {
  Standard = 'STANDARD',
  Bronze = 'BRONZE',
  Silver = 'SILVER',
  Gold = 'GOLD',
  Platinum = 'PLATINUM'
}
