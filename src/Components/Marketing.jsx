import React, { useState } from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

function Marketing() {
    const pdfUrl = "/marketingplan.pdf"; // Ensure it's inside 'public/'

    const [pageIndex, setPageIndex] = useState(0); // Track the current page index
    const [totalPages, setTotalPages] = useState(0); // Store total number of pages

    // Handle page load success to set total pages
    const onLoadSuccess = ({ numPages }) => {
        setTotalPages(numPages);
    };

    return (
        <div className="w-full relative mt-[30rem] sm:mt-[1rem] sm:px-0 sm:mx-auto sm:pb-[2rem] md:ml-[0rem] lg:pl-[4rem] lg:pr-[7rem]">
            {/* Project Heading */}
            <div className="text-start w-full">
                <div className="bg-purple-200 px-4 flex justify-between items-center w-full">
                    <h5 className="text-white text-3xl sm:text-[1.2rem] md:text-6xl lg:text-6xl">
                        Marketing Strategy: Catoro Café
                    </h5>
                </div>

                {/* White background tab bar */}
                <div className="bg-purple-200 p-4 pt-0">
                    <ul className="flex gap-6 items-center space-x-1 bg-white w-full px-6 justify-start">
                        <li className="text-purple-200 text-lg sm:text-3xl md:text-4xl lg:text-2xl font-semibold">DISC</li>
                        <li className="text-purple-200 text-lg sm:text-3xl md:text-4xl lg:text-2xl font-semibold">OPTION</li>
                        <li className="text-purple-200 text-lg sm:text-3xl md:text-4xl lg:text-2xl font-semibold">VIEW</li>
                        <li className="text-purple-200 text-lg sm:text-3xl md:text-4xl lg:text-2xl font-semibold">HELP</li>
                    </ul>
                </div>
            </div>

            {/* Project Box */}
            <div className="w-full p-0 sm:p-0  flex-col border-solid border-x-[1rem] border-b-[1rem] border-purple-200 md:p-3">
                {/* PDF Viewer */}
                <div className="w-full border border-gray-300 overflow-auto flex-1 sm:h-[15.5rem] sm:pt-[1rem]">
                    <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js">
                        <Viewer
                            fileUrl={pdfUrl}
                            pageIndex={pageIndex}
                            onLoadSuccess={onLoadSuccess}
                        />
                    </Worker>
                </div>

                

                {/* Download Link */}
                <a
                    href={pdfUrl}
                    download
                    className="text-blue-500 font-semibold underline block mt-4 self-center
                    sm:ml-[7rem]
                    "
                >
                    Download Case Study PDF
                </a>
            </div>
        </div>
    );
}

export default Marketing;
