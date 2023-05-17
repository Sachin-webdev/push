// Imports
import express from "express";
import { connectDB } from "./ormconfig";
import bodyParser from "body-parser";
import path from "path";
// const fileUpload = require("express-fileupload");

const message = require("./routes/messageroute");
const gallery = require("./routes/galleryroute");
const event = require("./routes/eventroute");
const admin = require("./routes/adminRoutes");
const cors = require("cors");
const app = express();
const PORT = 9000;

// DB initialize
connectDB
  .initialize()
  .then(() => console.log("Databse connected Successfully"))
  .catch((err: any) => console.log("Unable to connect to database" + err));

// middlewares
app.use(bodyParser.urlencoded({ extended: true, limit: "25mb" }));
app.use(bodyParser.json({ limit: "25mb" }));
app.use(express.static("uploads"));
app.use("/files", express.static(path.join(process.cwd(), "/backend/uploads")));
console.log("path >> ", path.join(process.cwd(), "/backend/uploads"));

app.use(cors());
// app.use(fileUpload());

// routes for other upload
app.use("/api/v1", message);
app.use("/api/v1", gallery);
app.use("/api/v1", event);
app.use("/api/v1", admin);

app.listen(PORT, (): void => {
  console.log(`Server running on localhost: ${PORT}`);
});
