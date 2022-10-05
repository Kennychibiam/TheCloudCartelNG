require("dotenv").config();

const express = require("express");
const userRoutes = require("./routes/userRoutes");
const app = express();
const mongoose = require("mongoose");

app.use(express.json()); //parses the json body and puts the object form into the body

app.use("/api/user", userRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log("listening port http://localhost:" + process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
