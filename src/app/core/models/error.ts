import { Entity } from './entity';

export class Error implements Entity {
  id: number;
  message: string;

  constructor() {
    this.id = undefined;
  }
}
