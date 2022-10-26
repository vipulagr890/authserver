import mongoose from "mongoose";

const dbConnection = () => {
  const mongoDB = `mongodb+srv://${userName}:${password}@${cluster}.${dbName}.mongodb.net/?retryWrites=true&w=majority`;
  mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
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
