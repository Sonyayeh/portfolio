import React, { useEffect, useState } from "react";

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      style={{
        background: "transparent",
        border: "none",
        boxShadow: "none",
        outline: "none",
        WebkitTapHighlightColor: "transparent",
        appearance: "none",
      }}
      className={`fixed bottom-6 right-6 z-[300] flex h-[10rem] w-[3rem] items-center justify-center p-0 m-0
      text-[2rem] text-blue-400
      shadow-none ring-0
      transition-all duration-300
      hover:scale-105 hover:text-purple-400
      focus:outline-none focus:ring-0
      active:outline-none
      rotate-[-90deg]
      ${
        showButton
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      ➤
    </button>
  );
};

export default BackToTop;