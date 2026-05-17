# Hadithny - Live Chat Application

<p align="center">
  <img src="https://img.shields.io/badge/Real--Time-Chat-22c55e?style=for-the-badge" />
  <img src="https://img.shields.io/badge/WebSockets-Socket.io-black?style=for-the-badge&logo=socketdotio" />
  <img src="https://img.shields.io/badge/Authentication-Secured-3b82f6?style=for-the-badge" />
</p>

<p align="center">
  A modern 1-to-1 real-time chat application built to learn and practice WebSockets using Socket.io.
</p>

---

## Preview

<p align="center">
  <img src="./Client/src/assets/pics/sc1.png" alt="Hadithny Preview" width="100%" />
</p>

---

# Features

✨ Real-time 1-to-1 messaging<br/>
🔐 Authentication system<br/>
⚡ Instant message delivery using WebSockets<br/>
🟢 Live socket connection handling<br/>
💬 Clean WhatsApp-inspired interface<br/>
📱 Responsive layout<br/>
🧠 Event-driven communication with Socket.io

---

# What I Learned

This project helped me deeply understand how real-time communication works on the web.

### Through building Hadithny, I learned:

* How WebSockets maintain persistent connections
* The difference between REST APIs and real-time communication
* Socket.io client/server architecture
* Event-based communication
* Authentication flow integration
* Managing active socket connections
* Broadcasting and receiving live events
* Structuring scalable real-time applications

---

# Tech Stack

<p align="left">

<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
<img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
<img src="https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socketdotio&logoColor=white" />
<img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" />
<img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white" />

</p>

---

# Project Goal

Hadithny was built as a learning-focused project to explore how modern messaging platforms achieve real-time communication.

Instead of relying only on traditional API requests, this project uses persistent socket connections to instantly synchronize messages between users.

---

# Installation

```bash
# Clone the repository
git clone https://github.com/HasanAlasker/Hadithny-LiveChat.git

# Navigate into the project
cd Hadithny-LiveChat
```

---

# Setup

## Backend

```bash
cd Server
npm install
npm run dev
```

## Frontend

```bash
cd Client
npm install
npm run dev
```

---

# Real-Time Messaging Example

```js
// Client
socket.emit("send_message", message);

// Server
socket.on("send_message", (data) => {
  socket.to(receiverSocketId).emit("receive_message", data);
});
```

---

# Future Improvements

* Message status (sent/delivered/read)
* Typing indicators
* Image & file sharing
* Voice messages
* Emoji support
* Push notifications
* Better mobile experience

---

# License

MIT License © Hasan Alasker
