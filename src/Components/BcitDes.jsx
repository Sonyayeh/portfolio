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
    <div className="w-full justify-self-center">
      <h1
        ref={overviewRef}
        className="pl-2 text-center justify-self-center underline decoration-dashed text-orange-400
                sm:text-[1.5rem] sm:pb-[2rem] sm:w-[22rem]
                md:text-[3.5rem] md:pt-[3rem] md:w-[55rem] 
                lp:text-[2.5rem] lp:w-[75rem] lp:justify-center lp:items-center lp:mt-[-3rem]
                lg:text-[4rem] lg:w-[70rem] lg:mb-[2rem]
        "
      >
        Overview:
      </h1>

      <h3
        className="pl-2 text-purple-500 justify-self-center text-center
        sm:text-[1rem] sm:pb-[1rem] sm:w-[22rem] 
                md:text-[2rem] md:w-[50rem] md:pb-[2rem]
                lp:text-[1.5rem] lp:w-[60rem] lp:leading-[3rem] lp:pb-[4rem]
                lg:text-[3rem] lg:w-[85rem] lg:mb-[5rem] lg:mt-[2rem] lg:leading-[5rem]"
      >
      Every BCIT student uses MyBCIT, and almost everyone I talked to had a complaint about it before I even finished asking the question.
<br /><br />
Six or more clicks just to check a grade, a security warning that dominated the homepage instead of anything students actually needed, and an interface that still looked like it belonged to 2003. Interviewing more than ten people, current students, graduates, and people who'd never seen the platform, made the pattern impossible to ignore: this wasn't a matter of taste, it was a real barrier for new students trying to navigate their own school.
<br /><br />
The redesign followed directly from what they told me: fewer clicks to reach the essentials, a homepage that leads with what students actually need, and a visual system that still feels unmistakably BCIT, just built for 2024 instead of 2003.
      </h3>
    </div>
  );
};

export default BcitDes;