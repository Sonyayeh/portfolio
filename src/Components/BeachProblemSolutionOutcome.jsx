import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const AnimatedTitle = ({ children, className = "" }) => {
  const titleRef = useRef(null);
  const waveTweenRef = useRef(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;

    const mediaQuery = window.matchMedia("(min-width: 768px)");
    if (!mediaQuery.matches) return;

    const originalText = children;

    el.innerHTML = String(originalText)
      .split("")
      .map((char) =>
        char === " "
          ? `<span class="inline-block">&nbsp;</span>`
          : `<span class="inline-block">${char}</span>`
      )
      .join("");

    const letters = el.querySelectorAll("span");

    const handleMouseEnter = () => {
      if (waveTweenRef.current) waveTweenRef.current.kill();

      gsap.to(letters, {
        color: "#a855f7",
        duration: 0.3,
        ease: "steps(1)",
      });

      gsap.to(el, {
        scale: 1.05,
        duration: 0.3,
        ease: "steps(1)",
      });

      waveTweenRef.current = gsap.to(letters, {
        y: (i) => -10 + (i % 3) * 5,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        stagger: 0.05,
        ease: "steps(1)",
      });
    };

    const handleMouseLeave = () => {
      if (waveTweenRef.current) waveTweenRef.current.kill();

      gsap.to(letters, {
        y: 0,
        color: "#38bdf8",
        duration: 0.3,
        stagger: 0.05,
        ease: "power1.out",
      });

      gsap.to(el, {
        scale: 1,
        duration: 0.3,
        ease: "power1.out",
      });
    };

    el.addEventListener("mouseenter", handleMouseEnter);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mouseenter", handleMouseEnter);
      el.removeEventListener("mouseleave", handleMouseLeave);
      if (waveTweenRef.current) waveTweenRef.current.kill();
      el.textContent = originalText;
    };
  }, [children]);

  return (
    <h1 ref={titleRef} className={className}>
      {children}
    </h1>
  );
};

const BeachPSO = () => {
  const titleClasses = `
    pl-2 text-center underline decoration-dashed text-blue-400
    sm:text-[1.7rem] sm:pb-[1rem] sm:w-[25rem]
    md:text-5xl md:w-[50rem] md:pb-5 md:ml-[1rem]
    lp:text-[4rem] lp:w-[74rem] lp:ml-[-1rem]
    lg:text-7xl lg:w-[60rem] lg:ml-[2rem] lg:pt-[5rem]
  `;

  return (
    <div
      className="w-full justify-center
      lp:w-[70rem] 
      "
    >
      <AnimatedTitle className={titleClasses}>Problem:</AnimatedTitle>

      <h3
        className="pl-2 text-orange-500 
        sm:text-[1rem] sm:w-[23rem] sm:ml-[2rem] 
        md:text-4xl sm:pb-[2rem] md:ml-[5rem] md:w-[45rem] md:pb-[5rem] md:pt-[2rem] md:leading-[3.5rem]
        lp:text-[2.2rem] lp:w-[50rem] lp:ml-[10rem]
        lg:text-[3.5rem] lg:ml-[-10rem] lg:w-[80rem]"
      >
        Sports posters are often overly busy to show their excitement, making it hard to convey excitement and theme clearly.
      </h3>

      <div className="sm:w-[20rem] flex flex-col items-center"></div>

      <AnimatedTitle className={titleClasses}>Solution:</AnimatedTitle>

      <h3
        className="pl-2 text-orange-500 
        sm:text-[1rem] sm:w-[22rem] sm:ml-[3rem] 
        md:text-4xl sm:pb-[2rem] md:pl-[2rem] md:w-[50rem] md:pb-[5rem] md:pt-[2rem] md:leading-[3.5rem]
        lp:text-[2.2rem] lp:w-[60rem] lp:ml-[7rem]
        lg:text-[3.5rem] lg:ml-[-12rem] lg:w-[95rem]"
      >
        I designed a balanced composition with a strong focal point and vibrant visuals to communicate both the event and its atmosphere.
      </h3>

      <AnimatedTitle className={titleClasses}>Outcome:</AnimatedTitle>

      <h3
        className="pl-2 text-orange-500 
        sm:text-[1rem] sm:w-[22rem] sm:ml-[3rem] 
        md:text-4xl sm:pb-[2rem] md:pl-[2rem] md:w-[50rem] md:pb-[5rem] md:pt-[2rem] md:leading-[3.5rem]
        lp:text-[2.2rem] lp:w-[60rem] lp:ml-[7rem]
        lg:text-[3.5rem] lg:ml-[-12rem] lg:w-[95rem]"
      >
        I used a central volleyball as the focal point, combined with vibrant colours and beach elements, to create a design that feels energetic while maintaining clear hierarchy.
      </h3>
    </div>
  );
};

export default BeachPSO;