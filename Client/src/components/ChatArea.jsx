import { useState, useEffect } from "react";
import UserCard from "./UserCard";
import MessageInput from "./MessageInput";
import useApi from "../hooks/useApi";
import { getMsgs } from "../api/message";
import MessageArea from "./MessageArea";
import NoChatSelected from "./emptyStates/NoChatSelected";

export default function ChatArea({ activeChat }) {
  const [msgs, setMsgs] = useState([]);
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

  if (!activeChat) return <NoChatSelected />;

  return (
    <div className="chatArea">
      <UserCard user={activeChat} activeChat />
      <MessageArea msg={msgs} />
      <MessageInput receiverId={activeChat?._id} />
    </div>
  );
}
