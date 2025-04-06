import React, { useEffect, useRef } from "react";
import IonIcon from "@reacticons/ionicons";

const BoardSoftware = () => {
    const iconRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("icon-visible");
                        entry.target.classList.remove("icon-hidden");
                    } else {
                        entry.target.classList.remove("icon-visible");
                        entry.target.classList.add("icon-hidden");
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
                    .icon-hidden {
                        opacity: 0 !important;
                        transform: translateX(-20px) !important;
                    }
                `}
            </style>
            {/* software used list */}
            <h1 className="pl-2 justify-center text-center 
            underline decoration-dashed text-purple-400
            sm:text-[1.7rem] sm:pb-[1rem] sm:w-[25rem]
            md:text-5xl md:ml-[0rem] md:pt-[5rem] md:w-[50rem] md:mb-[2rem]
            lp:text-[4rem] lp:w-[75rem] lp:justify-center lp:items-center
            lg:text-7xl lg:w-[60rem] lg:mb-[5rem] lg:mt-[2rem] lg:ml-[3rem]">
                Software Used:
            </h1>
            <ul className="flex justify-center space-x-8 pl-[12.5rem]
            sm:ml-[0.5rem]
            md:ml-[-7rem] md:justify-center md:items-center md:pb-[4rem] md:w-[50rem]
            lp:items-center lp:justify-center lp:w-[75rem]
            lg:items-center lg:justify-center lg:w-[100rem] lg:pb-[5rem] lg:mt-[6rem] lg:ml-[-24rem]
            ">
                {/* adobe photoshop icon */}
                <li className="flex flex-col items-center icon" ref={(el) => iconRefs.current[0] = el}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                    className="
                    sm:w-[2.5rem] sm:h-[2.5rem] 
                    md:w-[6rem] md:h-[6rem] 
                    lg:w-[10rem] lg:h-[10rem]">
                    <rect width="24" height="24" fill="#001E36" rx="4" /> {/* Darker background for Photoshop */}
                    <text x="12" y="16" fill="#31A8FF" fontSize="12" fontFamily="Arial, sans-serif" fontWeight="bold" textAnchor="middle">Ps</text> {/* Photoshop color for text */}
                </svg>
                <span className="mt-2 text-center justify-center items-center
                sm:w-[6rem] sm:mt-3
                md:text-[2rem] md:w-[11rem]
                lp:text-[3rem] lp:w-[20rem]
                lg:text-[3.5rem] lg:pb-2 
                ">Adobe Photoshop</span>
                </li>

                {/* procreate icon */}
                <li className="flex flex-col items-center icon" ref={(el) => iconRefs.current[1] = el}>
                    <IonIcon 
                        className="text-purple-300 sm:text-[2.5rem]  
                        sm:px-2 
                        md:text-[6rem] md:px-3 
                        lg:text-[12rem] lg:px-6 lg:mb-[2rem]
                        lp:text-[7.5rem] lp:px-4 lp:mb-[0.6rem]" 
                        name="brush-outline" 
                    />
                    <span className="mt-2 text-center 
                    md:text-[2rem]
                    lp:text-[3rem] lp:mt-[-1rem] 
                    lg:text-[3.5rem] lg:pb-10
                    ">Procreate</span>
                </li>

                <li className="flex flex-col items-center icon
                lp:pb-2
                " ref={(el) => iconRefs.current[3] = el}>
                    <IonIcon 
                        className="text-purple-300 
                        sm:text-[2.5rem] sm:px-2 
                        md:text-[6rem] md:px-3 
                        lg:text-[12rem] lg:px-6 
                        lp:text-[7.5rem]" 
                        name="image-outline" 
                    />
                    <span className="mt-2 text-center justify-center items-center
                    sm:w-[6.5rem]
                    md:text-[2rem] md:w-[13rem]
                    lp:text-[3rem] lp:w-[20rem]
                    lg:text-[3.5rem] lg:pb-6 lg:w-[22rem]
                    ">Adobe Stock Images</span>
                </li>

                

            </ul>
        </div>
    );
};

export default BoardSoftware;
