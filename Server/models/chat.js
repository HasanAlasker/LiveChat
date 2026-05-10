import mongoose from "mongoose";

const chatSchema = new mongoose.Schema(
  {
    lastMessage: {
      type: String,
      maxLength: [500, "Message must be at most 500 characters long"],
    },
    isGroupChat: {
      type: Boolean,
      default: false,
    },
    groupName: {
      type: String,
      minLength: [1, "GroupName must be at least 2 characters long"],
      maxLength: [100, "GroupName must be at most 100 characters long"],
      required: function () {
        return this.isGroupChat === true;
      },
    },
    groupDescreption: {
      type: String,
      minLength: [1, "GroupDescription must be at least 2 characters long"],
      maxLength: [500, "GroupDescription must be at most 500 characters long"],
      required: function () {
        return this.isGroupChat === true;
      },
    },
  },
  { timestamps: true },
);

const ChatModel = mongoose.model("Chat", chatSchema);
export default ChatModel;
