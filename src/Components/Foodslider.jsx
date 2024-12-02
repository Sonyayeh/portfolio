import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Beef from "../assets/food/beefnoods.png";
import Cake from "../assets/food/cake.jpg";
import Chicken from "../assets/food/chicken.jpg";
import Cookie from "../assets/food/cookie.png";
import Croissant from "../assets/food/croissant.jpg";
import Cookies from "../assets/food/cookiebox.png";
import Hotpot from "../assets/food/hotpot.png";


const PhotoCarousel = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1, // Ensure only one slide is shown
    slidesToScroll: 1, // Scroll one slide at a time
    responsive: [
      {
        breakpoint: 1024, // Larger screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Tablets
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    appendDots: (dots) => (
      <ul className="absolute bottom-2 flex justify-center gap-2">
        {dots}
      </ul>
    ),
    customPaging: (i) => (
      <button className="w-3 h-3 bg-gray-400 rounded-full hover:bg-gray-600 transition-colors">
        <span className="sr-only">Slide {i + 1}</span>
      </button>
    ),
    prevArrow: <CustomArrow direction="left" />,
    nextArrow: <CustomArrow direction="right" />,
  };

  const photos = [
    { id: 1, src: Beef, alt: "Beef Noodles" },
    { id: 2, src: Cake, alt: "Strawberry Cake" }, 
    { id: 3, src: Chicken, alt: "Chicken" },
    { id: 4, src: Cookie, alt: "Single cookie" },
    { id: 5, src: Croissant, alt: "Croissant" },
    { id: 6, src: Cookies, alt: "Cookie box" },
    { id: 7, src: Hotpot, alt: "Hot pot" },

  ];

  return (
    <div className="relative max-w-screen-md mx-auto p-4">
      <Slider {...settings}>
        {photos.map((photo) => (
          <div key={photo.id} className="p-2">
            <img
              src={photo.src}
              alt={photo.alt}
              className="rounded-lg w-full h-auto shadow-md object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

// Custom Arrow Component
const CustomArrow = React.forwardRef(({ direction, onClick }, ref) => (
  <button
    ref={ref}
    className={`absolute top-1/2 z-10 text-xl transform -translate-y-1/2 ${
      direction === "left" ? "left-[-60px]" : "right-[-60px]"
    } text-blue-300 hover:text-purple-300`}
    onClick={onClick}
  >
    {direction === "left" ? "◀" : "▶"}
  </button>
));

export default PhotoCarousel;
