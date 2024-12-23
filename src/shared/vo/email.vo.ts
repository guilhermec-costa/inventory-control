import { BaseVO } from "./base.vo";

export class Email extends BaseVO<string> {

  matchPattern: RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  constructor(rawEmail: string) {
    super();

    if(!this.health(rawEmail)) {
      throw new Error(`Invalid email: ${rawEmail}`);
    }

    this.set(rawEmail);
  }
}