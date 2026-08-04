import React from "react";
import { Link } from "react-router-dom";
import projectData from "../data/project.json"; // Import the JSON data

const PuppyProject = () => {
    // Find the project with id 2
    const project = projectData.find((proj) => proj.id === 2);

    if (!project) {
        return <div>Project not found</div>; // Handle case where project is not found
    }

    return (
        <div className="w-full relative mt-[30rem] sm:mt-[5rem] sm:px-0 sm:mx-auto">
            {/* Project Heading and Description */}
            <div className="text-start w-full">
                {/* this is the section title
                I did it in a way where the first project of each
                section would have the section title,
                so when it is brought into the project page
                I don't have to make another title and manually
                adjust it */}
                <h1 className="flex pl-2 text-2xl justify-center text-center items-center
                sm:text-[2rem] sm:pb-[2rem] sm:mt-[5rem] 
                md:text-[4rem] md:h-[5rem] md:w-[49rem]
                lp:text-[4rem] lp:pb-[2rem] lp:justify-self-center
                lg:text-8xl lg:w-[70rem]">
                    UI/UX Design:
                </h1>

                {/* Purple heading */}
                <div className="bg-purple-300 px-4 flex justify-between items-center 
                md:w-[49rem] lp:w-[60rem] lp:justify-self-center
                w-full">
                    <h5 className="text-white text-3xl 
                    sm:text-[2rem] sm:p-2
                    md:text-[3rem] md:py-3 
                    lp:text-[4rem] lp:py-5
                    lg:text-[4rem] ">Project</h5>
                </div>

                

                {/* White background tab bar */}
                <div className="bg-purple-300 p-4 pt-0 
                md:w-[49rem]
                lp:w-[60rem] lp:justify-self-center
                hover:cursor-hover">
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
            <div className="w-full p-0 sm:p-0 
            md:w-[49rem]
            lp:w-[60rem] lp:justify-self-center
            flex flex-col border-solid border-x-[1rem] border-b-[1rem] 
            border-purple-300">
                {/* Content Container */}
                <div className="space-y-4 flex flex-col py-2 px-4  w-full 
                md:w-[30rem] 
                lg:flex-row ">
                    {/* Title and Description Section */}
                    <div className="w-full lg:w-1/2 lg:text-left">
                        <h5 className="text-purple-400 pb-2 text-2xl 
                        sm:text-[1.5rem] sm:text-start sm:pt-5 
                        md:text-[3rem] md:pt-[3rem] md:w-[45rem] 
                        lp:text-[3rem] lp:w-[55rem] lp:pb-[1rem]
                        lg:text-[4rem] lg:pt-[2rem] lg:absolute lg:w-[60rem]">
                            {project.title}
                        </h5>
                        <h4 className="text-lg leading-6 
                        sm:text-[1rem] sm:pt-2 
                        md:text-[1.3rem] md:pt-[2rem] md:pr-[10rem] md:w-[35rem] md:leading-[2rem]
                        lp:text-[1.5rem] lp:leading-[2.5rem] lp:w-[43rem]
                        lg:text-[2rem] lg:mt-[5rem] lg:pb-[2rem] lg:w-[58rem]">
                            {project.description}
                        </h4>
                        
                        {/* Software used section */}
                      <div className="font-Dos flex flex-col items-start justify-start w-full gap-2 
                        sm:mt-[2rem] sm:flex-row sm:flex-wrap sm:pb-2
                        md:flex-row md:flex-wrap md:items-center md:gap-3 md:py-[2rem] md:w-[47rem]
                        lp:w-[52rem]
                        lg:w-[72rem] lg:mt-[5rem] lg:pb-[3rem] lg:flex-row">
                            
                            <h5 className="text-purple-400 pb-2 text-2xl 
                        sm:text-[1.5rem] sm:text-start
                        md:text-[3rem] md:w-[45rem] md:pb-[2rem]
                        lp:text-[3rem] lp:w-[55rem] lp:pb-[1rem]
                        lg:text-[4rem] lg:mb-[10rem] lg:absolute lg:w-[60rem]">
                            Software Used:
                        </h5>

                            {[project.chip1, project.chip2, project.chip3, project.chip4, project.chip5, project.chip6].map((chip, index) => (
                                <span key={index} className="bg-orange-200 text-purple-900 px-4 py-2 rounded-full text-sm hover:bg-purple-400 hover:text-white duration-300
                                sm:text-[.8rem] 
                                md:text-[1.2rem] md:px-6 md:py-4
                                lp:text-[1.5rem]
                                lg:text-[1.5rem]">
                                    {chip}
                                </span>
                            ))}
                        </div>
                    </div>
                    {/* Image Section */}
                    <div className="flex justify-center w-full lg:w-[85%] lg:ml-[-10rem] lg:pt-[50rem]">
                        <img
                            src={project.imageurl}
                            alt="Project Preview"
                            className="w-full h-auto object-contain rounded-xl 
                            sm:w-[20rem] sm:h-[30rem] sm:mt-[-3rem]
                            md:w-[20rem] md:h-[32rem] md:ml-[42rem] md:mt-[-50rem] 
                            lp:w-[40rem] lp:ml-[60rem] lp:h-[23rem] lp:mt-[-45rem]
                            lg:mt-[-45rem]  lg:w-[40rem] lg:h-[30rem]"
                        />
                    </div>
                </div>

                {/* View More Button */}
                <div className="flex justify-center 
                lp:mb-[2rem]
                ">
                    <Link to="/puppy">
                        <button className="font-Dos px-6 py-3 bg-purple-300 text-white rounded-lg shadow-md  hover:bg-orange-200 hover:text-purple-900  focus:outline-none focus:ring-2 focus:ring-purple-300 transition-colors duration-300 
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
};

export default PuppyProject;
