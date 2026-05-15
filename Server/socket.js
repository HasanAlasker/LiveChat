import MessageModel from "./models/message.js";

const onlineUsers = new Map();

export default function initSocket(io) {
  io.on("connection", (socket) => {
    socket.on("register", (userId) => {
      onlineUsers.set(userId, socket.id);
      console.log(`User ${userId} connected with socketId ${socket.id}`);
    });

    socket.on("send message", async ({ senderId, recipientId, msg }) => {
      const recipientSocketId = onlineUsers.get(recipientId);

      if (recipientSocketId) {
        socket.to(recipientSocketId).emit("receive message", { senderId, msg });
      }

      try {
        const newMessage = new MessageModel({
          sender: senderId,
          receiver: recipientId,
          content: msg,
        });
        await newMessage.save();

      } catch (error) {
        console.log("Failed to save message:", error);
      }
    });

    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
      for (const [userId, socketId] of onlineUsers.entries()) {
        if (socketId === socket.id) {
          onlineUsers.delete(userId);
          break;
        }
      }
    });
  });
}
