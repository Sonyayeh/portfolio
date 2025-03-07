import React, { useState } from "react";
import Field from "../assets/travel/field.jpg";
import Nova from "../assets/travel/nova.jpg";
import Brook from "../assets/travel/brooklyn.jpg";
import Street from "../assets/travel/street.jpg";
import River from "../assets/travel/netherland.jpg";
import Bridge from "../assets/travel/bridge.jpg";
import Lake from "../assets/travel/lake.jpg";
import { Link } from "react-router-dom";
import Camera from "../assets/camera.svg"; // Assuming Camera and Floppy are imported here
import Floppy from "../assets/Floppy.svg"

const TravelPhotos = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [currentAlt, setCurrentAlt] = useState("");
  const [loading, setLoading] = useState(true);
  const photos = [
    { id: 1, src: Field, alt: "Changhua, Taiwan" },
    { id: 2, src: Nova, alt: "Nova Scotia, Canada" },
    { id: 3, src: Street, alt: "Tokyo, Japan" },
    { id: 4, src: Brook, alt: "Brooklyn, New York" },
    { id: 5, src: River, alt: "Utretch, Amsterdam" },
    { id: 6, src: Bridge, alt: "Tainan, Taiwan" },
    { id: 7, src: Lake, alt: "Nova Scotia, Canada" },
  ];

  const openLightbox = (src, alt) => {
    setCurrentImage(src);
    setCurrentAlt(alt);
    setLoading(true);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const nextImage = () => {
    const currentIndex = photos.findIndex((photo) => photo.src === currentImage);
    const nextIndex = (currentIndex + 1) % photos.length;
    setCurrentImage(photos[nextIndex].src);
    setCurrentAlt(photos[nextIndex].alt);
  };

  const prevImage = () => {
    const currentIndex = photos.findIndex((photo) => photo.src === currentImage);
    const prevIndex = (currentIndex - 1 + photos.length) % photos.length;
    setCurrentImage(photos[prevIndex].src);
    setCurrentAlt(photos[prevIndex].alt);
  };

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <div
      className="bg-purple-100 pt-[1rem] ml-[-3.5rem] w-auto 
    sm:ml-[0rem] sm:w-auto
    md:w-[55rem] md:ml-[-2rem] md:mt-[1rem]
    lg:w-[85rem] lg:ml-[-14rem] lg:mt-[2rem]
    lp:w-[83rem] lp:ml-[-4rem] lp:mt-[2rem]"
    >
      <h5
        className="flex items-center justify-between
        sm:text-[1.5rem] sm:mb-[-2rem] sm:ml-[1rem]
        md:text-[2.1rem] md:ml-[2rem] md:pb-[2rem]
        lg:text-[3.2rem] lg:ml-[2rem] lg:w-[90rem]
        lp:text-[5rem] lp:ml-[5rem]"
      >
        I also love travelling and taking photos!
        <img
          src={Camera}
          alt="Camera"
          className="w-8 h-8 mr-3
            lg:w-20 lg:h-12 lg:mr-[9rem]
            lp:w-24 lp:h-24"
        />
      </h5>

      <div
        className="
            sm:w-[23rem]
            md:w-[50rem] md:ml-[2rem] md:mt-[1rem]
            lg:w-[80rem] lg:mt-[2rem] lg:ml-[2rem]
            lp:w-[80rem] lp:mt-[2rem] lp:ml-[2rem]
            "
      >
        {/* Removed unnecessary self-nesting of TravelPhotos component */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="relative cursor-pointer flex justify-center"
              onClick={() => openLightbox(photo.src, photo.alt)}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="rounded-lg shadow-md w-full h-48 object-cover transform transition duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

      <div>
        <h5 className="text-xl text-right mr-10 md:text-[2rem] lg:text-[2.5rem]">
          Click me for more photos!
        </h5>
        <Link to="/travelphotofolder">
          <img
            src={Floppy}
            alt="Floppy disk, click here to my secret photo album >:)"
            className="w-8 h-8 mb-2 ml-[25rem]
                    sm:ml-[21rem] sm:mb-[1rem]
                    md:ml-[52rem] md:mb-[2rem]
                    lg:ml-[83rem]
                    lp:ml-[80rem]
                    hover:cursor-pointer"
          />
        </Link>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeLightbox}
        >
          <div
            className="bg-white p-4 rounded-lg shadow-lg relative flex flex-col items-center"
            style={{ maxWidth: "60%", maxHeight: "90%" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-2 right-2 text-white font-bold text-xl"
            >
              X
            </button>
            <div className="relative flex flex-col items-center">
              <img
                src={currentImage}
                alt={currentAlt}
                className={`transition-opacity duration-500 ease-in-out ${loading ? "opacity-0" : "opacity-100"}`}
                onLoad={handleImageLoad}
                style={{
                  maxWidth: "100%",
                  maxHeight: "80vh",
                  objectFit: "contain",
                  border: "4px solid #fff",
                  borderRadius: "10px",
                }}
              />
              <p className="text-center text-blue-300 bg-opacity-70 p-2 rounded mt-2 xl:text-[1rem] lp:text-[3rem] md:text-base">
                {currentAlt}
              </p>
              <button
                className="absolute left-[-50px] top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full text-[2.5rem]"
                onClick={prevImage}
              >
                &#60;
              </button>
              <button
                className="absolute right-[-50px] top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full text-[2.5rem]"
                onClick={nextImage}
              >
                &#62;
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TravelPhotos;
