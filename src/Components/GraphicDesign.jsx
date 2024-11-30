import React from "react";
import projectData from "../data/project.json";  // Import the JSON data

const GraphicBox = () => {
    // Find the project with id 1
    const project = projectData.find((proj) => proj.id === 1);

    if (!project) {
        return <div>Project not found</div>;  // Handle case where project is not found
    }

    return (
        <div className="w-full relative mt-[30rem] 
        sm:mt-[10rem] sm:px-0  sm:mx-auto
        md:ml-[0rem]
        lg:pl-[4rem] lg:pr-[4rem] ">

            {/* Project Heading and Description */}
            <div className="text-start w-full
            
            ">
                <h1 className=" pl-2 text-2xl 
                sm:text-[4rem] sm:pb-[2rem] sm:pl-[6.5rem] sm:mt-[-16rem]
                md:text-8xl md:pb-[1rem] md:pt-[10rem] 
                lg:text-8xl lg:pl-5">
                    Graphic Design:
                </h1>

                {/* Blue heading */}
                <div className="bg-blue-200 px-4 flex justify-between items-center w-full">
                    <h5 className="text-white text-3xl 
                    sm:text-3xl 
                    md:text-7xl 
                    lg:text-6xl">
                        Project
                    </h5>
                </div>

                {/* White background tab bar */}
                <div className="bg-blue-200 p-4 pt-0">
                    <ul className="flex gap-6 items-center space-x-1 bg-white w-full px-6 justify-start">
                        {/* List items with responsive font sizes */}
                        <li className="text-blue-200 text-lg 
                        sm:text-3xl 
                        md:text-4xl 
                        lg:text-2xl 
                        font-semibold">DISC</li>
                        <li className="text-blue-200 text-lg 
                        sm:text-3xl 
                        md:text-4xl 
                        lg:text-2xl 
                        font-semibold">OPTION</li>
                        <li className="text-blue-200 text-lg 
                        sm:text-3xl 
                        md:text-4xl 
                        lg:text-2xl 
                        font-semibold">VIEW</li>
                        <li className="text-blue-200 text-lg 
                        sm:text-3xl 
                        md:text-4xl 
                        lg:text-2xl 
                        font-semibold">HELP</li>
                    </ul>
                </div>
            </div>

            {/* Project box with border */}
            <div className="w-full p-0 sm:p-0 flex border-solid border-x-[1rem] border-b-[1rem] border-blue-200
            md:p-3 
            ">

                {/* Content Container */}
                <div className="space-y-4 flex flex-col py-2 px-4 
                sm:px-7 w-full 
                lg:flex-row">

                    {/* Title and Description Section */}
                    <div className="w-full lg:w-1/2 lg:text-left">
                        <h5 className="text-black pb-2 text-2xl 
                        sm:text-[1.5rem] sm:text-start sm:pt-5
                        md:text-4xl 
                        lg:text-6xl lg:pl-4 lg:pt-[8rem] lg:absolute">
                            {project.title}
                        </h5>
                        <h4 className="text-lg leading-6 
                        sm:text-[1rem] sm:pt-2  
                        md:text-2xl  md:w-full md:mb-[1rem] md:pl-[5rem]
                        lg:text-3xl lg:pl-2 lg:ml-10 lg:pt-[17rem]">
                            {project.description}
                        </h4>
                    </div>

                    {/* Image Section */}
                    <div className="flex justify-center w-full lg:w-1/2 lg:ml-auto">
                        <img
                            src={project.imageurl} 
                            className="w-full h-auto object-contain rounded-xl
                            sm:w-[20rem] sm:h-[30rem]
                            lg:ml-[10rem] lg:w-[30rem]
                            "
                        />
                    </div>
                    {/* the software used section */}
                    <div>
                        <h4 className="text-blue-300 
                        sm:text-[1rem] sm:mt-[-1rem]
                        lg:ml-[-80rem] lg:mt-[40rem]
                        ">
                            {project.chips}
                        </h4>
                    </div>
                     {/* View More Button */}
                     <div className="flex justify-center mt-8">
                        <button className="px-6 py-3 bg-blue-300 text-white rounded-lg shadow-md hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors duration-300">
                            View More
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default GraphicBox;
