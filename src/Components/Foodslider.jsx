import React, { useRef, useState } from "react";
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
import Pointercursor from "./photopointer";

const FoodSlider = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageMeta, setImageMeta] = useState({ width: 0, height: 0 });

  const photos = [
    {
      id: 1,
      src: Beef,
      alt: "Beef noodles",
      title: "Beef Noodles",
      tag: "Comfort Food",
      note: "Warm, savoury, and one of my favourite cozy meals.",
    },
    {
      id: 2,
      src: Cake,
      alt: "Strawberry cake",
      title: "Strawberry Cake",
      tag: "Sweet Treat",
      note: "I love soft desserts that feel cute and homemade.",
    },
    {
      id: 3,
      src: Chicken,
      alt: "Chicken dish",
      title: "Chicken Dish",
      tag: "Homemade",
      note: "Trying different savoury dishes is one of my favourite things.",
    },
    {
      id: 4,
      src: Cookie,
      alt: "Single cookie",
      title: "Cookie",
      tag: "Baking",
      note: "Tiny baked treats always make a day feel better.",
    },
    {
      id: 5,
      src: Croissant,
      alt: "Croissant",
      title: "Croissant",
      tag: "Cafe Mood",
      note: "A little buttery pastry moment never hurts.",
    },
    {
      id: 6,
      src: Cookies,
      alt: "Cookie box",
      title: "Cookie Box",
      tag: "Favourite",
      note: "I really enjoy making food that feels thoughtful and shareable.",
    },
    {
      id: 7,
      src: Hotpot,
      alt: "Hot pot",
      title: "Hot Pot",
      tag: "Cozy Meal",
      note: "Warm, social, and one of the most comforting foods ever.",
    },
  ];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 550,
    autoplay: true,
    autoplaySpeed: 2600,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (_, next) => setCurrentSlide(next),
  };

  const activePhoto = photos[currentSlide];

  const handleImageLoad = (e) => {
    const { naturalWidth, naturalHeight } = e.currentTarget;
    setImageMeta({
      width: naturalWidth,
      height: naturalHeight,
    });
  };

  const aspectRatio =
    imageMeta.width && imageMeta.height
      ? imageMeta.width / imageMeta.height
      : 1.2;

  const isPortrait = aspectRatio < 0.9;
  const isLandscape = aspectRatio > 1.2;
  const isSquareish = !isPortrait && !isLandscape;

  const frameClass = isPortrait
    ? "max-w-[12rem] sm:max-w-[14rem] md:max-w-[16rem] lg:max-w-[18rem]"
    : isSquareish
    ? "max-w-[15rem] sm:max-w-[18rem] md:max-w-[20rem] lg:max-w-[22rem]"
    : "max-w-[22rem] sm:max-w-[24rem] md:max-w-[30rem] lg:max-w-[36rem]";

  const imageClass = isPortrait
    ? "max-h-[15rem] sm:max-h-[18rem] md:max-h-[21rem] lg:max-h-[24rem]"
    : isSquareish
    ? "max-h-[15rem] sm:max-h-[18rem] md:max-h-[21rem] lg:max-h-[24rem]"
    : "max-h-[12rem] sm:max-h-[15rem] md:max-h-[19rem] lg:max-h-[23rem]";

  return (
    <section className="w-full flex justify-center mt-8 lg:mt-[5rem]">
      <div className="w-full max-w-[24rem] sm:max-w-[28rem] md:max-w-[46rem] lg:max-w-[70rem]">

        <div className="overflow-hidden border-2 border-[#bcc5ea] bg-[#ece7f7] shadow-[4px_4px_0_#d7d0ef]">
        

          {/* Window Header */}
          <div className="flex items-center justify-between border-b-2 border-[#bcc5ea] bg-blue-300 px-3 py-2 sm:px-4">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center border border-[#bcc5ea] bg-[#f8f6ff] text-[0.8rem] text-[#6f8de6] shadow-[inset_1px_1px_0_#ffffff,inset_-1px_-1px_0_#dcd3f7]">
                🍴
              </span>
              <span className="font-Dos text-[0.9rem] text-white sm:text-[1rem] md:text-[1.1rem]">
                cooking_diary.exe
              </span>
            </div>

            <div className="flex items-center gap-1">
              <span className="flex h-5 w-5 items-center justify-center border border-[#bcc5ea] bg-[#f8f6ff] text-[0.65rem] text-[#5a6fb8] shadow-[inset_1px_1px_0_#ffffff,inset_-1px_-1px_0_#dcd3f7]">
                _
              </span>
              <span className="flex h-5 w-5 items-center justify-center border border-[#bcc5ea] bg-[#f8f6ff] text-[0.62rem] text-[#5a6fb8] shadow-[inset_1px_1px_0_#ffffff,inset_-1px_-1px_0_#dcd3f7]">
                □
              </span>
              <span className="flex h-5 w-5 items-center justify-center border border-[#bcc5ea] bg-[#f8f6ff] text-[0.65rem] text-[#5a6fb8] shadow-[inset_1px_1px_0_#ffffff,inset_-1px_-1px_0_#dcd3f7]">
                ✕
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="bg-[#f8f4ff] p-4 sm:p-5 md:p-6">

            <div className="mb-4 flex items-center justify-center gap-2 text-center">
              <h5 className="font-Dos text-[1.2rem] text-[#5a6fb8] sm:text-[1.35rem] md:text-[1.6rem]">
                I enjoy cooking
              </h5>
              <img loading="lazy" src={Heart} alt="Heart" className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8" />
            </div>

            <p className="mb-5 text-center font-mono text-[0.8rem] leading-relaxed text-[#8b99d6] sm:text-[0.88rem] md:text-[0.95rem]">
              One of my favourite ways to unwind is making comforting meals and
              cute desserts.
            </p>

           <div className="relative rounded-md border border-dashed border-[#3461f8] bg-[#eef3ff] p-3 sm:p-4">
          <div className="absolute right-[-2rem] top-[-3rem] z-20 pointer-events-none sm:w-[5rem]">
            <Pointercursor />
          </div>

  <Slider ref={sliderRef} {...settings}>
    {photos.map((photo) => (
      <div key={photo.id} className="outline-none">
        <div className="flex justify-center rounded-lg p-2">
          <div className={`w-full ${frameClass}`}>
            <img
              src={photo.src}
              alt={photo.alt}
              onLoad={photo.id === currentSlide + 1 ? handleImageLoad : undefined}
              className={`mx-auto h-auto w-full rounded-md object-contain ${imageClass}`}
            />
          </div>
        </div>
      </div>
    ))}
  </Slider>
</div>

            <div className="mt-4 flex items-center justify-between gap-3">
              <button
                onClick={() => sliderRef.current?.slickPrev()}
                className="border border-[#bcc5ea] bg-[#f8f6ff] px-3 py-2 font-Dos text-[0.72rem] text-[#5a6fb8] shadow-[inset_1px_1px_0_#ffffff,inset_-1px_-1px_0_#dcd3f7] hover:bg-[#eef3ff]"
              >
                ◁ Prev
              </button>

              <div className="font-Dos text-[0.72rem] text-[#8b99d6]">
                {String(currentSlide + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}
              </div>

              <button
                onClick={() => sliderRef.current?.slickNext()}
                className="border border-[#bcc5ea] bg-[#f8f6ff] px-3 py-2 font-Dos text-[0.72rem] text-[#5a6fb8] shadow-[inset_1px_1px_0_#ffffff,inset_-1px_-1px_0_#dcd3f7] hover:bg-[#eef3ff]"
              >
                Next ▷
              </button>
            </div>

            <div className="mt-5 rounded-md border border-[#d7def6] bg-[#eef3ff] p-3 shadow-[inset_1px_1px_0_#ffffff,inset_-1px_-1px_0_#dfe7fb]">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-Dos text-[0.72rem] text-[#9aa6df]">
                  dish:
                </span>
                <span className="font-Dos text-[0.82rem] text-[#5a6fb8]">
                  {activePhoto.title}
                </span>
                <span className="rounded-full border border-[#3461f8] px-2 py-1 font-mono text-[0.68rem] text-[#8b99d6]">
                  {activePhoto.tag}
                </span>
              </div>

              <p className="mt-2 font-mono text-[0.76rem] leading-relaxed text-[#6f7fb8]">
                {activePhoto.note}
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default FoodSlider;