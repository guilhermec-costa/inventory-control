import { CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export class BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({
    name: "created_at",
    type: "timestamp"
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: "update_at",
    type: "timestamp"
  })
  updatedAt: Date
}