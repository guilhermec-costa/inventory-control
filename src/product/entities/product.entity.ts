import { BaseEntity } from "src/shared/base.entity";
import { Column, Entity } from "typeorm";

@Entity()
export class Product extends BaseEntity {

  @Column()
  name: string;

  constructor(pProduct: Partial<Product>) {
    super();
    Object.assign(this, pProduct);
  }
}
