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
                lg:text-[3rem] lg:w-[70rem] lg:pt-[5rem] lg:pb-[3rem]">
                Software Used:
            </h1>
             <ul className="grid justify-self-center
                grid-cols-2 gap-y-8 justify-items-center
                sm:grid-cols-2 sm:w-[22rem] sm:pb-[2rem] sm:gap-x-2
                md:grid-cols-3 md:w-[57rem] md:gap-x-6
                lp:grid-cols-4 lp:w-[50rem]
                lg:grid-cols-2 lg:w-[40rem] lg:gap-[3rem]
            ">
             {/* Android Studio */}
                <li className="flex flex-col items-center icon" ref={(el) => iconRefs.current[2] = el}>
                    <IonIcon
                        className="text-orange-400 hover:text-purple-300 hover:cursor-pointer
                        sm:text-[2.5rem] sm:px-2
                        md:text-[6rem] md:px-3
                        lp:text-[5rem] lp:px-[2rem]
                        lg:text-[7rem] lg:px-6 lg:pb-[1.5rem]"
                        name="logo-android"
                    />
                    <span
                        className="mt-2 text-center font-vcr text-purple-400
                        sm:text-[.9rem] sm:w-[8rem]
                        md:text-[1.5rem] md:w-[22rem] md:pt-[2rem]
                        lp:text-[1rem] lp:w-[9rem] lp:pt-[2.5rem]
                        lg:text-[1.5rem] lg:w-[13rem]"
                    >
                    Android Studio</span>
                </li>

                 {/* Figma */}
                <li className="flex flex-col items-center icon" ref={(el) => iconRefs.current[5] = el}>
                    <IonIcon
                        className="text-orange-400 hover:text-purple-300 hover:cursor-pointer
                        sm:text-[2.5rem] sm:px-2
                        md:text-[6rem] md:px-3
                        lp:text-[5rem] lp:px-[2rem]
                        lg:text-[7rem] lg:px-6 lg:pb-[1.5rem]"
                        name="logo-figma"
                    />
                    <span
                        className="mt-2 text-center font-vcr text-purple-400
                        sm:text-[.9rem] sm:w-[8rem]
                        md:text-[1.5rem] md:w-[22rem] md:pt-[2rem]
                        lp:text-[1rem] lp:w-[9rem] lp:pt-[2.5rem]
                        lg:text-[1.5rem] lg:w-[10rem]"
                    >
                    Figma</span>
                    </li>

                {/* Procreate */}
                <li className="flex flex-col items-center icon" ref={(el) => iconRefs.current[4] = el}>
                   <IonIcon
            className="text-orange-400 hover:text-purple-300 
            sm:text-[2.5rem] sm:px-2
            md:text-[6rem] md:px-3
            lg:text-[7rem] lg:pb-[1rem]
            lp:text-[5rem] lp:px-4 lp:mb-5"
            name="brush-outline"
          />
          <span
            className="text-center font-vcr text-purple-400
            sm:text-[.9rem] sm:w-[8rem] sm:pt-[1.5rem]
            md:text-[1.5rem] md:w-[22rem] 
            lp:text-[1rem] lp:w-[9rem]
            lg:text-[1.5rem] lg:w-[10rem]
                    ">Procreate</span>
                </li>

               {/* Adobe Stock Images */}
                <li className="flex flex-col items-center icon lp:pb-2" ref={(el) => iconRefs.current[3] = el}>
                    <IonIcon
                    className="text-orange-400 hover:text-purple-300 
                    sm:text-[2.5rem] sm:px-2
                    md:text-[6rem] md:px-3
                    lg:text-[7rem] lg:px-6 lg:pb-[2rem]
                    lp:text-[5rem]"
                    name="image-outline"
                />
                <span
                    className="mt-2 text-center font-vcr text-purple-400
                    sm:text-[.9rem] sm:w-[10rem]
                    md:text-[1.5rem] md:w-[22rem] md:pt-[2rem]
                    lp:text-[1rem] lp:w-[11rem]
                    lg:text-[1.5rem] lg:w-[17rem]
                            ">Adobe Stock Images</span>
                </li>

                

            </ul>
        </div>
    );
};

export default BoardSoftware;
