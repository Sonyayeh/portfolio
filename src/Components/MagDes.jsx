import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const MagDes = () => {
  const overviewRef = useRef(null);
  const waveTweenRef = useRef(null);

  useEffect(() => {
    const el = overviewRef.current;

    const mediaQuery = window.matchMedia("(min-width: 1280px)");
    if (!mediaQuery.matches || !el) return;

    // Wrap each letter in a span
    const text = el.textContent;
    el.innerHTML = text
      .split("")
      .map((char) => `<span class="inline-block">${char}</span>`)
      .join("");

    const letters = el.querySelectorAll("span");

    // Hover in: start continuous wave + color shift
    const handleMouseEnter = () => {
      // stop any previous tween
      if (waveTweenRef.current) waveTweenRef.current.kill();

      // Color shift
      gsap.to(letters, {
        color: "#a855f7", // purple
        duration: 0.3,
        ease: "steps(1)",
      });

      // Scale for pixel pop
      gsap.to(el, {
        scale: 1.05,
        duration: 0.3,
        ease: "steps(1)",
      });

      // Continuous wave tween
      waveTweenRef.current = gsap.to(letters, {
        y: (i) => -10 + (i % 3) * 5,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        stagger: 0.05,
        ease: "steps(1)",
      });
    };

    // Hover out: stop wave and reset
    const handleMouseLeave = () => {
      if (waveTweenRef.current) waveTweenRef.current.kill();
      gsap.to(letters, {
        y: 0,
        color: "#38bdf8", // original blue
        duration: 0.3,
        stagger: 0.05,
        ease: "power1.out",
      });
      gsap.to(el, { scale: 1, duration: 0.3, ease: "power1.out" });
    };

    el.addEventListener("mouseenter", handleMouseEnter);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mouseenter", handleMouseEnter);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="w-full justify-center">
      <div className="text-start w-[12rem]">
        <h1 className="pl-2 justify-center text-center text-blue-500 underline decoration-dashed sm:text-[2rem] sm:pb-[5rem] sm:mt-[-5rem] sm:w-[25rem] md:text-[2.5rem] md:ml-[-5rem] md:pt-[10rem] md:w-[65rem] lp:text-[3.7rem] lp:w-[77rem] lp:justify-center lp:items-center lp:ml-[-2rem]
        lg:text-[4.5rem] lg:ml-[-18rem] lg:w-[95rem] lg:mb-[1rem] lg:mt-[2rem]">
          National Geographic Magazine Design:
        </h1>
        <h1 className="pl-2 justify-center text-center underline decoration-dashed text-blue-400 sm:text-[1.7rem] sm:pb-[1rem] sm:w-[25rem] sm:ml-1 md:text-5xl md:ml-[2rem] md:pt-[3rem] md:w-[50rem] lp:text-[4rem] lp:w-[22rem] lp:ml-[25rem]
        lg:text-7xl lg:w-[25rem] lg:mb-[5rem] lg:mt-[2rem] lg:ml-[18rem]">
          Overview:
        </h1>
        <h3 className="pl-2 text-orange-500 sm:text-[1rem] sm:pb-[1rem] sm:w-[25rem] sm:ml-4 
        md:text-[2rem] md:ml-[0rem] md:pt-[3rem] md:w-[58rem] md:mb-[3rem] 
        lp:text-[2.5rem] lp:w-[75rem] lp:justify-center lp:items-center lp:ml-[-1rem]
        lg:text-[3.5rem] lg:ml-[-20rem] lg:w-[105rem] lg:mb-[5rem] lg:mt-[2rem]">
         This project was completed over 11 hours through an iterative design process focused on composition, visual hierarchy, and thematic storytelling. The goal was to create a magazine cover that captures the exploratory and educational tone of National Geographic while maintaining strong visual clarity and engagement.
        </h3>
        </div>
    </div>
  );
};

export default MagDes;