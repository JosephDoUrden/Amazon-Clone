const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const authRouter = require("./routes/auth");

const PORT = 3000;
const app = express();
const MongoDbPass = process.env.MongoDbPass;
const DB = `mongodb+srv://yusufhansck:${MongoDbPass}@cluster0.ruy4e93.mongodb.net/?retryWrites=true&w=majority`;

//middleware
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
