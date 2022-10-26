import express from "express";
import dbConnection from "./configs/db.js";
import * as dotenv from "dotenv";
dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/signin", (req, res) => {
  res.send(signin);
});

app.get("/register", (req, res) => {
  res.send(register);
});

app.listen(process.env.PORT || 4200, () => {
  dbConnection();
  console.log("server has started");
});
