import { BaseEntity } from "src/shared/base.entity";
import { Column, Entity } from "typeorm";

@Entity()
export class User extends BaseEntity {
  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  login: string;

  @Column()
  password: string;

  constructor(pUser: Partial<User>) {
    super();
    Object.assign(this, pUser);
  }
}
