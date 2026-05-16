import { useState, useEffect, useRef } from "react";
import UserCard from "./UserCard";
import MessageInput from "./MessageInput";
import useApi from "../hooks/useApi";
import { getMsgs } from "../api/message";
import MessageArea from "./MessageArea";
import NoChatSelected from "./emptyStates/NoChatSelected";
import { useSocketStore } from "../store/useSocketStore";
import { useAuthStore } from "../store/useAuthStore";

export default function ChatArea({ activeChat }) {
  const [msgs, setMsgs] = useState([]);
  const bottomRef = useRef(null);

  const { user } = useAuthStore();
  const { data: fetchedMsgs, request: fetchMsgs, loading } = useApi(getMsgs);
  const sendMessage = useSocketStore((state) => state.sendMessage);
  const receiveMessage = useSocketStore((state) => state.receiveMessage);

  useEffect(() => {
    if (activeChat?._id) {
      fetchMsgs(activeChat?._id);
    }
  }, [activeChat?._id]);

  useEffect(() => {
    setMsgs(fetchedMsgs);
  }, [fetchedMsgs]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs]);

  const sendMsg = async (receiverId, msg) => {
    sendMessage(receiverId, msg);
    setMsgs((prev) => [
      ...prev,
      { content: msg, createdAt: new Date(), sender: user._id },
    ]);
  };

  useEffect(() => {
    const cleanup = receiveMessage(({ sender, msg }) => {
      if (sender === activeChat?._id) {
        setMsgs((prev) => [
          ...prev,
          { content: msg, sender, createdAt: new Date() },
        ]);
      }
    });
    return cleanup;
  }, [activeChat?._id]);

  if (!activeChat) return <NoChatSelected />;

  return (
    <div className="chatArea">
      <UserCard user={activeChat} activeChat />
      <MessageArea msgs={msgs} bottomRef={bottomRef} />
      <MessageInput receiverId={activeChat?._id} onSend={sendMsg} />
    </div>
  );
}
