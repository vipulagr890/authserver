import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(process.env.PORT || 4200, () => {
  console.log("server has started");
});
