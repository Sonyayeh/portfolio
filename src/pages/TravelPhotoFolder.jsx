import React, { useState, useEffect } from "react";
import Field from "../assets/travel/field.jpg";
import Nova from "../assets/travel/nova.jpg";
import Brook from "../assets/travel/brooklyn.jpg";
import Street from "../assets/travel/street.jpg";
import River from "../assets/travel/netherland.jpg";
import Bridge from "../assets/travel/bridge.jpg";
import Lake from "../assets/travel/lake.jpg";
import Doggo from "../assets/travel/doggo.jpg";
import Hobbit from "../assets/travel/hobbit.jpg";
import Gallery from "../assets/travel/gallery.jpg";
import Mm from "../assets/travel/mefr.jpg";
import Kirb from "../assets/travel/kirb.jpg";
import Ocean from "../assets/travel/ocean.jpg";
import Sensoji from "../assets/travel/sensoji.jpg";
import Shop from "../assets/travel/shop.jpg";
import Toolip from "../assets/travel/toolip.jpg";
import Tower from "../assets/travel/tower.jpg";
import Tulip from "../assets/travel/tulip.jpg";
import Water from "../assets/travel/river.mp4";
import Station from "../assets/travel/station.mp4";
import Nyc from "../assets/travel/nyc.mp4";

const MasonryPhotoSection = () => {
  const photos = [
    { id: 1, src: Field, alt: "the backyard from my grandmother's home in Changhua, Taiwan", type: "image" },
    { id: 2, src: Nova, alt: "Nova Scotia ocean view", type: "image" },
    { id: 3, src: Street, alt: "Shopping district in Tokyo", type: "image" },
    { id: 4, src: Brook, alt: "Brooklyn bridge in New York", type: "image" },
    { id: 5, src: River, alt: "A river near my hotel in Amsterdam, Netherlands", type: "image" },
    { id: 6, src: Bridge, alt: "I don't remember which bridge this is but it's one of the bridges I visited with my aunt in Taiwan", type: "image" },
    { id: 7, src: Lake, alt: "Again, I don't remember what this place is called but it's in Nova Scotia", type: "image" },
    { id: 8, src: Doggo, alt: "A cute dog drinking fountain in Nova Scotia", type: "image" },
    { id: 9, src: Hobbit, alt: "Hobbit hill or something in Taiwan with capybaras and goats", type: "image" },
    { id: 10, src: Gallery, alt: "New York art gallery with impressive ceiling art", type: "image" },
    { id: 11, src: Mm, alt: "A hilarious photo I regret not buying", type: "image" },
    { id: 12, src: Kirb, alt: "Kirby Cafe! Their food is decent but pricey", type: "image" },
    { id: 13, src: Ocean, alt: "Nova Scotia's ocean views, though many mosquitoes", type: "image" },
    { id: 14, src: Sensoji, alt: "The Sensoji Shrine entrance, did an omikuji there!", type: "image" },
    { id: 15, src: Shop, alt: "A shopping street in Nova Scotia at night, cute lights and arches", type: "image" },
    { id: 16, src: Toolip, alt: "Red tulips in Amsterdam, can't wait to visit again", type: "image" },
    { id: 17, src: Tower, alt: "Tokyo Tower, terrified of heights but went up anyway", type: "image" },
    { id: 18, src: Tulip, alt: "More tulips! I absolutely love them", type: "image" },
    { id: 19, src: Water, alt: "The Amsterdam river photo but video version", type: "video" },
    { id: 20, src: Station, alt: "A stunning station exit in Amsterdam", type: "video" },
    { id: 21, src: Nyc, alt: "New York Times Square, sorry my hand slipped a bit in the end", type: "video" },
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
      {/* Header Section */}
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Travel Photo Folder!</h1>
        <p className="text-xl text-gray-600 mt-2">A collection of photos and videos of places I've been to since 2023!</p>
      </header>

      {/* Grid Section */}
      <div
        className={`grid gap-4 ${columns === 3 ? 'grid-cols-3' : columns === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-1'}`}
      >
        {photos.map((photo) => (
          <div key={photo.id} className="mb-4">
            {photo.type === "image" ? (
              <img
                src={photo.src}
                alt={photo.alt}
                className="rounded-lg shadow-md w-full object-cover"
              />
            ) : (
              <video
                autoPlay
                loop
                muted
                controls
                className="rounded-lg shadow-md w-full object-cover"
              >
                <source src={photo.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MasonryPhotoSection;
