import express from "express";
import mongoose from "mongoose";
import auth from "../middleware/auth.js";
import UserModel from "../models/user.js";
import validate from "../middleware/joiValidation.js";
import { userRegistrationSchema } from "../validation/user.js";
import logIP from "../middleware/logIp.js";

const router = express.Router();

// get users
router.get("/", auth, async (req, res) => {
  try {
    const users = await UserModel.find();
    return res.status(200).json({ success: true, data: users });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});

// register
router.post(
  "/register",
  validate(userRegistrationSchema),
  logIP("REGISTER"),
  async (req, res) => {
    try {
      const { name, email, password } = req.body;

      const existingUser = await UserModel.findOne({
        email: email,
      }).select("-password");
      if (existingUser)
        return res
          .status(400)
          .json({ success: false, message: "User already registered" });

      const newUser = new UserModel({ name, email, password });
      newUser.password = await newUser.hashPassword(password);

      const token = await newUser.generateAuthToken();

      if (!newUser || !token)
        return res
          .status(404)
          .json({ success: false, message: "Failed to register" });

      await newUser.save();

      return res
        .status(201)
        .header("x-auth-token", token)
        .json({ success: true, message: "User created successfully" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        success: false,
        message: "Server Error",
      });
    }
  },
);

// login

// edit

export default router;
