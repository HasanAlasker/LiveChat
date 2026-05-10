import mongoose from "mongoose";

const chatUserSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    chat: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Chat",
      required: true,
    },
  },
  { timestamps: true },
);

const ChatUserModel = mongoose.model("ChatUser", chatUserSchema);
export default ChatUserModel;
