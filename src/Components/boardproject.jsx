import React from "react";
import { Link } from "react-router-dom";
import projectData from "../data/project.json";  // Import the JSON data

const BoardProject = () => {
    // Find the project with id 4
    const project = projectData.find((proj) => proj.id === 4);

    if (!project) {
        return <div>Project not found</div>;  // Handle case where project is not found
    }

    return (
        <div className="w-full relative mt-[30rem] 
        sm:mt-[10rem] sm:px-0  sm:mx-auto sm:pb-[2rem]
        md:ml-[0rem]
       lg:ml-[5rem] lg:pr-[7rem] ">

            {/* Project Heading and Description */}
            <div className="text-start w-full">

                {/* Purple heading */}
                <div className="bg-purple-200 px-4 flex justify-between items-center w-full">
                    <h5 className="text-white text-3xl 
                    sm:text-3xl 
                    md:text-6xl 
                    lg:text-6xl">
                        Project
                    </h5>
                </div>

                {/* White background tab bar */}
                <div className="bg-purple-200 p-4 pt-0 hover:cursor-hover">
                    <ul className="flex gap-6 items-center space-x-1 bg-white w-full px-6 justify-start">
                        {/* List items with responsive font sizes */}
                        <li className="text-purple-200 text-lg 
                        hover:text-orange-300
                        sm:text-3xl 
                        md:text-6xl 
                        lg:text-7xl 
                        font-semibold">DISC</li>
                        <li className="text-purple-200 text-lg 
                        hover:text-orange-300
                        sm:text-3xl 
                        md:text-6xl 
                        lg:text-7xl 
                        font-semibold">OPTION</li>
                        <li className="text-purple-200 text-lg 
                        hover:text-orange-300
                        sm:text-3xl 
                        md:text-6xl 
                        lg:text-7xl 
                        font-semibold">VIEW</li>
                        <li className="text-purple-200 text-lg 
                        hover:text-orange-300
                        sm:text-3xl 
                        md:text-6xl 
                        lg:text-7xl 
                        font-semibold">HELP</li>
                    </ul>
                </div>
            </div>

            {/* Project box with border */}
            <div className="w-full p-0 sm:p-0 flex flex-col border-solid border-x-[1rem] border-b-[1rem] border-purple-200
            md:p-3">

                {/* Content Container */}
                <div className="space-y-4 flex flex-col py-2 px-4 
                sm:px-7 w-full 
                lg:flex-row">

                    {/* Title and Description Section */}
                    <div className="w-full lg:w-1/2 lg:text-left">
                        <h5 className="text-purple-400 pb-2 text-2xl 
                        sm:text-[1.5rem] sm:text-start sm:pt-5
                        md:text-[2.6rem] md:pt-5 md:ml-[-1rem] md:w-[59rem]
                        lg:text-[3rem] lg:pl-4 lg:pt-[4rem] lg:absolute lg:w-[60rem]">
                            {project.title}
                        </h5>
                        <h4 className="text-lg leading-6 
                        sm:text-[1rem] sm:pt-2  
                        md:text-3xl md:mt-[4.75rem] md:pl-1 md:pr-[10rem] md:w-[37rem]
                        lp:text-[2rem] lp:mt-[5rem]
                        lg:text-[2rem] lg:py-[6rem] lg:ml-[-1rem] lg:pr-[1rem] lg:w-[30rem]">
                            {project.description}
                        </h4>

                        {/* Software used section */}
                        <div className="font-Dos flex flex-col items-start justify-start w-full gap-2 sm:mt-[2rem] lg:w-[30rem] lg:mt-[-3rem]">
                        {[project.chip1, project.chip2, project.chip3,].map((chip, index) => (
                            <span key={index} className="bg-orange-200 text-purple-900 px-4 py-2 rounded-full text-sm sm:text-[1rem] md:text-lg lp:text-[1.5rem] lg:text-[1rem]">
                                {chip}
                            </span>
                        ))}
                    </div>
                    </div>

                    {/* Image Section */}
                    <div className="flex justify-center w-full lg:w-1/2 lg:ml-[-14rem] lg:pt-[58rem] ">
                        <img
                            src={project.imageurl} 
                            className="w-full h-auto object-contain rounded-xl
                            sm:w-[20rem] sm:h-[30rem] sm:mt-[-3rem]
                            md:w-[20rem] md:h-[25rem] md:ml-[28rem] md:mt-[-47rem] md:mb-[-2rem]
                            lp:h-[35rem] lp:w-[35rem] lp:max-h-[50rem] lp:mt-[-52rem]
                            lg:w-[45rem] lg:h-[45rem]"
                        />
                    </div>

                </div>

                {/* View More Button */}
                <div className="flex justify-center mt-8 
                lp:mt-[-6rem] 
                md:mt-[-7rem]
                sm:mt-[-1rem]
                ">
                    <Link to="/boardwalk">
                        <button
                        className="px-6 py-3 bg-purple-300 text-white rounded-lg shadow-md hover:bg-purple-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-300 transition-colors duration-300
                            sm:mb-[2rem] sm:mt-[-1rem]
                            md:ml-[28rem] md:mt-[-2rem] md:mb-[3rem]
                            lp:ml-[28rem]
                            lg:mt-[4rem] lg:justify-center lg:items-center"
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

export default BoardProject;