import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm";
@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column({ type: "bigint" })
  phone!: number;

  @Column()
  message!: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  date!: string;
}
