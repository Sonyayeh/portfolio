import React from "react";
import Field from "../assets/travel/field.jpg";
import Nova from "../assets/travel/nova.jpg";
import Brook from "../assets/travel/brooklyn.jpg";
import Street from "../assets/travel/street.jpg";
import River from "../assets/travel/netherland.jpg";
import Bridge from "../assets/travel/bridge.jpg";
import Lake from "../assets/travel/lake.jpg";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";

const MasonryPhotoSection = () => {
  const photos = [
    { id: 1, src: Field, alt: "The backyard from my grandmother's home in Changhua, Taiwan" },
    { id: 2, src: Nova, alt: "Nova Scotia ocean view" },
    { id: 3, src: Street, alt: "Shopping district in Tokyo" },
    { id: 4, src: Brook, alt: "Brooklyn bridge in New York" },
    { id: 5, src: River, alt: "A river near my hotel in Amsterdam, Netherlands" },
    { id: 6, src: Bridge, alt: "A bridge I visited with my aunt in Taiwan" },
    { id: 7, src: Lake, alt: "A lake in Nova Scotia" },
  ];

  return (
    <ResponsiveMasonry>
    <div className="bg-purple-100 p-6">
      <div
        className="grid gap-5"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(auto, 2fr)", // Dynamic column layout
        }}
      >
        {photos.map((photo) => (
          <div key={photo.id} className="relative w-full">
            <img
              src={photo.src}
              alt={photo.alt}
              className="rounded-lg shadow-md w-full h-auto object-cover" // Maintain original aspect ratio
            />
          </div>
        ))}
      </div>
    </div>
    </ResponsiveMasonry>
  );
};

export default MasonryPhotoSection;
