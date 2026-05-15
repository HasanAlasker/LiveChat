import React, { useState } from "react";
import { DynamicIcon } from "lucide-react/dynamic";
import { useSocketStore } from "../store/useSocketStore";

export default function MessageInput({
  name,
  placeholder = "Type a message",
  icon,
  type,
  onSend,
  receiverId,
}) {
  const [msg, setMsg] = useState("");

  const sendMsg = () => {
    if (!msg || msg?.trim.length < 0) return;
    onSend(receiverId, msg);
    setMsg("");
  };

  return (
    <div className="inputGroup">
      <div className={`inputField`}>
        {icon && <DynamicIcon name={icon} size={22} className="inputIcon" />}
        <input
          placeholder={placeholder}
          name={name}
          value={msg}
          type={type ?? "text"}
          className={`input`}
          onChange={(e) => setMsg(e.target.value)}
        />
        <button className="priBtn" style={{ gap: ".4rem" }} onClick={sendMsg}>
          Send <DynamicIcon name={"send"} />
        </button>
      </div>
    </div>
  );
}
