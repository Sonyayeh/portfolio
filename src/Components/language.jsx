import React, { useEffect, useRef } from "react";

const Language = () => {
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false); // 🔒 prevents bar reset

  // Function to reset and animate the percentage bars
  const animateBars = () => {
    document.querySelectorAll(".bar-percentage[data-percentage]").forEach((progress) => {
      const percentage = Math.ceil(progress.getAttribute("data-percentage"));
      const bar = progress.nextElementSibling.querySelector(".bar");

      progress.textContent = "0%";
      bar.style.width = "0%";

      let count = 0;
      const interval = setInterval(() => {
        if (count >= percentage) {
          clearInterval(interval);
        } else {
          count++;
          progress.textContent = `${count}%`;
          bar.style.width = `${count}%`;
        }
      }, 20);
    });
  };

  // IntersectionObserver for one-time animation
  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true; // lock animation
          animateBars();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div className="text-center my-5 pl-[2rem]" ref={sectionRef}>
      <h5 className="text-black-300 text-3xl mb-4 
        sm:text-[1.5rem] sm:ml-[-2rem]
        lg:text-[4rem] lg:ml-[-30rem] lg:pt-[2rem] lg:pb-[3rem] lg:w-[110rem]
        lp:text-[2.75rem] lp:pt-[2rem] lp:pb-[3rem] lp:w-[100rem] lp:ml-[-17.5rem]
        md:pt-[2rem] md:text-[2rem] md:pb-[2rem]">
        I also <span className="text-red-500 underline">love</span> learning languages in my spare time:
      </h5>

      {/* Language boxes */}
      {/* Added floating animation and hover lift/shadow */}
      {[
        { name: "English", color: "bg-purple-300", percent: 98, ml: "md:ml-[3rem] lg:ml-[-10rem]" },
        { name: "Chinese/Mandarin", color: "bg-sky-500", percent: 98, ml: "md:ml-[24rem] lg:ml-[-10rem]" },
        { name: "Dutch", color: "bg-sky-300", percent: 30, ml: "md:ml-[3rem] lg:ml-[-10rem]" },
        { name: "French", color: "bg-emerald-300", percent: 65, ml: "md:ml-[3rem] lg:ml-[-10rem]" },
        { name: "Japanese", color: "bg-yellow-300", percent: 80, ml: "md:ml-[24rem] lg:ml-[-10rem]" },
        { name: "Spanish", color: "bg-orange-300", percent: 35, ml: "md:ml-[3rem] lg:ml-[-10rem]" },
        { name: "German", color: "bg-red-300", percent: 40, ml: "md:ml-[24rem] lg:ml-[-10rem]" },
      ].map((lang, index) => (
        <div
          key={index}
          className={`bar-main-container ${lang.color} text-white rounded-lg w-72 mx-auto mb-4 sm:ml-[0.7rem] lp:ml-[-3.5rem] lp:w-full lp:pb-[2rem] lp:mt-[3rem] ${lang.ml} floating-box transition-all duration-500`}
          style={{ animationDelay: `${index * 0.2}s` }} // stagger floating
        >
          <h5 className="text-3xl sm:text-[1.5rem] md:text-[2rem] lg:text-[3rem] lp:text-[3rem] lg:pt-[1rem] lp:pt-[1rem]">
            {lang.name}
          </h5>
          <div className="p-2">
            <div
              className="bar-percentage bg-black/20 rounded-lg text-center py-1 text-sm sm:text-[2rem] lg:text-[3rem] lp:text-[2.5rem]"
              data-percentage={lang.percent}
            ></div>
            <div className="bar-container bg-black/20 rounded-full h-2 mt-2 overflow-hidden">
              <div className="bar bg-white h-full rounded-l-full transition-all duration-300 ease-linear"></div>
            </div>
          </div>
        </div>
      ))}

      {/* Floating CSS */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0px); }
        }
        .floating-box {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Language;
