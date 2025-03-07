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
import Heart from "../assets/heart.svg";

const FoodSlider = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
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
    <div className="bg-blue-100 flex flex-col items-center p-4 md:w-[55rem] md:-ml-8 lg:w-[85rem] lg:ml-[-8rem] lp:ml-[-4rem] lp:w-[83rem]">

      <h5 className="flex items-center text-center text-2xl md:w-[20rem[ md:text-[3rem] lg:text-5xl lg:pt-[1rem] lg:pb-[1rem] mb-4">
        <span>I enjoy cooking</span>
        <img src={Heart} alt="Heart" className="ml-2 w-6 h-6 md: lg:w-12 lg:h-12 " />
      </h5>
      <div className="max-w-screen-md w-full lg:w-100px">
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
    </div>
  );
};

export default FoodSlider;