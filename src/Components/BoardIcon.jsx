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
            <h1 className="flex justify-self-center justify-center
                underline decoration-dashed text-purple-400
                sm:text-[1.7rem] sm:pb-[2rem] sm:w-[23rem] 
                md:text-[3rem] md:pt-[1rem] md:w-[60rem] md:mb-[2rem]
                lp:text-[2.8rem] lp:w-[75rem] lp:justify-center lp:items-center lp:pb-[2rem] lp:pt-[3rem]
                lg:text-[3rem] lg:w-[70rem]">
                Software Used:
            </h1>
             <ul className="grid justify-self-center
                grid-cols-2 gap-y-8 justify-items-center
                sm:grid-cols-2 sm:w-[22rem] sm:pb-[2rem]
                md:grid-cols-3 md:w-[57rem]
                lp:grid-cols-3 lp:w-[50rem] 
                lg:grid-cols-3 lg:w-[65rem]
            ">
                {/* Adobe Photoshop */}
                <li className="flex flex-col items-center icon" ref={(el) => iconRefs.current[2] = el}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                        className="sm:w-[2.5rem] sm:h-[2.5rem] md:w-[6rem] md:h-[6rem] lg:w-[10rem] lg:h-[7rem]">
                        <rect width="24" height="24" fill="#001E36" rx="4" />
                        <text x="12" y="16" fill="#31A8FF" fontSize="12" fontFamily="Arial, sans-serif" fontWeight="bold" textAnchor="middle">Ps</text>
                    </svg>
                    <span className="mt-2 text-center font-vcr text-purple-400
                    sm:text-[.9rem] sm:w-[10rem]
                    md:text-[1.5rem] md:w-[22rem] md:pt-[2rem]
                    lp:text-[1.5rem] lp:w-[22rem]
                    lg:text-[2rem] lg:w-[18rem] lg:mt-[3rem]
                    ">Adobe Photoshop</span>
                </li>

                {/* Procreate */}
                <li className="flex flex-col items-center icon" ref={(el) => iconRefs.current[4] = el}>
                   <IonIcon
            className="text-orange-400 hover:text-purple-300 
            sm:text-[2.5rem] sm:px-2
            md:text-[6rem] md:px-3
            lg:text-[7rem] lg:px-6 lg:pb-[1rem] lg:pt-[1.5rem]
            lp:text-[7.5rem] lp:px-4 lp:mb-8"
            name="brush-outline"
          />
          <span
            className="mt-2 text-center font-vcr text-purple-400
            sm:text-[.9rem] sm:w-[8rem]
            md:text-[1.5rem] md:w-[22rem] 
            lp:text-[1.5rem] lp:w-[9rem]
            lg:text-[2rem] lg:w-[18rem]
                    ">Procreate</span>
                </li>

               {/* Adobe Stock Images */}
                <li className="flex flex-col items-center icon lp:pb-2" ref={(el) => iconRefs.current[3] = el}>
                    <IonIcon
                    className="text-orange-400 hover:text-purple-300 
                    sm:text-[2.5rem] sm:px-2
                    md:text-[6rem] md:px-3
                    lg:text-[7rem] lg:px-6 lg:pb-[2.5rem]
                    lp:text-[7.5rem]"
                    name="image-outline"
                />
                <span
                    className="mt-2 text-center font-vcr text-purple-400
                    sm:text-[.9rem] sm:w-[10rem]
                    md:text-[1.5rem] md:w-[22rem] md:pt-[2rem]
                    lp:text-[1.5rem] lp:w-[22rem]
                    lg:text-[2rem] lg:w-[20rem]
                            ">Adobe Stock Images</span>
                </li>

                

            </ul>
        </div>
    );
};

export default BoardSoftware;
