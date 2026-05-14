import React, { useState } from "react";
import { DynamicIcon } from "lucide-react/dynamic";

export default function MessageInput({
  name,
  placeholder = "Type a message",
  icon,
  type,
}) {
  const [msg, setMsg] = useState(null);

  const sendMsg = () => {
    console.log(msg);
  };

  return (
    <div className="inputGroup">
      <div className={`inputField`}>
        {icon && <DynamicIcon name={icon} size={22} className="inputIcon" />}
        <input
          placeholder={placeholder}
          name={name}
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
