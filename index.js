import express, { Router } from "express";
import dbConnection from "./configs/db.js";
import goalRoutes from "./routes/goalRoutes.js";
import userRoutes from "./routes/userRoutes.js";
const app = express();
dbConnection();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/goals", goalRoutes);

app.use("/api/v1/users", userRoutes);

app.listen(process.env.PORT || 4200, () => {
  console.log("server has started");
});
