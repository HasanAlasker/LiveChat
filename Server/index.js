import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import users from "./routes/users.js";

dotenv.config();
const app = express();

app.set("trust proxy", 1);
app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production"
        ? ["https://.netlify.app"]
        : "http://localhost:5173",
    exposedHeaders: ["x-auth-token"],
  }),
);

const port = process.env.PORT || 4000;

if (!process.env.JWT_SECRET) {
  console.log("fatal error, no jwt defined");
}

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("Connected to mongoDB... ✅"))
  .catch((err) =>
    console.log("Error connecting to mongoDB... ❌", err.message),
  );

app.use(express.json());

app.use("/api/users", users);

app.listen(port, () => {
  console.log(`Server running on ${port} 🌍`);
  console.log(`Accessible at http://YOUR_IP:${port} 🖥️`);
});
