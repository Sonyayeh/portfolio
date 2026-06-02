import React, { useEffect, useRef, useState } from "react";

const GLITCH_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*<>?/\\|[]{}";

const GlitchText = ({
  text,
  className = "",
  intervalMs = 45,
  settleSpeed = 1 / 3,
}) => {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef(null);
  const iterationRef = useRef(0);

  const stopGlitch = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    iterationRef.current = 0;
    setDisplayText(text);
  };

  const startGlitch = () => {
    stopGlitch();

    intervalRef.current = setInterval(() => {
      const next = text
        .split("")
        .map((char, index) => {
          if (char === " ") return " ";
          if (index < iterationRef.current) return text[index];
          return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
        })
        .join("");

      setDisplayText(next);
      iterationRef.current += settleSpeed;

      if (iterationRef.current >= text.length) {
        stopGlitch();
      }
    }, intervalMs);
  };

  useEffect(() => {
    return () => stopGlitch();
  }, [text]);

  return (
    <span
      className={`inline-block cursor-default ${className}`}
      onMouseEnter={startGlitch}
      onMouseLeave={stopGlitch}
      aria-label={text}
    >
      {displayText}
    </span>
  );
};

export default GlitchText;