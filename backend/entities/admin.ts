import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
const jwt = require("jsonwebtoken");

@Entity()
export class Admin {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;
  
  @Column()
  email!: string;

  @Column()
  password!: string;
}
