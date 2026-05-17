import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import SimpleChat from "./screens/SimpleChat";
import Login from "./screens/Auth/Login";
import Register from "./screens/Auth/Register";
import AuthRoute from "./components/auth/AuthRoute";
import Chat from "./screens/Chat";
import { useAuthStore } from "./store/useAuthStore";

function App() {
  const loadUser = useAuthStore((state) => state.loadUser);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<AuthRoute />}>
          <Route path="/" element={<Chat />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
