const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      requied: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      requied: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
