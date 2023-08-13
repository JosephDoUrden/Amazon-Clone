const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const authRouter = require("./routes/auth");

const PORT = 3000;
const app = express();
const DB = process.env.MongoDbPass;

//middleware
app.use(express.json());
app.use(authRouter);

//Connections
mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection Successful!");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
