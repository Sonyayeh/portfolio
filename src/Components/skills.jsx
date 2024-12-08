import React, { useEffect } from "react";

const Skills = () => {
  useEffect(() => {
    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(
      `@keyframes scroll {
        to {
          transform: translate(calc(-50% - 0.5rem));
        }
      }`,
      styleSheet.cssRules.length
    );
    styleSheet.insertRule(
      `[data-direction="right"] {
        --_animation-direction: reverse;
      }`,
      styleSheet.cssRules.length
    );
    styleSheet.insertRule(
      `[data-direction="left"] {
        --_animation-direction: forwards;
      }`,
      styleSheet.cssRules.length
    );

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }
  }, []);


  const addAnimation = () => {
    const scrollers = document.querySelectorAll(".scroller");
    scrollers.forEach((scroller) => {
      scroller.setAttribute("data-animated", true);

      const scrollerInner = scroller.querySelector(".scroller__inner");
      const scrollerContent = Array.from(scrollerInner.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
      });
    });
  };

  return (
    <div
      className="scroller relative overflow-hidden"
      data-speed="fast"
      style={{
        WebkitMask:
          "linear-gradient(90deg, transparent, white 20%, white 80%, transparent)",
        mask: "linear-gradient(90deg, transparent, white 20%, white 80%, transparent)",
      }}
    >
      <ul
        className="scroller__inner flex gap-4 py-4"
        style={{
          width: "max-content",
          animation:
            "scroll var(--_animation-duration, 90s) var(--_animation-direction, forwards) linear infinite",
        }}
      >
        <li className="px-4 py-2 bg-blue-300 text-white rounded shadow-md">
          HTML/CSS
        </li>
        <li className="px-4 py-2 bg-blue-300 text-white rounded shadow-md">
          JS
        </li>
        <li className="px-4 py-2 bg-blue-300 text-white rounded shadow-md">
          React
        </li>
        <li className="px-4 py-2 bg-blue-300 text-white rounded shadow-md">
          Figma
        </li>
        <li className="px-4 py-2 bg-blue-300 text-white rounded shadow-md">
          Adobe Illustrator
        </li>
        <li className="px-4 py-2 bg-blue-300 text-white rounded shadow-md">
           Adobe InDesign
        </li>
        <li className="px-4 py-2 bg-blue-300 text-white rounded shadow-md">
          Adobe Photoshop
        </li>
        <li className="px-4 py-2 bg-blue-300 text-white rounded shadow-md">
          Adobe Premiere Pro
        </li>
        <li className="px-4 py-2 bg-blue-300 text-white rounded shadow-md">
          UI/UX
        </li>
        <li className="px-4 py-2 bg-blue-300 text-white rounded shadow-md">
          3D Animation
        </li>
        <li className="px-4 py-2 bg-blue-300 text-white rounded shadow-md">
          Photography
        </li>
        <li className="px-4 py-2 bg-blue-300 text-white rounded shadow-md">
          Videotography
        </li>
        <li className="px-4 py-2 bg-blue-300 text-white rounded shadow-md">
          Video Editing
        </li>
        <li className="px-4 py-2 bg-blue-300 text-white rounded shadow-md">
          Graphic Design
        </li>
      </ul>
    </div>
  );
};

export default Skills;

<style>
{`
@keyframes scroll {
  to {
    transform: translate(calc(-50% - 0.5rem));
  }
}

[data-direction="right"] {
  --_animation-direction: reverse;
}

[data-direction="left"] {
  --_animation-direction: forwards;
}
`}
</style>
