import { DataSource } from "typeorm";
import { Message } from "./entities/Message";
import { Gallery } from "./entities/Gallery";
import { Events } from "./entities/Events";
import { Admin } from "./entities/admin";
export const connectDB = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "",
  database: "nepalshospitality",
  synchronize: true,
  logging: true,
  entities: [Message, Gallery, Events, Admin],
});
