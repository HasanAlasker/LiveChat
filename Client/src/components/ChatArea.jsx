import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import animation from "../assets/animations/chat.json";
import UserCard from "./UserCard";
import MessageInput from "./MessageInput";
import useApi from "../hooks/useApi";
import { getMsgs } from "../api/message";
import { useEffect } from "react";
import { useState } from "react";

export default function ChatArea({ activeChat }) {
  const [msgs, setMsgs] = useState([]);

  // console.log(activeChat?._id);
  const { data: fetchedMsgs, request: fetchMsgs, loading } = useApi(getMsgs);

  useEffect(() => {
    if (activeChat?._id) {
      fetchMsgs(activeChat?._id);
      console.log(activeChat?._id);
    }
  }, [activeChat?._id]);

  useEffect(() => {
    setMsgs(fetchedMsgs);
    console.log(fetchedMsgs);
  }, [fetchedMsgs]);

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
