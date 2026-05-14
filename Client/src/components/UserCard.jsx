import React from "react";

export default function UserCard({ user, id, setChat, status, activeChat }) {
  const firstLetters = user.name.slice(0, 2).toUpperCase();

  return (
    <div className="userCard" onClick={() => setChat(user)}>
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
  );
}
