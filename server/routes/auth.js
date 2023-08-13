const express = require("express");
const User = require("../models/user");

const authRouter = express.Router();

authRouter.post("/api/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400) // Bad request
        .json({ msg: "User with same email already exists!" });
    }

    let user = new User({
      email,
      password,
      name,
    });
    user = await user.save();
    res.json(user); // default status code is 200 that's what we want!
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = authRouter;
