import { BaseVO } from "./base.vo";

export class Phone extends BaseVO<string> {
  matchPattern: RegExp = /^\+?[1-9]\d{1,14}$/;

  constructor(rawPhone: string) {
    super();

    if (!this.health(rawPhone)) {
      throw new Error(`Invalid phone number: ${rawPhone}`);
    }

    this.set(rawPhone);  
  }
}