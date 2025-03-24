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
        <div className="w-full relative mt-[30rem] sm:mt-[10rem] sm:px-0 sm:mx-auto md:ml-[0rem] lg:pl-[4rem] lg:pr-[7rem]">
            {/* Project Heading and Description */}
            <div className="text-start w-full">
                {/* this is the section title
                I did it in a way where the first project of each
                section would have the section title,
                so when it is brought into the project page
                I don't have to make another title and manually
                adjust it */}
                <h1 className="pl-2 text-2xl justify-center text-center items-center
                sm:text-[2rem] sm:pb-[2rem] sm:mt-[10rem] 
                md:text-8xl md:pl-[2rem] md:pt-[10rem] 
                lg:text-8xl lg:pl-3">
                    UI/UX Design:
                </h1>

                {/* Purple heading */}
                <div className="bg-purple-200 px-4 flex justify-between items-center w-full">
                    <h5 className="text-white text-3xl sm:text-3xl md:text-6xl md:py-3 lg:text-7xl">Project</h5>
                </div>

                {/* White background tab bar */}
                <div className="bg-purple-200 p-4 pt-0 hover:cursor-hover">
                    <ul className="flex gap-6 items-center space-x-1 bg-white w-full px-6 justify-start">
                        {['DISC', 'OPTION', 'VIEW', 'HELP'].map((item, index) => (
                            <li key={index} className="text-purple-200 text-lg hover:text-orange-300 sm:text-3xl md:text-6xl lg:text-7xl font-semibold">{item}</li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Project box with border */}
            <div className="w-full p-0 sm:p-0 flex flex-col border-solid border-x-[1rem] border-b-[1rem] border-purple-200 md:p-3">
                {/* Content Container */}
                <div className="space-y-4 flex flex-col py-2 px-4 sm:px-7 w-full lg:flex-row">
                    {/* Title and Description Section */}
                    <div className="w-full lg:w-1/2 lg:text-left">
                        <h5 className="text-purple-400 pb-2 text-2xl sm:text-[1.5rem] sm:text-start sm:pt-5 md:text-[2.6rem] md:pt-5 md:ml-[-1rem] md:w-[59rem] lg:text-[3rem] lg:pl-4 lg:pt-[4rem] lg:absolute lg:w-[60rem]">
                            {project.title}
                        </h5>
                        <h4 className="text-lg leading-6 sm:text-[1rem] sm:pt-2 md:text-3xl md:mt-[4.75rem] md:pl-1 md:pr-[10rem] md:w-[38rem] lg:text-[2rem] lg:py-[6rem] lg:ml-[-1rem] lg:pr-[1rem] lg:w-[30rem]">
                            {project.description}
                        </h4>
                        
                        {/* Software used section */}
                        <div className="flex flex-col items-start justify-start w-full sm:mt-[2rem] lg:w-[30rem] lg:mt-[-3rem]">
                            {[project.chip1, project.chip2, project.chip3, project.chip4, project.chip5, project.chip6].map((chip, index) => (
                                <h4 key={index} className="text-purple-300 sm:text-[1rem] sm:mt-[-1rem] md:text-3xl md:pt-[1rem] lg:text-[2rem] lg:mt-[-1rem]">
                                    {chip}
                                </h4>
                            ))}
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="flex justify-center w-full lg:w-1/2 lg:ml-[-14rem] lg:pt-[50rem]">
                        <img
                            src={project.imageurl}
                            alt="Project Preview"
                            className="w-full h-auto object-contain rounded-xl 
                            sm:w-[20rem] sm:h-[30rem] sm:mt-[-3rem]
                            md:w-[20rem] md:h-[25rem] md:ml-[28rem] md:mt-[-43rem] md:mb-[-2rem] 
                            lg:w-[45rem] lg:h-[45rem]
                            lp:w-[40rem] lp:h-[40rem] lp:mt-[-45rem]"
                        />
                    </div>
                </div>

                {/* View More Button */}
                <div className="flex justify-center mt-8 lp:mt-[-1em] md:mt-[-7rem] sm:mt-[-1rem]">
                    <Link to="/beachball">
                        <button className="px-6 py-3 bg-purple-300 text-white rounded-lg shadow-md hover:bg-purple-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-300 transition-colors duration-300 sm:mb-[2rem] sm:mt-[-1rem] md:ml-[28rem] md:mt-[-2rem] md:mb-[3rem] lg:mt-[4rem]">
                            View More
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PuppyProject;
