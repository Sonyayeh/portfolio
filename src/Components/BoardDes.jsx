import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const BoardDes = () => {
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
   

       <h3 className=" text-orange-500 justify-self-center
        sm:text-[1rem] sm:pb-[1rem] sm:w-[24rem] 
                md:text-[2rem] md:w-[50rem] md:pb-[2rem]
                lp:text-[1.5rem] lp:w-[60rem] lp:leading-[3rem] lp:pb-[4rem]
                lg:text-[1.5rem] lg:w-[69rem] lg:mb-[2rem] lg:mt-[2rem] lg:leading-[3rem]">
                Boardwalk Boutique is a skate shop that does skateboard rentals and streetwear and skateboard
                retail. It is a fictional skate shop located in the heart of Vancouver. The app includes various of designs and brands of skateboards and is to guarantee users to find something for them. There are also the review sections users can read upon before renting/purchasing any merchandise, and they can also leave comments about products.
                </h3>

  );
};

export default BoardDes;