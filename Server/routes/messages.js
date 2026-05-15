import express from "express";
import auth from "../middleware/auth.js";
import MessageModel from "../models/message.js";

const router = express.Router();

// get my messages with a user
router.get("/:id", auth, async (req, res) => {
  try {
    const myId = req.user._id;
    const userId = req.params.id;

    const messages = await MessageModel.find({
      sender: myId,
      reciever: userId,
    });
    return res.status(200).json({ success: true, data: messages });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});

export default router;
