import { BaseVO } from "./base.vo";

export class ZipCode extends BaseVO<string> {
  matchPattern: RegExp = /^[0-9]{5}-?[0-9]{3}$/;

  constructor(rawZipcode: string) {
    super();

    if(!super.health(rawZipcode)) {
      throw new Error(`Invalid ZipCode: ${rawZipcode}`);
    }

    this.set(ZipCode.format(rawZipcode));
  }

  private static format(zipCode: string) {
    return zipCode.replace(/(\d{5})(\d{3})/, "$1-$2");
  }
}