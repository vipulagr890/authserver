import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const dbConnection = () => {
  const mongoDB = `mongodb+srv://${process.env.NAME}:${process.env.PASSWORD}@${process.env.CLUSTER}.${process.env.DBNAME}.mongodb.net/?retryWrites=true&w=majority`;
  mongoose.connect(mongoDB, {
    useNewUrlParser: true,
  });

  // Get the default connection
  const db = mongoose.connection;

  // Bind connection to error event (to get notification of connection errors)
  db.on("error", console.error.bind(console, "MongoDB connection error:"));
  db.once("open", function () {
    console.log("Connected successfully");
  });
};

export default dbConnection;
