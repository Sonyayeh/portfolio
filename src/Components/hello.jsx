import React, { useState, useEffect } from "react";

const greetings = [
  "<span class='md:text-[3rem] lg:text-[5rem]'>Hello, nice to meet you!</span>",
  "<span class='md:text-[2.7rem] lg:text-[5rem]'>Bonjour, ravi de vous recontrer!</span>",
  "<span class='md:text-[3rem] lg:text-[5rem]'>Hola, encatada de concerte!</span>",
  "<span class='sm:text-[1rem] md:text-[3rem] lg:text-[5rem]'>您好, 很高興認識您！</span>", 
  "<span class='sm:text-[1rem] md:text-[2.7rem] lg:text-[4rem]'>初めまして、宜しくお願い申し上げます！</span>",
  "<span class='sm:text-[1rem] md:text-[3rem] lg:text-[5rem]'>안녕하세요、만나서 반가워요!</span>",
  "<span class='md:text-[3rem] lg:text-[5rem]'>Hallo, aangenaam!</span>",
  "<span class='text-[1.13rem] md:text-[2.5rem] lg:text-[5rem]'>Merhaba, Tanıştığımıza memnun oldum!</span>",
];

const Hello = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % greetings.length);
    }, 6000); // 6s per greeting

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full container flex flex-col items-start sm:mb-[3rem]">
      <div 
        key={index} // Forces re-render
        className="text-purple-500 font-Dos 
        sm:text-[1.2rem] sm:mt-[1.5rem] sm:ml-[-0.5rem] 
        md:text-[4rem] 
        lg:text-[7rem] lg:ml-[-15rem]"
        style={{
          animation: "fadeInOut 6s ease-in-out infinite",
          opacity: 0,
        }}
        dangerouslySetInnerHTML={{ __html: greetings[index] }}
      />
      
      {/* Custom CSS */}
      <style>
        {`
          @keyframes fadeInOut {
            0% { opacity: 0; }
            10% { opacity: 1; }
            80% { opacity: 1; }
            100% { opacity: 0; }
          }
        `}
      </style>
    </div>
  );
};

export default Hello;
