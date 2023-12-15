import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      min: 3,
      max: 9,
    },
    email: {
      typeof: String,
      unique: true,
      required: true,
    },
    password: {
      typeof: String,
      required: true,
    },
    age: {
      type: Number,
    },
    gender: {
      type: String,
      enum: ["Female", "Male"],
    },
  },
  { timestamps: true }
);
const user_Modle = mongoose.model("User", userSchema);

export default user_Modle;
