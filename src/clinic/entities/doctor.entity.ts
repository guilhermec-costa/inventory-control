import { Column, Entity, JoinColumn, OneToMany } from "typeorm";
import { Clinic } from "./clinic.entity";
import { BaseEntity } from "src/shared/base.entity";
import { Email } from "src/shared/vo/email.vo";
import { Phone } from "src/shared/vo/phone.vo";
import { MedicalSpeciality } from "src/types/medical-speciality.type";

@Entity({
  name: "doctor"
})
export class Doctor extends BaseEntity {

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({
    type: "varchar"
  })
  email: Email;

  @Column({
    type: "varchar"
  })
  phone: Phone;

  @Column()
  password: string;

  @Column({
    type: "enum",
    enum: MedicalSpeciality
  })
  speciality: MedicalSpeciality;

  @Column()
  isActive: boolean;

  @OneToMany(() => Clinic, (clinic) => clinic.doctors)
  @JoinColumn({
    name: "clinic_id"
  })
  clinic: Clinic;
}