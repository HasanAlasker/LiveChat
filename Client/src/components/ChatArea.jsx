import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import animation from "../assets/animations/chat.json";
import UserCard from "./UserCard";
import MessageInput from "./MessageInput";

export default function ChatArea({ activeChat }) {
  if (!activeChat)
    return (
      <div className="animationArea">
        <Player
          src={animation}
          loop
          autoplay
          speed={0.4}
          style={{ width: "50%", maxWidth: "45rem" }}
        />
        <br />
        <p className="secText">Click on a user to start chatting</p>
      </div>
    );
  return (
    <div className="chatArea">
      <UserCard user={activeChat} activeChat />
      <div className="messageArea">Message area</div>
      <MessageInput />
    </div>
  );
}
