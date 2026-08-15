import React, { useEffect, useRef } from "react";
import IonIcon from "@reacticons/ionicons";

const SoftwareUsed = () => {
    const iconRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("icon-visible");
                        entry.target.classList.remove("icon-hidden");
                    }
                });
            },
            { threshold: 0.1 }
        );

        iconRefs.current.forEach((icon) => {
            if (icon) observer.observe(icon);
        });

        return () => {
            iconRefs.current.forEach((icon) => {
                if (icon) observer.unobserve(icon);
            });
        };
    }, []);

    return (
        <div>
            <style>
                {`
                    .icon {
                        opacity: 0;
                        transform: translateX(20px);
                        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
                    }
                    .icon-visible {
                        opacity: 1 !important;
                        transform: translateX(0) !important;
                    }
                `}
            </style>

            <h1 className="flex justify-self-center underline decoration-dashed text-blue-400 text-center justify-center
          sm:text-[2rem] sm:pb-[1rem] sm:w-[18rem] 
          md:text-[4rem] md:w-[45rem] md:mx-auto md:pt-[5rem]
          lp:text-[4rem] lp:w-[33rem] lp:pt-[2rem]
          lg:text-[5rem] lg:w-[61rem] lg:pb-[2rem]">
                Software Used:
            </h1>

            <ul className="grid justify-self-center
                grid-cols-2 gap-y-8 justify-items-center
                sm:grid-cols-2 sm:w-[20rem] sm:pb-[2rem]
                md:grid-cols-3 md:w-[57rem]
                lp:grid-cols-3 lp:w-[75rem] 
                lg:grid-cols-3 lg:w-[77rem]
            ">
                {/* Adobe Illustrator */}
                <li className="flex flex-col items-center icon sm:w-[8rem] md:w-[8rem] lp:w-auto" ref={(el) => iconRefs.current[0] = el}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                        className="sm:w-[2.5rem] sm:h-[2.5rem] md:w-[6rem] md:h-[6rem] lg:w-[10rem] lg:h-[10rem]">
                        <rect width="24" height="24" fill="#330000" rx="4" />
                        <text x="12" y="16" fill="#FF9A01" fontSize="12" fontFamily="Arial, sans-serif" fontWeight="bold" textAnchor="middle">Ai</text>
                    </svg>
                    <span className="mt-2 text-center font-vcr  text-purple-700
                    sm:text-[.9rem] sm:w-[10rem]
                    md:text-[1.5rem] md:w-[15rem]
                    lp:text-[1.5rem] lp:mt-[1.5rem] lp:w-[15rem]
                    lg:text-[2.5rem] lg:pb-6 lg:w-[25rem]
                    ">
                        Adobe Illustrator
                    </span>
                </li>

                {/* Graphic Design */}
                <li className="flex flex-col items-center icon sm:w-[8rem] md:w-[8rem] lp:w-auto" ref={(el) => iconRefs.current[1] = el}>
                    <IonIcon 
                        className="text-blue-300 sm:text-[2.5rem] 
                        sm:px-2 
                        md:text-[6rem] md:px-3 
                        lg:text-[12rem] lg:px-6 lg:pb-[-1rem] 
                        lp:text-[7.5rem] lp:px-4 lp:mb-[3rem]"
                        name="color-palette-outline" 
                    />
                    <span className="mt-2 text-center font-vcr text-purple-700
                    sm:text-[.9rem] sm:w-[8rem]
                    md:text-[1.6rem] md:w-[15rem]
                    lp:text-[1.5rem] lp:mt-[-3rem] lp:w-[13rem]
                    lg:text-[2.5rem] lg:mb-[2rem] lg:w-[21rem]
                    ">
                        Graphic Design
                    </span>
                </li>

                {/* Procreate */}
                <li className="flex flex-col items-center icon sm:w-[8rem] md:w-[8rem] lp:w-auto" ref={(el) => iconRefs.current[2] = el}>
                    <IonIcon 
                        className="text-blue-300 sm:text-[2.5rem]  
                        sm:px-2 
                        md:text-[6rem] md:px-3 
                        lg:text-[12rem] lg:px-6 lg:pb-[-1rem]
                        lp:text-[7.5rem] lp:px-4 lp:mb-8" 
                        name="brush-outline" 
                    />
                    <span className="mt-2 text-center font-vcr text-purple-700
                    sm:text-[.9rem] sm:w-[8rem]
                    md:text-[1.5rem] md:w-[8rem]
                    lp:text-[1.5rem] lp:mt-[-2rem] 
                    lg:text-[2.5rem] lg:pb-8 lg:w-[15rem]
                    ">
                        Procreate
                    </span>
                </li>

                {/* Adobe Stock Images */}
                <li className="flex flex-col items-center icon sm:w-[8rem] md:w-[8rem] lp:w-auto" ref={(el) => iconRefs.current[3] = el}>
                    <IonIcon 
                        className="text-blue-300 sm:text-[2.5rem]   
                        sm:px-2 
                        md:text-[6rem] md:px-3 
                        lg:text-[12rem] lg:px-6 lg:pb-[1rem]
                        lp:text-[7.5rem] lp:pb-[1rem]" 
                        name="image-outline" 
                    />
                    <span className="mt-2 text-center font-vcr text-purple-700
                    sm:text-[.9rem] sm:w-[9rem]
                    md:text-[1.5rem] md:w-[22rem]
                    lp:text-[1.5rem] lp:mt-[-1rem] lp:w-[16rem]
                    lg:text-[2.5rem] lg:pb-[2rem] lg:w-[27rem]
                    ">
                        Adobe Stock Images
                    </span>
                </li>
            </ul>
        </div>
    );
};

export default SoftwareUsed;