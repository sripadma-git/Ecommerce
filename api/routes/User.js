const express = require("express");
const userRoute = express.Router();
const AsyncHandler = require("express-async-handler");
const User = require("../models/User");

  userRoute.post(
  "/login",
  AsyncHandler(async (req, res) => {
    const { email, password } = req.body;

    console.log("Login attempt with:", email, password);

    const user = await User.findOne({ email });

    console.log("User found:", user);

    if (user) {
      const isMatch = await user.matchPassword(password);
      console.log("Password match:", isMatch);

      if (isMatch) {
        return res.json({
          _id: user.id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token: null,
          createdAt: user.createdAt,
        });
      }
    }

    if (!email || !password) {
  res.status(400);
  throw new Error("Please provide both email and password");
}

  })
);



module.exports = userRoute;
