import React from "react";
import "./WavingSpan.css"; // Ensure you link to a CSS file where animations are defined

export const WavingSpan = (props) => (
  <span
    role="img"
    aria-label="shaking and waving hand"
    className="inline-block text-primary-txt motion-safe:animate-wave motion-safe:origin-waving shaking-and-waving"
    {...props}
  >
    👋
  </span>
);

export default WavingSpan;
