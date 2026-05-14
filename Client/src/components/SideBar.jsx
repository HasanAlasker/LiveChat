import React from "react";
import UserCard from "./UserCard";
import { useAuthStore } from "../store/useAuthStore";

export default function SideBar({ users, setChat }) {
  const { user, logout } = useAuthStore();

  const RenderUsers = users?.map(
    (u) =>
      u._id !== user._id && (
        <div key={u._id}>
          <hr />
          <UserCard id={u._id} user={u} setChat={setChat} />
        </div>
      ),
  );
  return (
    <div className="sidebar">
      <h1 className="pri" style={{ marginBottom: "1.5rem" }}>
        Hadithny
      </h1>
      <div className="userScroll">{RenderUsers}</div>
      <button
        className="secBtn"
        style={{ marginTop: "1rem", width: "100%" }}
        onClick={logout}
      >
        Log out
      </button>
    </div>
  );
}
