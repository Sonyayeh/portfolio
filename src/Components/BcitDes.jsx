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
      <h1
        ref={overviewRef}
        className="pl-2 text-center underline decoration-dashed text-orange-400
        sm:text-[2rem] sm:pb-[1rem] sm:w-[25rem]
        md:text-5xl md:w-[50rem] md:pb-3 md:ml-[1rem]
        lp:text-[4rem] lp:w-[74rem] lp:ml-[-1rem]
        lg:text-[5rem] lg:w-[30rem] lg:ml-[18rem] lg:pb-[2rem]
        "
      >
        Overview:
      </h1>

      <h3
        className="pl-2 text-purple-500 sm:text-[1rem] sm:w-[25rem] sm:ml-5 
        md:text-4xl sm:pb-[2rem] md:pl-[1rem] md:w-[55rem] md:pb-[5rem] md:pt-[2rem] md:leading-[3.5rem]
        lp:text-[2.2rem] lp:w-[65rem] lp:ml-[4rem]
        lg:text-[3rem] lg:ml-[-20rem] lg:w-[110rem] lg:leading-[5rem]"
      >
       I led a redesign of the MyBCIT platform to improve usability, streamline navigation, and reduce cognitive load for students and administrators. By identifying key friction points in the existing experience, I restructured the interface to prioritize clarity, accessibility, and efficiency. 
       <br />
       <br />
       Key improvements include surfacing essential information, such as the student ID directly on the main dashboard, reducing the need for multi-step navigation. The result is a more intuitive, user-centered system that enhances overall usability and aligns with modern interface standards.
      </h3>
    </div>
  );
};

export default BcitDes;