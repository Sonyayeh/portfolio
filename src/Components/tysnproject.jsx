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
        sm:mt-[30rem] sm:px-0  sm:mx-auto
        md:ml-[0rem]
        lg:pl-[4rem] lg:pr-[4rem] ">

            {/* Project Heading and Description */}
            <div className="text-start w-full">

                {/* Blue heading */}
                <div className="bg-purple-200 px-4 flex justify-between items-center w-full">
                    <h5 className="text-white text-3xl 
                    sm:text-3xl 
                    md:text-6xl 
                    lg:text-6xl">
                        Project
                    </h5>
                </div>

                {/* White background tab bar */}
                <div className="bg-purple-200 p-4 pt-0">
                    <ul className="flex gap-6 items-center space-x-1 bg-white w-full px-6 justify-start">
                        {/* List items with responsive font sizes */}
                        <li className="text-purple-200 text-lg 
                        sm:text-3xl 
                        md:text-4xl 
                        lg:text-2xl 
                        font-semibold">DISC</li>
                        <li className="text-purple-200 text-lg 
                        sm:text-3xl 
                        md:text-4xl 
                        lg:text-2xl 
                        font-semibold">OPTION</li>
                        <li className="text-purple-200 text-lg 
                        sm:text-3xl 
                        md:text-4xl 
                        lg:text-2xl 
                        font-semibold">VIEW</li>
                        <li className="text-purple-200 text-lg 
                        sm:text-3xl 
                        md:text-4xl 
                        lg:text-2xl 
                        font-semibold">HELP</li>
                    </ul>
                </div>
            </div>

            {/* Project box with border */}
            <div className="w-full p-0 sm:p-0 flex border-solid border-x-[1rem] border-b-[1rem] border-purple-200
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
                        md:text-[4rem] md:pt-5 md:pl-10 
                        lg:text-[5rem] lg:pl-4 lg:pt-[2rem] lg:absolute">
                            {project.title}
                        </h5>
                        <h4 className="text-lg leading-6 
                        sm:text-[1rem] sm:pt-2  
                        md:text-2xl md:py-5 md:pl-5 md:pr-[23rem]
                        lg:text-3xl lg:py-[10rem] lg:ml-1 lg:pr-[1rem]">
                            {project.description}
                        </h4>
                    </div>

                    {/* Image Section */}
                    <div className="flex justify-center w-full lg:w-1/2 lg:ml-auto">
                        <img
                            src={project.imageurl} 
                            className="w-full h-auto object-contain rounded-xl
                            sm:w-[20rem] sm:h-[30rem]
                            md:w-[20rem] md:h-[25rem] md:ml-[35rem] md:mt-[-17rem] md:mb-[0rem]
                            lg:ml-[5rem] lg:w-[35rem] lg:h-[35rem] lg:mt-[6rem]
                            "
                        />
                    </div>
                    {/* the software used section */}
                    <div>
                        <h4 className="text-purple-300 
                        sm:text-[1rem] sm:mt-[-1rem]
                        md:text-1xl md:mt-[0rem] md:ml-[2rem] md:w-[30rem]
                       lg:text-[1.3rem] lg:ml-[-85rem] lg:mt-[50rem] lg:mr-[-5rem] lg:w-[40rem]
                        ">
                            {project.chips}
                        </h4>
                    </div>
                     {/* View More Button */}
                     <div className="flex justify-center mt-8">
                        <button className="px-6 py-3 bg-purple-300 text-white rounded-lg shadow-md hover:bg-purple-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-300 transition-colors duration-300
                        md:mr-[-35rem] md:mt-[-2rem]
                        lg:mr-[-10rem] lg:mt-[50rem] lg:ml-[-45rem]
                        ">
                            View More
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default TysnProject;
