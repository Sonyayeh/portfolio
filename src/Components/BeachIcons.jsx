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

            <h1 className="pl-2 justify-center text-center 
            underline decoration-dashed text-blue-400
            sm:text-[1.7rem] sm:pb-[1rem] sm:w-[25rem] sm:pt-[2rem]
            md:text-5xl md:ml-[2rem] md:pt-[5rem] md:w-[50rem] md:mb-[5rem]
            lp:text-[4rem] lp:w-[65rem] lp:items-center lp:ml-[3rem]
            lg:text-7xl lg:w-[60rem] lg:mb-[5rem] lg:mt-[2rem] lg:ml-[3rem]">
                Software Used:
            </h1>

            <ul className="flex justify-center space-x-8 pl-[12.5rem]
            sm:grid sm:grid-cols-2 sm:justify-items-center sm:gap-x-[2rem] sm:gap-y-[2rem] sm:space-x-0 sm:pl-0 sm:ml-[3rem] sm:w-[20rem] sm:pb-[2rem]
            md:grid md:grid-cols-2 md:justify-items-center md:gap-x-[8rem] md:gap-y-[5rem] md:space-x-0 md:pl-0 md:ml-[11rem] md:w-[30rem] md:pb-[4rem]
            lp:flex lp:w-[65rem] lp:ml-[3rem] lp:gap-[2rem]
            lg:items-center lg:w-[100rem] lg:pb-[5rem] lg:mt-[6rem] lg:ml-[-15rem] lg:gap-[4rem]
            ">
                {/* Adobe Illustrator */}
                <li className="flex flex-col items-center icon sm:w-[8rem] md:w-[8rem] lp:w-auto" ref={(el) => iconRefs.current[0] = el}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                        className="sm:w-[2.5rem] sm:h-[2.5rem] md:w-[6rem] md:h-[6rem] lg:w-[10rem] lg:h-[10rem]">
                        <rect width="24" height="24" fill="#330000" rx="4" />
                        <text x="12" y="16" fill="#FF9A01" fontSize="12" fontFamily="Arial, sans-serif" fontWeight="bold" textAnchor="middle">Ai</text>
                    </svg>
                    <span className="mt-2 text-center font-vcr  text-sky-700
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
                    <span className="mt-2 text-center font-vcr text-sky-700
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
                    <span className="mt-2 text-center font-vcr text-sky-700
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
                    <span className="mt-2 text-center font-vcr text-sky-700
                    sm:text-[.9rem] sm:w-[10rem]
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