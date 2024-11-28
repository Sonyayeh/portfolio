import React from "react";
import projectData from "../data/project.json";  // Import the JSON data

const TysnProject = () => {
    // Find the project with id 1
    const project = projectData.find((proj) => proj.id === 5);

    if (!project) {
        return <div>Project not found</div>;  // Handle case where project is not found
    }

    return (
        <div className="w-full relative mt-[30rem] 
        sm:mt-[10rem] sm:px-0  sm:mx-auto
        md:ml-[6rem]
        lg:pr-[12rem]">

            {/* Project Heading and Description */}
            <div>
                
                {/* Blue heading */}
                <div className="bg-purple-200 px-4 flex justify-between items-center w-full">
                    <h5 className="text-white text-3xl sm:text-5xl md:text-4xl lg:text-6xl">
                        Project
                    </h5>
                </div>

                {/* White background tab bar */}
                <div className="bg-purple-200 p-4 pt-0">
                    <ul className="flex gap-6 items-center space-x-1 bg-white w-full px-6 justify-start">
                        {/* List items with responsive font sizes */}
                        <li className="text-purple-200 text-lg sm:text-3xl md:text-lg lg:text-2xl font-semibold">DISC</li>
                        <li className="text-purple-200 text-lg sm:text-3xl md:text-lg lg:text-2xl font-semibold">OPTION</li>
                        <li className="text-purple-200 text-lg sm:text-3xl md:text-lg lg:text-2xl font-semibold">VIEW</li>
                        <li className="text-purple-200 text-lg sm:text-3xl md:text-lg lg:text-2xl font-semibold">HELP</li>
                    </ul>
                </div>
            </div>

            {/* Project box with border */}
            <div className="w-full p-0 sm:p-0 md:p-3 flex border-solid border-x-[1rem] border-b-[1rem] border-purple-200">

                {/* Content Container */}
                <div className="space-y-4 flex flex-col py-2 px-4 
                sm:px-6 w-full 
                lg:flex-row">

                    {/* Title and Description Section */}
                    <div className="w-full lg:w-1/2 lg:text-left">
                        <h5 className="text-black pb-2 text-2xl 
                        sm:text-5xl sm:text-center sm:pt-5 
                        md:text-4xl 
                        lg:text-6xl lg:pl-4 lg:py-10">
                            {project.title}
                        </h5>
                        <h4 className="text-lg leading-6 
                        sm:text-2xl sm:py-5 sm:pl-5
                        md:text-2xl lg:text-3xl md:pl-[1rem] md:w-full md:mb-[1rem]">
                            {project.description}
                        </h4>
                    </div>

                    {/* Image Section */}
                    <div className="flex justify-center w-full lg:w-1/2 lg:ml-auto">
                        <img
                            src={project.imageurl} 
                            alt={project.title}
                            className="w-full h-auto object-contain rounded-xl"
                        />
                    </div>
                    {/* the software used section */}
                    <div>
                        <h4 className="text-purple-300 
                        sm:text-[1.5rem] sm:pl-[1rem]">
                            {project.chips}
                        </h4>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default TysnProject;
