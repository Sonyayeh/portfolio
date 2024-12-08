import React, { useState, useEffect } from "react";
import Field from "../assets/travel/field.jpg";
import Nova from "../assets/travel/nova.jpg";
import Brook from "../assets/travel/brooklyn.jpg";
import Street from "../assets/travel/street.jpg";
import River from "../assets/travel/netherland.jpg";
import Bridge from "../assets/travel/bridge.jpg";
import Lake from "../assets/travel/lake.jpg";

const MasonryPhotoSection = () => {
  const photos = [
    { id: 1, src: Field, alt: "the backyard from my grandmother's home in Changhua, Taiwan" },
    { id: 2, src: Nova, alt: "Nova Scotia ocean view" },
    { id: 3, src: Street, alt: "Shooping district in Tokyo" },
    { id: 4, src: Brook, alt: "Brooklyn bridge in New York" },
    { id: 5, src: River, alt: "A river near my hotel in Amsterdam, Netherlands" },
    { id: 6, src: Bridge, alt: "I don't remember which bridge this is but it's one of the bridges I visited with my aunt in Taiwan" },
    { id: 7, src: Lake, alt: "Again, I don't remember what this place is called but it's in Nova Scotia" },
  ];

  const [columns, setColumns] = useState(3);

  // Handle responsiveness dynamically
  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth >= 1024) {
        setColumns(3); // Desktop: 3 columns
      } else if (window.innerWidth >= 768) {
        setColumns(2); // Tablet: 2 columns
      } else {
        setColumns(1); // Mobile: 1 column
      }
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);

    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  return (
    <div className="p-6">
      <div
        className="gap-4"
        style={{
          columnCount: columns, // Set column count based on state
          columnGap: "1rem", // Space between columns
        }}
      >
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="mb-4 break-inside-avoid"
            style={{ breakInside: "avoid" }} // Prevent breaking inside columns
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="rounded-lg shadow-md w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MasonryPhotoSection;
