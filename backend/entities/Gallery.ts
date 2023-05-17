import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Gallery {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  galleryTitle!: string;

  @Column({ type: 'simple-array' })
  filename!: string[];

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  date!: string;
}
