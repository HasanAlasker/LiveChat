import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SimpleChat from "./screens/SimpleChat";
import Login from "./screens/Auth/Login";
import Register from "./screens/Auth/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SimpleChat />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
