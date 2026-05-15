import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import Screen from "../components/Screen";
import useApi from "../hooks/useApi";
import { getUsers } from "../api/user";
import ChatArea from "../components/ChatArea";
import { useSocketStore } from "../store/useSocketStore";

export default function Chat() {
  const [users, setUsers] = useState();
  const [activeChat, setChat] = useState(null);

  const { data: fetchedUsers, request: fetchUsers, loading } = useApi(getUsers);
  const { connect } = useSocketStore();

  connect();

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    setUsers(fetchedUsers);
  }, [fetchedUsers]);

  return (
    <div className="chatScreen">
      <SideBar users={users} setChat={setChat} />
      <ChatArea activeChat={activeChat} />
    </div>
  );
}
