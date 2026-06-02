import React, { useState } from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

function TysnCase() {
    const pdfUrl = "/tysn.pdf";
    const [pageIndex, setPageIndex] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    const onLoadSuccess = ({ numPages }) => {
        setTotalPages(numPages);
    };

    return (
        <div className="w-full relative mt-[30rem] 
        sm:mt-[1rem] sm:px-0 sm:mx-auto sm:pb-[2rem] 
        md:ml-[2rem] 
        lg:ml-[0rem] lg:pr-[7rem]
        lp:w-[70rem] lp:ml-[8rem]">
            {/* Project Heading */}
            <div className="text-start w-full">
                <div className="bg-emerald-300 px-4 flex justify-between items-center w-full 
                md:w-[50rem]
                lp:w-[60rem]
                lg:w-[80rem]">
                    <h5 className="text-white text-3xl mt-1 mb-1
                    sm:text-[1rem] 
                    md:text-3xl md:pt-1 md:pb-1 md:w-[50rem]
                    lg:text-[3rem] lg:mt-2 lg:mb-2
                    lp:text-[2.5rem] lp:w-[90rem]">
                        TYSN: Tell You Something New Brandbook
                    </h5>
                </div>

                {/* White background tab bar */}
                <div className="bg-emerald-300 p-4 pt-0 
                md:w-[50rem]
                lp:w-[60rem]
                lg:w-[80rem]">
                    <ul className="flex gap-6 items-center space-x-1 bg-white w-full px-6 justify-start hover:cursor-hover
                    md:w-[48rem]
                    lp:w-[58rem]
                    lg:w-[78rem]">
                        <li className="text-emerald-300 hover:text-pink-300 text-lg sm:text-3xl md:text-4xl lp:text-5xl lg:text-5xl font-semibold">DISC</li>
                        <li className="text-emerald-300 hover:text-pink-300 text-lg sm:text-3xl md:text-4xl lp:text-5xl lg:text-5xl font-semibold">OPTION</li>
                        <li className="text-emerald-300 hover:text-pink-300 text-lg sm:text-3xl md:text-4xl lp:text-5xl lg:text-5xl font-semibold">VIEW</li>
                        <li className="text-emerald-300 hover:text-pink-300 text-lg sm:text-3xl md:text-4xl lp:text-5xl lg:text-5xl font-semibold">HELP</li>
                    </ul>
                </div>
            </div>

            {/* Project Box */}
            <div className="w-full p-0 sm:p-0 flex-col border-solid border-x-[1rem] border-b-[1rem] border-emerald-300 
            sm:h-[17rem]
            md:w-[50rem] md:h-[30rem]
            lp:w-[60rem] lp:h-[38rem]
            lg:w-[80rem] lg:h-[45rem]">

                {/* PDF Viewer */}
                <div className="w-full overflow-auto flex-1  
                sm:h-[15rem] sm:pt-[1rem] sm:flex sm:ml-[0rem] sm:w-[100%] sm:justify-center sm:overflow-hidden
                md:h-[25rem] md:grid md:ml-[6rem] md:items-center md:w-[36rem] md:overflow-hidden
                lp:h-[32rem] lp:w-[60rem] lp:ml-[-1rem]
                lg:h-[38rem] lg:w-[90rem] lg:ml-[-6.5rem]">
                    <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js">
                        <div className="scale-100 
                        sm:scale-[3] sm:w-[10rem] sm:h-[4rem] 
                        md:scale-[1.2] md:w-[30rem] md:h-[15rem]
                        lp:scale-[1.0] lp:w-[57rem] lp:h-[30rem]
                        lg:scale-[1.1] lg:h-[30rem] lg:w-[60rem]
                        origin-top w-full h-full">
                            <Viewer
                                fileUrl={pdfUrl}
                                pageIndex={pageIndex}
                                onLoadSuccess={onLoadSuccess}
                            />
                        </div>
                    </Worker>
                </div>

                {/* Download Link */}
                <a
                    href={pdfUrl}
                    download
                    className="text-blue-500 font-semibold underline block mt-4 self-center
                    sm:ml-[7rem] sm:mt-[-1rem]
                    md:ml-[20rem] md:mt-[0.5rem]
                    lp:mb-[2rem] lp:ml-[20rem] lp:text-[2rem]
                    lg:text-[3rem] lg:ml-[27rem]">
                    Download Case Study PDF
                </a>
            </div>
        </div>
    );
}

export default TysnCase;
