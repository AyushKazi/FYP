import express from "express";
import api from "./routes/index.js";
import { db } from "./config/db.js";
import bodyParser from "body-parser";

const PORT = 3000;
const app = express();

// reading environmetal variable file
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config();

// database connection
db();

//decodes the url
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("From the FYP server");
});

//base url
app.use("/api/v1", api);

app.listen(PORT, () => {
  console.log("Server is running on port ", PORT);
});
