import { DynamicIcon } from "lucide-react/dynamic";
import React from "react";

export default function UserCard({
  user,
  id,
  setChat,
  status,
  activeChat,
  showBack,
  closeChat,
  style,
}) {
  const firstLetters = user.name.slice(0, 2).toUpperCase();

  return (
    <div className="userCard" style={style} onClick={() => setChat(user)}>
      <div style={{ display: "flex", alignItems: "center", gap: ".5rem" }}>
        <div
          className="avatar"
          style={{
            backgroundColor: activeChat && "#25d366",
          }}
        >
          {firstLetters}
        </div>
        <p className="userName">{user.name}</p>
      </div>

      {showBack && (
        <DynamicIcon name="x" size={26} color="#25d366" onClick={closeChat} />
      )}
    </div>
  );
}
