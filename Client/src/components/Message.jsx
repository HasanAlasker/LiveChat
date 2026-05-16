import React from "react";
import { useAuthStore } from "../store/useAuthStore";
import { formatDateTime } from "../functions/formatDateTime";

export default function Message({
  id,
  sender,
  receiver,
  content,
  isEdited,
  isDeleted,
  updatedAt,
  createdAt,
  isSeen,
}) {
  const { user } =  useAuthStore();
  const myMsg = user._id === sender;

  return (
    <div className={`msgCont ${myMsg && "myMsg"}`}>
      <p className="msgText">{content}</p>
      <div className="msgDates">
        {isEdited && <span>Edited:</span>}
        <span>{formatDateTime(isEdited ? updatedAt : createdAt)}</span>
      </div>
    </div>
  );
}
