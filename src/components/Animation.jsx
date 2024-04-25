import React from "react";
import { TypeAnimation } from "react-type-animation";

function Animation() {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed once, initially
        "Artistic Designs For Front-End.",
        2300,
        "Artistic Designs For UX/UI.",
        2300,
        "Artistic Designs For Creative.",
        2300,
      ]}
      speed={30}
      repeat={Infinity}
    />
  );
}

export default Animation;
