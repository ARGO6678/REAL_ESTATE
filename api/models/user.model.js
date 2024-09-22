import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    // defines set of rules
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema); // It takes two parameters, first one is ttaking name of model which is here "User" and it has to be Uppercase and singular but MONGODB will add s for many..

export default User;
