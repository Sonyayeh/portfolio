import React from "react";

const BcitiFig = () => {
    return (
        <div>
            <h5 className=" underline text-purple-400 
            sm:text-[1.5rem] sm:justify-center sm:items-center sm:text-center sm:w-[20rem] sm:ml-[2.5rem]
            md:text-[3rem] md:w-[48rem] md:pb-[2rem]  md:items-center md:text-center
            lp:text-[5rem] lp:w-[54rem] lp:mt-[5rem] lp:pb-[3rem] lp:justify-center lp:items-center lp:text-center 
            lg:text-7xl lg:w-[60rem] lg:mb-[5rem] lg:mt-[2rem] lg:justify-center lg:items-center lg:text-center">
                Figma File:
            </h5>
            <iframe
                style={{
                    border: "1px solid rgba(0, 0, 0, 0.1)",
                }}
                src="https://embed.figma.com/design/QZRxtL2jsXw5Q4ojCa3RyZ/MyBcit-edit?node-id=2-3&embed-host=share"
                allowFullScreen
                title="Figma Embed"
                className="top-0 left-0 w-full max-w-[820px] mx-auto 
                sm:w-[20rem] sm:ml-[3rem] sm:h-[20rem]
                md:w-[45rem] md:h-[38rem] md:ml-[2rem] 
                lp:ml-[13rem] lp:mt-6
                lg:w-[820px] lg:ml-[7rem]"
            ></iframe>

           <h3 className="flex text-emerald-500 
                sm:pt-[1rem] sm:text-sm sm:ml-[4rem] sm:w-[20rem]
                md:text-[1.5rem] md:w-[45rem] md:pt-[2rem] mdLtext-center md:justify-center md:items-center
                lp:text-[2rem] lp:w-[65rem] lp:leading-[3rem] lp:justify-center lp:ml-[4rem]
                lg:mt-[2rem] lg:w-[80rem] lg:ml-[-2rem] lg:text-[3rem] lg:leading-[4rem] ">
                This is the Figma file. It has three pages: Lo-Fi, Hi-Fi and style guide. It is fully prototyped in Hi-Fi, please do play around with it to experience the app yourself!
            </h3>

             {/* added a line for separate sections */}
             <div className="border-t-2 border-purple-500 my-10 
               sm:w-[20rem] sm:ml-[3rem]
               md:w-[40rem] md:ml-[4rem] 
               lp:w-[65rem]
               lg:w-[100rem] lg:ml-[-16rem] lg:mb-[8rem]
               "></div>

            <h5 className=" underline text-purple-400 
            sm:text-[1.5rem] sm:justify-center sm:items-center sm:text-center sm:w-[20rem] sm:ml-[2.5rem]
            md:text-[3rem] md:w-[48rem] md:pb-[2rem]  md:items-center md:text-center
            lp:text-[5rem] lp:w-[54rem] lp:mt-[5rem] lp:pb-[3rem] lp:justify-center lp:items-center lp:text-center 
            lg:text-7xl lg:w-[60rem] lg:mb-[5rem] lg:mt-[2rem] lg:justify-center lg:items-center lg:text-center">
                Prototype:
            </h5>
            <iframe
            style={{
                border: "1px solid rgba(0, 0, 0, 0.1)",
            }}
            src="https://embed.figma.com/proto/QZRxtL2jsXw5Q4ojCa3RyZ/MyBcit-edit?page-id=2%3A3&node-id=134-3101&node-type=canvas&viewport=-255%2C344%2C0.11&scaling=min-zoom&content-scaling=fixed&embed-host=share"
            allowFullScreen
            title="Figma Embed"
            className="top-0 left-0 w-full max-w-[820px] mx-auto 
            sm:w-[20rem] sm:ml-[3rem] sm:h-[20rem]
            md:w-[45rem] md:h-[38rem] md:ml-5
            lp:ml-[13rem] lp:mt-6
            lg:w-[820px] lg:ml-[7rem]"
        ></iframe>

                <h3 className="flex text-emerald-500 
                sm:pt-[1rem] sm:text-sm sm:ml-[4rem] sm:w-[20rem]
                md:text-xl md:ml-[5rem] md:w-[40rem] md:pt-[2rem]
                lp:text-[2rem] lp:w-[70rem] lp:leading-[3rem] lp:justify-center lp:ml-[6rem]
                lg:mt-[2rem] lg:w-[80rem] lg:ml-[-2rem] lg:text-[3rem] lg:leading-[4rem]">
                This is the project's prototype screen. It shows how the project looks like if it is a real web page. This section demonstrates all of the implemented prototypes and styles based on the Hi Fi design. 
            </h3>

        </div>
    );
};

export default BcitiFig;
