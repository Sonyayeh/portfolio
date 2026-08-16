import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const BcitDes = () => {
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
        color: "#a855f7", // blue
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
  

      <div className="flex justify-self-center text-center">
              <h1 className="text-orange-500 text-left 
                sm:text-[1rem] sm:pb-[1rem] sm:w-[22rem] 
                md:text-[2rem] md:w-[50rem] md:pb-[2rem]
                lp:text-[2rem] lp:w-[70rem] lp:leading-[3rem] lp:pb-[4rem]
                lg:text-[3rem] lg:w-[85rem] lg:mb-[5rem] lg:mt-[2rem] lg:leading-[5rem]">
       I led a redesign of the MyBCIT platform to improve usability, streamline navigation, and reduce cognitive load for students and administrators. By identifying key friction points in the existing experience, I restructured the interface to prioritize clarity, accessibility, and efficiency. 
       <br />
       <br />
       Key improvements include surfacing essential information, such as the student ID directly on the main dashboard, reducing the need for multi-step navigation. The result is a more intuitive, user-centered system that enhances overall usability and aligns with modern interface standards.
      </h1>
      </div>
  );
};

export default BcitDes;