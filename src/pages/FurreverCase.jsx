import React from "react";

const FurreverCase = () => {
  const pdfUrl = "/furreverpals.pdf";

  return (
    <div className="p-10 text-center">
      <h1 className="text-blue-400 text-3xl">Furrever Pals Case Study</h1>

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

export default FurreverCase;