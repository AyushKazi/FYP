import express from "express";
import api from "./routes/index.js";
import { db } from "./config/db.js";
import bodyParser from "body-parser";

const PORT = 3000;
const app = express();

db();

//decodes the url
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("From the server");
});

//base url
app.use("/api/v1", api);

app.listen(PORT, () => {
  console.log("Server is running on port ", PORT);
});
