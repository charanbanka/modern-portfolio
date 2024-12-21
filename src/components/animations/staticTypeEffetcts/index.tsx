import React from "react";
import "./TypingEffect.css";

function StaticTypingEffect({ text, textClasses }) {
  return (
    <div className="typing-container">
      <span className={`typing-text ${textClasses}`}>{text}</span>
    </div>
  );
}

export default StaticTypingEffect;
