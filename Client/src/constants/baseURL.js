export const BASE_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:4000/api"
    : "https://livechat-3trd.onrender.com/api"; // add this when deployed

export const SOCKET_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:4000"
    : "https://livechat-3trd.onrender.com";
