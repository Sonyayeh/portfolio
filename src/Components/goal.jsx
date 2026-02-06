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
            setInView(true);               // fade in
            observerInstance.unobserve(section); // stop watching after
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
      className={`max-w-6xl mx-auto transition-opacity duration-1000 ease-out ${
        inView ? "opacity-100" : "opacity-0"
      }`}
    >
      <h2
        className="text-[2rem] font-bold text-center text-orange-300 mb-6
        sm:text-[1rem]
        md:text-[2rem] md:w-[70rem] md:ml-[-9rem] md:pb-[1rem]
        lp:text-[2rem] lp:ml-[1rem]
        lg:text-[2.5rem] lg:w-[120rem] lg:ml-[-30rem] lg:mt-[5rem] lg:mb-[5rem]
        "
      >
        " I aim to use New Media to transform my artistic background into interactive storytelling experiences that connect and engage people. "
      </h2>
    </section>
  );
};

export default Goal;
