import { OpeningHours } from "src/types/opening-hours.type";
import { Column, Entity, OneToMany } from "typeorm";
import { Doctor } from "./doctor.entity";
import { Address } from "cluster";
import { Email } from "src/shared/vo/email.vo";
import { Phone } from "src/shared/vo/phone.vo";
import { BaseEntity } from "src/shared/base.entity";

@Entity({
  name: "clinic"
})
export class Clinic extends BaseEntity {

  @Column()
  name: String;

  @Column({
    type: "varchar"
  })
  address: Address;

  @Column({
    type: "varchar"
  })
  email: Email;

  @Column({
    type: "varchar"
  })
  phone: Phone; 

  @Column()
  taxId: string;

  @Column({
    type: "jsonb"
  })
  openingHours: OpeningHours;

  @OneToMany(() => Doctor, (doctor) => doctor.clinic)
  doctors: Doctor[]

  constructor(pClinic: Partial<Clinic>) {
    super();
    Object.assign(this, pClinic);
  }
}