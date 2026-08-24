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
    <div className="w-full justify-self-center">
      <div>
         <h1 className="flex justify-self-center text-blue-500 underline decoration-dashed justify-center
                sm:text-[2rem] sm:pb-[2rem] sm:mt-[5rem] sm:w-[23rem] sm:text-center
                md:text-[4rem] md:pt-[10rem] md:w-[55rem]
                lp:text-[2.8rem] lp:w-[72rem] lp:justify-center lp:items-center lp:pt-[6rem]
                lg:text-[3rem] lg:w-[56rem] lg:mb-[3rem] lg:mt-[2rem]">
          National Geographic Magazine Design:
        </h1>
        <h1 className="flex justify-self-center underline decoration-dashed text-blue-400 text-center justify-center
                sm:text-[1.5rem] sm:pb-[2rem] sm:w-[22rem]
                md:text-[3.5rem] md:pt-[3rem] md:w-[45rem] 
                lp:text-[2.5rem] lp:w-[75rem] lp:justify-center lp:items-center lp:mt-[-3rem]
                lg:text-[4rem] lg:w-[70rem] lg:mb-[2rem]">
          Overview:
        </h1>
        <h3 className=" text-purple-500 justify-self-center
                sm:text-[1rem] sm:pb-[1rem] sm:w-[23rem] 
                md:text-[2rem] md:w-[50rem] md:pb-[2rem]
                lp:text-[1.5rem] lp:w-[60rem] lp:leading-[3rem] lp:pb-[4rem]
                lg:text-[3rem] lg:w-[85rem] lg:mb-[5rem] lg:mt-[2rem] lg:leading-[5rem]">
         This project was completed over 11 hours through an iterative design process focused on composition, visual hierarchy, and thematic storytelling. The goal was to create a magazine cover that captures the exploratory and educational tone of National Geographic while maintaining strong visual clarity and engagement.
        </h3>
        </div>
    </div>
  );
};

export default MagDes;