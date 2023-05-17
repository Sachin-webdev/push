import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Events {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  eventTitle!: string;

  @Column({ type: "text" })
  eventDesc!: string;

  @Column({ type: "simple-array" })
  filename!: string[];

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  date!: string;
}
