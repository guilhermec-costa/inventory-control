import { Entity } from "typeorm";
import { BaseVO } from "./base.vo";
import { ZipCode } from "./zipcode.vo";
import { BaseEntity } from "../base.entity";

@Entity({
  name: "address"
})
export class Address extends BaseEntity {
  street: string;
  number: number;
  CEP: ZipCode;
  city: string;
  state: string;
  country: string;
  complement: string;

  constructor(
    street: string,
    number: number,
    CEP: ZipCode,
    city: string,
    state: string,
    country: string,
    complement: string,
  ) {
    super();
    this.CEP = CEP;
    this.street = street;
    this.number = number;
    this.city = city;
    this.state = state;
    this.country = country;
    this.complement = complement;
  }
}