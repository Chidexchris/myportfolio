import React, { useState, useEffect } from "react";

function TypingEffect({ texts, typingSpeed = 100, deletingSpeed = 60, pauseTime = 1500 }) {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0); // which text we're on
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[index]; // Get current text from the array

    if (!isDeleting && displayed !== currentText) {
      // Typing forward
      const typingTimeout = setTimeout(() => {
        setDisplayed(currentText.slice(0, displayed.length + 1));
      }, typingSpeed);
      return () => clearTimeout(typingTimeout);
    }

    if (isDeleting && displayed !== "") {
      // Deleting backward
      const deletingTimeout = setTimeout(() => {
        setDisplayed(currentText.slice(0, displayed.length - 1));
      }, deletingSpeed);
      return () => clearTimeout(deletingTimeout);
    }

    if (displayed === currentText && !isDeleting) {
      // Pause before deleting
      const pause = setTimeout(() => setIsDeleting(true), pauseTime);
      return () => clearTimeout(pause);
    }

    if (displayed === "" && isDeleting) {
      // Go to next text
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length); // loop back
    }
  }, [displayed, isDeleting, index, texts, typingSpeed, deletingSpeed, pauseTime]);

  return <h1>{displayed}|</h1>;
}

export default TypingEffect;
