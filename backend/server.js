import express from "express";
import api from "./routes/index.js";
import { db } from "./config/db.js";
import bodyParser from "body-parser";
import cors from "cors";
import path from "path";

const PORT = 3001;
const app = express();

// reading environmetal variable file
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config();

// database connection
db();

//decodes the url
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.get("/", (req, res) => {
  res.send("From the FYP server");
});

//base url
app.use("/api/v1", api);

// Upload
const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

app.listen(PORT, () => {
  console.log("Server is running on port ", PORT);
});
