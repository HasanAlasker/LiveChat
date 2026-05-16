import React from "react";
import Message from "./Message";

export default function MessageArea({ msgs, bottomRef }) {
  const thereAreMsgs = msgs.length > 0;

  const RenderMsgs = thereAreMsgs ? (
    msgs?.map((m, index) => (
      <Message
        key={m._id || index}
        id={m._id}
        content={m.content}
        createdAt={m.createdAt}
        updatedAt={m.updatedAt}
        isEdited={m.isEdited}
        isSeen={m.isSeen}
        sender={m.sender}
        receiver={m.receiver}
      />
    ))
  ) : (
    <p>No messages yet</p>
  );
  return (
    <div className={thereAreMsgs ? "messageArea" : "emptyMsgArea"}>
      {RenderMsgs}
      <div ref={bottomRef} />
    </div>
  );
}
