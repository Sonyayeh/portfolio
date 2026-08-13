import React from "react";
import { Link } from "react-router-dom";

const caseStudies = [
  {
    title: "Furrever Pals",
    subtitle: "Pet Adoption / Community Experience",
    type: "UX Research / UI Design",
    path: "/cases/furrever",
    pdf: "/furreverpals.pdf",
    color: "bg-[#fff1f7]",
  },
  {
    title: "BCIT",
    subtitle: "Student App / Service Design Case Study",
    type: "UX/UI Design",
    path: "/cases/bcit",
    pdf: "/bcitcase.pdf",
    color: "bg-[#eef3ff]",
  },
  {
    title: "TYSN",
    subtitle: "Celestial Tea Ceremony Brandbook",
    type: "Brand Campaign / UIUX",
    path: "/cases/tysn",
    pdf: "/tysn.pdf",
    color: "bg-[#d0faff]",
  },
  {
    title: "Marketing Plan",
    subtitle: "Campaign Strategy Case Study",
    type: "Marketing / Campaign Planning",
    path: "/cases/marketing",
    pdf: "/marketingplan.pdf",
    color: "bg-[#fff6cf]",
  },
];

const Cases = () => {
  return (
    <main className="mx-auto w-full max-w-[80rem] px-4 py-10 sm:px-5 md:px-8">
      <section className="text-center">
        <h1 className="font-vcr text-[2.3rem] text-blue-400 sm:text-[2rem] md:text-[4rem]">
          Case Study Folder
        </h1>

        <p className="mx-auto mt-4 max-w-[40rem] font-mono text-[0.9rem] leading-relaxed text-[#8b44fc] md:text-[1rem]">
          Select a project folder to view the full redesigned case study.
        </p>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        {caseStudies.map((item) => (
          <Link
            key={item.title}
            to={item.path}
            className={`${item.color} group relative overflow-hidden rounded-[1rem] border-2 border-blue-200 p-5 shadow-[6px_6px_0_#d6ccf5] transition hover:-translate-y-1 hover:shadow-[8px_8px_0_#c9bff0]`}
          >
            <div className="mb-4 flex items-center justify-between border-b-2 border-dashed border-blue-200 pb-3">
              <span className="font-Dos text-[0.85rem] text-blue-500">
                case_file.exe
              </span>
              <span className="font-Dos text-[0.85rem] text-blue-400">
                open
              </span>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-[4rem] w-[4rem] shrink-0 items-center justify-center rounded-md border-2 border-blue-200 bg-white text-[2rem]">
                📁
              </div>

              <div>
                <h2 className="font-vcr text-[1.7rem] text-[#243b7a] md:text-[2rem]">
                  {item.title}
                </h2>

                <p className="mt-2 font-mono text-[0.85rem] text-blue-500">
                  {item.subtitle}
                </p>

                <p className="mt-3 inline-block border border-blue-200 bg-white px-2 py-1 font-Dos text-[0.72rem] text-[#8b44fc]">
                  {item.type}
                </p>

                <p className="mt-2 font-mono text-[0.72rem] text-blue-400">
                  Original file: {item.pdf.replace("/", "")}
                </p>
              </div>
            </div>

            <p className="mt-5 font-mono text-[0.8rem] text-blue-500 opacity-80">
              Click to open full case study →
            </p>
          </Link>
        ))}
      </section>
    </main>
  );
};

export default Cases;