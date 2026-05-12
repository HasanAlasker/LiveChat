import { useState } from "react";
import "./App.css";
import { io } from "socket.io-client";
import { useEffect } from "react";

const socket = io("http://localhost:4000");

function App() {
  const [id, setId] = useState(null);
  const [send, setSend] = useState(null);
  const [rec, setRec] = useState([]);

  useEffect(() => {
    socket.on("connect", () => {
      setId(socket.id);
    });
  }, []);

  useEffect(() => {
    socket.on("receive message", (msg) => setRec((prev) => [...prev, msg]));

    return () => {
      socket.off("receive message"); // removes only THIS listener
    };
  }, []);

  const sendMsg = async () => {
    socket.emit("send message", { id: id + new Date(), msg: send });

    return () => {
      socket.off("send message"); // removes only THIS listener
    };
  };

  const RenderMsgs =
    rec.length > 0 && rec?.map((m) => <p key={m.id}>{m.msg}</p>);

  return (
    <>
      <h1>Socket id: {id}</h1>
      <input type="text" onChange={(e) => setSend(e.target.value)} />
      <button onClick={sendMsg}>Send</button>
      {RenderMsgs}
    </>
  );
}

export default App;
