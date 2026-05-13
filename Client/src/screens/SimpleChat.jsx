import { useState } from "react";
import { io } from "socket.io-client";
import { useEffect } from "react";

const socket = io("http://localhost:4000");

export default function SimpleChat() {
  const [id, setId] = useState(null);
  const [send, setSend] = useState(null);
  const [rec, setRec] = useState([]);

  useEffect(() => {
    socket.on("connection", () => {
      setId(socket.id);
    });
  }, []);

  useEffect(() => {
    socket.on("receive message", (msg) => setRec((prev) => [...prev, msg]));

    return () => {
      socket.off("receive message");
    };
  }, []);

  const sendMsg = async () => {
    if (!send || send?.length < 1) return;

    socket.emit("send message", { id: id + new Date(), msg: send });

    return () => {
      socket.off("send message");
    };
  };

  const RenderMsgs =
    rec.length > 0 && rec?.map((m) => <p key={m.id}>{m.msg}</p>);

  return (
    <>
      <h1>Websocket Live Chat</h1>
      <input type="text" onChange={(e) => setSend(e.target.value)} />
      <button onClick={sendMsg}>Send</button>
      {RenderMsgs}
    </>
  );
}