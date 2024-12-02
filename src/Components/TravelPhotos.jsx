import React, { useState, useEffect } from "react";
import Beef from "../assets/food/beefnoods.png";
import Cake from "../assets/food/cake.jpg";
import Chicken from "../assets/food/chicken.jpg";
import Cookie from "../assets/food/cookie.png";
import Croissant from "../assets/food/croissant.jpg";
import Cookies from "../assets/food/cookiebox.png";
import Hotpot from "../assets/food/hotpot.png";

const MasonryPhotoSection = () => {
  const photos = [
    { id: 1, src: Beef, alt: "Beef Noodles" },
    { id: 2, src: Cake, alt: "Strawberry Cake" },
    { id: 3, src: Chicken, alt: "Chicken Dish" },
    { id: 4, src: Cookie, alt: "Single Cookie" },
    { id: 5, src: Croissant, alt: "Croissant" },
    { id: 6, src: Cookies, alt: "Box of Cookies" },
    { id: 7, src: Hotpot, alt: "Hotpot" },
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
