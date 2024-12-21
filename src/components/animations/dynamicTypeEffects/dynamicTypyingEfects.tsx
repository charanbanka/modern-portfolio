import React, { useState, useEffect } from "react";

function DynamicTypingEffect() {
  const texts = [
    "I'm a Full Stack Developer.",
    "I create amazing websites.",
    "Let's build something great!",
  ]; // Array of texts to type
  const [currentText, setCurrentText] = useState(""); // Current text being displayed
  const [textIndex, setTextIndex] = useState(0); // Index of the current text
  const [isDeleting, setIsDeleting] = useState(false); // Whether the text is being deleted
  const [charIndex, setCharIndex] = useState(0); // Index of the character being typed
  const typingSpeed = 100; // Speed of typing in ms
  const deletingSpeed = 50; // Speed of deleting in ms
  const delayBetweenWords = 1500; // Pause before typing next text

  useEffect(() => {
    const handleTyping = () => {
      const fullText = texts[textIndex]; // Get the full text from the array

      if (!isDeleting) {
        // If typing, add the next character
        setCurrentText(fullText.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        // If the entire text is typed, start deleting after a delay
        if (charIndex + 1 === fullText.length) {
          setTimeout(() => setIsDeleting(true), delayBetweenWords);
        }
      } else {
        // If deleting, remove the last character
        setCurrentText(fullText.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        // If the text is completely deleted, move to the next text
        if (charIndex === 0) {
          setIsDeleting(false);
          setTextIndex((textIndex + 1) % texts.length); // Loop through texts
        }
      }
    };

    // Set typing or deleting speed
    const timeout = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout); // Clear timeout on unmount
  }, [charIndex, isDeleting, textIndex, texts]);

  return (
    <div style={{ fontFamily: "monospace" }}>
      {currentText ? currentText : texts[textIndex][0]}
    </div>
  );
}

export default DynamicTypingEffect;
