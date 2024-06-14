const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const UserSchema = require("./modal/UserModal");
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};

app.post("/login", (req, res) => {
  let { email, pass } = req.body;
  pass = jwt.sign({ email, pass }, process.env.JWT_SECRET);
  UserSchema.create({ email, pass })
    .then(console.log("User saved"))
    .catch((err) => console.log(err));

  return res.send(JSON.stringify("Success saved"));
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
  connectDB();
});
