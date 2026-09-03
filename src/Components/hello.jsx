import React, { useState, useEffect } from "react";

const greetings = [
  "Hello, nice to meet you!",
  "Bonjour, ravi de vous rencontrer!",
  "Hola, encantada de conocerte!",
  "您好, 很高興認識您！",
  "初めまして、宜しくお願い申し上げます！",
  "안녕하세요, 만나서 반가워요!",
  "Hallo, aangenaam!",
  "Merhaba, Tanıştığımıza memnun oldum!",
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
  <div className="flex justify-center items-center text-center w-full sm:mb-[3rem] lg:whitespace-nowrap lg:pb-6">
  <div>
  </div>
  
  
  <div
    key={index}
    className="text-purple-500 font-pix 
    sm:text-[1rem] 
    md:text-[2rem] 
    lg:text-[2.5rem] 
    lg:whitespace-nowrap"
    style={{
      animation: "fadeInOut 6s ease-in-out infinite",
      opacity: 0,
    }}
  >
    {greetings[index]}
  </div>

      
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
