import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import userRouter from "./routes/user.route.js"; // We change name from just router to userRouter as we use default at export time and we call this as such because we have many routers like authentication, listing and others. So to avoid confusion
import authRouter from "./routes/authentication.route.js";
import listingRouter from "./routes/listing.route.js";
import cookieParser from "cookie-parser";
import path from "path";

mongoose.connect(process.env.ArnavMONGO); // To use this we need another package npm i dotenv

const _dirname = path.resolve();

const app = express(); 

app.use(express.json()); // will allow json as input to server!

app.use(cookieParser());

app.listen(3000, () => {
  // This will listen to this port number and send below message, and this number can be any
  console.log("Server is running on port 3000!!");
});

app.use("/api/user", userRouter);
// app.use('/us',userRouter); will also work
app.use("/api/auth", authRouter);
app.use("/api/listing", listingRouter);

app.use(express.static(path.join(_dirname, "/client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(_dirname, "client", "dist", "index.html"));
});

// MiddleWare for auth API Routing, first see that file
app.use((err, req, res, next) => {
  //err is error coming from input of middleware and next is to go to next mmiddleware
  const statusCode = err.statusCode || 500; // take error code or send 500 by default which is internal server error
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
