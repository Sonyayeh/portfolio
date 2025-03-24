import React from "react";

const BcitiFig = () => {
    return (
        <div>
            <h5 className="sm:text-xl underline text-purple-400 
            sm:ml-[9rem] sm:w-[10rem] sm:pb-[2rem]
            lg:text-[3rem]">
                Figma File:
            </h5>
            <iframe
                style={{
                    border: "1px solid rgba(0, 0, 0, 0.1)",
                    height: "300px",
                }}
                src="https://embed.figma.com/design/QZRxtL2jsXw5Q4ojCa3RyZ/MyBcit-edit?node-id=2-3&embed-host=share"
                allowFullScreen
                title="Figma Embed"
                className="top-0 left-0 w-full h-[450px] 
                sm:w-[20rem] sm:ml-[3rem]
                md:w-full 
                lg:h-[600px]"
            ></iframe>
            <h3 className="flex text-emerald-500
                sm:pt-[1rem] sm:text-sm sm:ml-[4rem] sm:w-[20rem]
                md:text-xl md:ml-[5rem]
                lg:mt-[-2rem] lg:ml-[6rem] lg:text-2xl">
                This is the Figma file. It has three pages: Lo-Fi, Hi-Fi and style guide. It is fully prototyped in Hi-Fi, please do play around with it to experience the app yourself!
            </h3>

             {/* added a line for separate sections */}
             <div className="border-t-2 border-purple-500 my-10 
               sm:w-[20rem] sm:ml-[3rem]
               md:w-[40rem] md:ml-[4rem] 
               lp:w-[65rem]
               lg:w-[100rem] lg:ml-[-16rem] lg:mb-[8rem]
               "></div>

            <h5 className="sm:text-xl underline text-purple-400 
            sm:ml-[9rem] sm:w-[10rem] sm:pb-[2rem] 
            lg:text-[3rem]">
                Prototype:
            </h5>
            <iframe
                style={{
                    border: "1px solid rgba(0, 0, 0, 0.1)",
                    height: "300px",
                }}
                src="https://embed.figma.com/proto/QZRxtL2jsXw5Q4ojCa3RyZ/MyBcit-edit?page-id=2%3A3&node-id=134-3101&node-type=canvas&viewport=-255%2C344%2C0.11&scaling=min-zoom&content-scaling=fixed&embed-host=share"
                allowFullScreen
                title="Figma Embed"
                className="top-0 left-0 w-full h-[450px] 
                sm:w-[20rem] sm:ml-[3rem]
                md:w-full 
                lg:h-[600px]"
            ></iframe>
            <h3 className="flex text-emerald-500
                sm:pt-[1rem] sm:text-sm sm:ml-[4rem] sm:w-[20rem]
                md:text-xl md:ml-[5rem]
                lg:mt-[-2rem] lg:ml-[6rem] lg:text-2xl">
                This is the project's prototype screen. It shows how the project looks like if it is a real web page.
            </h3>

        </div>
    );
};

export default BcitiFig;
