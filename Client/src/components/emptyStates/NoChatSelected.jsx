import { Player } from "@lottiefiles/react-lottie-player";
import animation from "../../assets/animations/chat.json";

import React from "react";

export default function NoChatSelected() {
  return (
    <div className="animationArea">
      <Player
        src={animation}
        loop
        autoplay
        speed={0.4}
        style={{ width: "50%", maxWidth: "45rem" }}
      />
      <br />
      <p className="secText">Click on a user to start chatting</p>
    </div>
  );
}
