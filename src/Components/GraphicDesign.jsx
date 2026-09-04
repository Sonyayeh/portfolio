// before I get confused, this is the beach volleyball tournament project container!!!!!!!!
// DON'T FORGET AGAIN YOU GOLDFISH BRAIN
import React from "react";
import { Link } from "react-router-dom";

// I have each project information imported from project.json, I will make my comments there as well!
import projectData from "../data/project.json";  // Import the JSON data

const GraphicBox = () => {
    // this line is to go into the project data in project.json and find the 
    // data that has the project id of 1, and then being brought into here
    const project = projectData.find((proj) => proj.id === 1);

    if (!project) {
        return <div>Project not found</div>;  // Handle case where project is not found
    }

    return (
        // I think i commented about this section so many times already 
        <div className="w-full relative mt-[30rem] 
        sm:mt-[10rem] sm:px-0  sm:mx-auto
        md:ml-[0rem]
        lg:justify-self-center ">

    <div className="text-start w-full">

         <h1 className="text-2xl justify-self-center text-center items-center
                sm:text-[2rem] sm:pb-[2rem] sm:pt-[2rem] 
                md:text-[4rem] md:pl-[2rem] md:pt-[2rem] 
                lp:text-[4rem] lp:pb-[2rem] lp:pt-[2rem]
                lg:text-[4rem] lg:w-[70rem]">
                    Graphic Design:
                </h1>
    {/* blue heading */}
   <div className="bg-blue-300 px-4 flex justify-between items-center w-full
   sm:w-[24rem] sm:justify-self-center
   md:w-[49rem]
    lp:w-[60rem] lp:justify-self-center
   ">
        <h5 className="text-white text-3xl 
        sm:text-[2rem] sm:p-2
        md:text-6xl md:py-3 
        lp:text-[2.8rem] 
        lg:text-[3rem] ">Project</h5>
    </div>

    {/* White background tab bar */}
    <div className="bg-blue-300 p-4 pt-0 hover:cursor-hover
    sm:w-[24rem] sm:justify-self-center
    md:w-[49rem]
    lp:w-[60rem] lp:justify-self-center
    ">
        <ul className="flex items-center space-x-1 bg-white w-full px-2 justify-start">
            {['DISC', 'OPTION', 'VIEW', 'HELP'].map((item, index) => (
                <li key={index} className="text-blue-200 text-lg hover:text-orange-300 
                sm:text-[1.5rem] sm:py-1 sm:p-2
                md:text-[3rem] md:py-5
                lp:text-[2.5rem] 
                lg:text-[3rem] font-semibold">{item}</li>
            ))}
        </ul>
    </div>
    </div>

            {/* Project box with border */}
            <div className="w-full p-0 sm:p-0 flex flex-col border-solid border-x-[1rem] border-b-[1rem] border-blue-300
            sm:w-[24rem] sm:justify-self-center
            md:w-[49rem] md:p-3
            lp:w-[60rem] lp:justify-self-center
            ">

                {/* Content Container */}
                <div className="space-y-4 flex flex-col py-2 px-4 
                sm:px-7 w-full 
                lg:flex-row">

                    {/* Title and Description Section */}
                    <div className="w-full lg:w-1/2 lg:text-left">
                        <h5 className="text-blue-400 pb-2 text-2xl 
                        sm:text-[1.5rem] sm:text-start sm:pt-5 
                        md:text-[3rem] md:pt-[2rem] md:w-[45rem] md:leading-[3rem]
                        lp:text-[3rem] lp:w-[30rem]
                        lg:text-[3rem] lg:pt-[2rem] lg:absolute lg:w-[58rem]">
                            {project.title}
                        </h5>
                        <h4 className="text-lg leading-6 
                        sm:text-[1rem] sm:pt-2 
                        md:text-[1.3rem] md:pt-[2rem] md:pr-[10rem] md:w-[36rem] md:leading-[2rem]
                        lp:text-[1.5rem] lp:leading-[2.5rem] lp:w-[43rem]
                        lg:text-[1.5rem] lg:mt-[8rem] lg:w-[41rem]">
                            {project.description}
                        </h4>

                        {/* Software used section */}
                      <div className="font-Dos flex flex-col items-start justify-start w-full gap-2 
                        sm:mt-[2rem] sm:flex-row sm:flex-wrap sm:pb-2
                        md:flex-row md:flex-wrap md:items-center md:gap-3 md:py-[2rem]
                        lp:w-[52rem]
                        lg:w-[52rem] lg:mt-[6rem] lg:pb-[3rem] lg:flex-row">
                            
                            <h5 className="text-blue-400 pb-2 text-2xl 
                        sm:text-[1.5rem] sm:text-start
                        md:text-[3rem] md:w-[45rem] md:pb-[2rem]
                        lp:text-[3rem] lp:w-[55rem] lp:pb-[1rem]
                        lg:text-[3rem] lg:mb-[12rem] lg:absolute lg:w-[60rem]">
                            Software Used:
                        </h5>

                        {/* Software used section */}
                           <div className="flex flex-wrap gap-3">
                             {[project.chip1, project.chip2, project.chip3].map((chip, index) => (
                                <span key={index} className="bg-green-200 text-blue-900 px-4 py-2 rounded-full text-sm hover:bg-blue-400 hover:text-white duration-300
                                sm:text-[.8rem] 
                                md:text-[1.2rem] md:px-6 md:py-4 
                                lp:text-[1.5rem] 
                                lg:text-[1.5rem]">
                                    {chip}
                                </span>
                            ))}
                           </div>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="flex justify-center w-full lg:w-1/2 lg:ml-[-14rem] lg:pt-[43rem]">
                        <img
                            src={project.imageurl} 
                            className="w-full h-auto object-contain rounded-xl
                            sm:w-[20rem] sm:h-[20rem] sm:pb-[2rem]
                            md:w-[25rem] md:h-[28rem] md:ml-[27rem] md:mt-[-41rem]
                            lp:h-[25rem] lp:w-[20rem] lp:max-h-[50rem] lp:mt-[-38rem] lp:ml-[33rem]
                            lg:w-[16rem] lg:h-[26rem] lg:mt-[-37rem] lg:ml-[34rem]"
                        />
                    </div>

                </div>

                {/* View More Button */}
                 <div className="flex justify-center
                                                lp:mb-[2rem]
                                                ">
                                                    <Link to="/beachball">
                                                       <button className="font-Dos px-6 py-3 bg-blue-300 text-white rounded-lg shadow-md hover:bg-green-200 hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors duration-300 
                                                        sm:mb-[2rem] sm:text-[1rem]
                                                        md:mb-[2rem] md:text-[1.5rem]
                                                        lp:text-[1.5rem] lp:mt-[2rem]
                                                        lg:mt-[1rem]"
                                                        onClick={() => window.scrollTo({ top: 0 })}
                                                        >
                                                        View More
                                                        </button>
                                                    </Link>
                </div>

            </div>
            
        </div>
    );
}

export default GraphicBox;