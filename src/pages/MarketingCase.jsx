import React from "react";

const MarketingCase = () => {
  const pdfUrl = "/marketingplan.pdf";

  return (
    <div className="p-10 text-center">
      <h1 className="text-blue-400 text-3xl">Marketing Case Study</h1>

      <a
        href={pdfUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-purple-400 underline mt-5 block"
      >
        View PDF
      </a>
    </div>
  );
};

export default MarketingCase;