import React from "react";
import { Link } from "react-router-dom";
import projectData from "../data/project.json";  // Import the JSON data

const BcitProject = () => {
    // Find the project with id 1
    const project = projectData.find((proj) => proj.id === 3);

    if (!project) {
        return <div>Project not found</div>;  // Handle case where project is not found
    }

    return (
        <div className="w-full relative mt-[30rem] sm:mt-[5rem] sm:px-0 sm:mx-auto lg:ml-[5rem] lg:pr-[7rem]">

    <div className="text-start w-full">
    {/* purple heading */}
   <div className="bg-purple-300 px-4 flex justify-between items-center w-full">
        <h5 className="text-white text-3xl 
        sm:text-[2rem] sm:p-2
        md:text-6xl md:py-3 
        lp:text-[4rem] 
        lg:text-[4rem] ">Project</h5>
    </div>

    {/* White background tab bar */}
    <div className="bg-purple-300 p-4 pt-0 hover:cursor-hover">
        <ul className="flex items-center space-x-1 bg-white w-full px-2 justify-start">
            {['DISC', 'OPTION', 'VIEW', 'HELP'].map((item, index) => (
                <li key={index} className="text-purple-200 text-lg hover:text-orange-300 
                sm:text-[1.5rem] sm:py-1 sm:p-2
                md:text-[3rem] md:py-5
                lp:text-[3rem] 
                lg:text-[3.5rem] font-semibold">{item}</li>
            ))}
        </ul>
    </div>
    </div>


            {/* Project box with border */}
            <div className="w-full p-0 sm:p-0 flex flex-col border-solid border-x-[1rem] border-b-[1rem] 
            border-purple-300 md:p-3">
                {/* Content Container */}
                <div className="space-y-4 flex flex-col py-2 px-4  w-full lg:flex-row ">
                    {/* Title and Description Section */}
                    <div className="w-full lg:w-1/2 lg:text-left">
                        <h5 className="text-purple-400 pb-2 text-2xl 
                        sm:text-[1.5rem] sm:text-start sm:pt-5 
                        md:text-[3rem] md:pt-[3rem] md:w-[45rem] 
                        lp:text-[4rem] lp:w-[55rem] lp:pb-[3rem]
                        lg:text-[4rem] lg:pt-[2rem] lg:absolute lg:w-[60rem]">
                            {project.title}
                        </h5>
                        <h4 className="text-lg leading-6 
                        sm:text-[1rem] sm:pt-2 
                        md:text-[1.8rem] md:pt-[2rem] md:pr-[10rem] md:w-[40rem] md:leading-[2.5rem]
                        lp:w-[47rem]
                        lg:text-[2rem] lg:mt-[6rem] lg:w-[45rem]">
                            {project.description}
                        </h4>
                        
                        {/* Software used section */}
                      <div className="font-Dos flex flex-col items-start justify-start w-full gap-2 
                        sm:mt-[2rem] sm:flex-row sm:flex-wrap sm:pb-2
                        md:flex-row md:flex-wrap md:items-center md:gap-3 md:py-[2rem]
                        lg:w-[55rem] lg:mt-[3rem] lg:pb-[3rem] lg:flex-row">
                            
                            <h5 className="text-purple-400 pb-2 text-2xl 
                        sm:text-[1.5rem] sm:text-start
                        md:text-[3rem] md:w-[45rem] md:pb-[2rem]
                        lp:text-[4rem] lp:w-[55rem] lp:pb-[3rem]
                        lg:text-[4rem] lg:pb-[10rem]lg:absolute lg:w-[60rem]">
                            Software Used:
                        </h5>

                            {[project.chip1, project.chip2, project.chip3, project.chip4].map((chip, index) => (
                                <span key={index} className="bg-orange-200 text-purple-900 px-4 py-2 rounded-full text-sm hover:bg-purple-400 hover:text-white duration-300
                                sm:text-[.8rem] 
                                md:text-[2rem] md:px-6 md:py-4 
                                lp:text-[1.5rem] 
                                lg:text-[1.5rem]">
                                    {chip}
                                </span>
                            ))}
                        </div>
                    </div>
                    {/* Image Section */}
                    <div className="flex justify-center w-full lg:w-1/2 lg:ml-[-16rem] lg:pt-[50rem]">
                        <img
                            src={project.imageurl}
                            alt="Project Preview"
                            className="w-full h-auto object-contain rounded-xl 
                            sm:w-[20rem] sm:h-[20rem]
                            md:w-[25rem] md:h-[40rem] md:ml-[30rem] md:mt-[-55rem] 
                            lp:w-[33rem] lp:h-[30rem] lp:mt-[-45rem] lp:mr-[-10rem]
                            lg:w-[30rem] lg:h-[35rem] lg:mt-[-45rem] lg:ml-[25rem]
                            "
                        />
                    </div>
                </div>

                {/* View More Button */}
                <div className="flex justify-center
                lp:mb-[-2rem]
                ">
                    <Link to="/bcit">
                       <button className="font-Dos px-6 py-3 bg-purple-300 text-white rounded-lg shadow-md hover:bg-orange-200 hover:text-purple-900 focus:outline-none focus:ring-2 focus:ring-purple-300 transition-colors duration-300 
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

export default BcitProject;