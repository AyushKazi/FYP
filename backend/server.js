import express from "express";
import { db } from "./config/db.js";

const PORT = 3000;
const app = express();

db();

app.get("/", (req, res) => {
  res.send("From the server");
});

app.listen(PORT, () => {
  console.log("Server is running on port ", PORT);
});
