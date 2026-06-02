import React, { useEffect, useRef, useState } from "react";

const Goal = () => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observerInstance.unobserve(section);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`flex justify-center item-center max-w-6xl mx-auto transition-opacity duration-1000 ease-out ${
        inView ? "opacity-100" : "opacity-0"
      } lg:flex lg:items-center lg:min-h-[20vh]`}
    >
      <h2
        className="
          mx-auto w-full flex justify-center items-center
          text-center font-bold text-orange-300
          sm:text-[1rem]
          md:text-[2rem] md:pb-[1rem]
          lp:text-[2rem]
          lg:text-[2.5rem] 
        "
      >
        " I aim to use New Media to transform my artistic background into
        interactive storytelling experiences that connect and engage people. "
      </h2>
    </section>
  );
};

export default Goal;