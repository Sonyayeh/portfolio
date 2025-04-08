import React from "react";

const BoardFig = () => {
    return (
        <div>
            <h5 className=" underline text-purple-400 
            sm:text-[1.5rem] sm:justify-center sm:items-center sm:text-center sm:w-[20rem] sm:ml-[2.5rem] sm:mt-[-2rem]
            md:text-[3rem] md:w-[43rem] md:pb-[2rem]  md:items-center md:text-center md:justify-center
            lp:text-[5rem] lp:w-[65rem] lp:pb-[3rem] lp:justify-center lp:items-center lp:text-center 
            lg:text-7xl lg:w-[60rem] lg:mb-[5rem] lg:mt-[2rem] lg:justify-center lg:items-center lg:text-center">
                Figma File:
            </h5>
            <iframe
                style={{
                    border: "1px solid rgba(0, 0, 0, 0.1)",
                }}
                src="https://embed.figma.com/design/1gCrT0CT3cuodCsgmVOBvB/Broadway-Boutique?node-id=0-1&embed-host=share"
                allowFullScreen
                title="Figma Embed"
                className="top-0 left-0 w-full h-[450px] 
                sm:w-[20rem] sm:ml-[3rem]
                md:w-[41rem]
                lp:w-[55rem] lp:ml-[8rem]
                lg:h-[600px] lg:ml-[5rem]"
            ></iframe>
             <h3 className="flex text-emerald-500 
                sm:pt-[1rem] sm:text-sm sm:ml-[4rem] sm:w-[20rem]
                md:text-xl md:w-[50rem] md:pt-[2rem]
                lp:text-[2rem] lp:w-[70rem] lp:leading-[3rem] lp:justify-center lp:ml-[6rem]
                lg:mt-[2rem] lg:w-[100rem] lg:ml-[-14rem] lg:text-[3rem] lg:leading-[4rem]">
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
            sm:text-[1.5rem] sm:justify-center sm:items-center sm:text-center sm:w-[20rem] sm:ml-[2.5rem] sm:mt-[-2rem]
            md:text-[3rem] md:w-[41rem] md:pb-[2rem]  md:items-center md:text-center
            lp:text-[5rem] lp:w-[66rem] lp:pb-[3rem] lp:justify-center lp:items-center lp:text-center 
            lg:text-7xl lg:w-[60rem] lg:ml-[2rme] lg:justify-center lg:items-center lg:text-center">
                Prototype:
            </h5>
            <iframe
                style={{
                    border: "1px solid rgba(0, 0, 0, 0.1)",
                }}
                src="https://embed.figma.com/proto/1gCrT0CT3cuodCsgmVOBvB/Broadway-Boutique?page-id=0%3A1&node-id=35-75&p=f&viewport=1686%2C205%2C0.08&scaling=scale-down&content-scaling=fixed&starting-point-node-id=35%3A75&embed-host=share"
                allowFullScreen
                title="Figma Embed"
                className="top-0 left-0 w-full h-[450px] 
                sm:w-[10rem] sm:ml-[7.5rem] sm:h-[400px]
                md:w-[30rem] md:h-[50rem]
                lp:h-[600px] lp:w-[50rem] lp:ml-[10rem]
                lg:h-[70rem] lg:ml-[7rem]"
            ></iframe>
             <h3 className="flex text-emerald-500 
                sm:pt-[1rem] sm:text-sm sm:ml-[4rem] sm:w-[20rem]
                md:text-xl md:w-[40rem] md:pt-[2rem]
                lp:text-[2rem] lp:w-[70rem] lp:leading-[3rem] lp:justify-center lp:ml-[6rem]
                lg:mt-[2rem] lg:w-[90rem] lg:ml-[-10rem] lg:text-[3rem] lg:leading-[4rem]">
                This is the project's prototype screen. It shows how the project looks like if it is a real web page.
            </h3>

        </div>
    );
};

export default BoardFig;
