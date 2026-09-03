import React, { useMemo, useState } from "react";

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

const TravelPhotos = () => {
  const photos = useMemo(
    () => [
      {
        id: 1,
        fileName: "changhua_taiwan.jpg",
        src: Field,
        alt: "the backyard from my grandmother's home in Changhua, Taiwan",
        location: "Changhua, Taiwan",
        note: "Golden fields and a soft quiet moment.",
        type: "JPEG image",
        size: "1.1 MB",
        created: "Saved in travel memories",
      },
      {
        id: 2,
        fileName: "nova_scotia_01.jpg",
        src: Nova,
        alt: "Nova Scotia ocean view",
        location: "Nova Scotia, Canada",
        note: "Cool air, open views, and calm scenery.",
        type: "JPEG image",
        size: "1.2 MB",
        created: "Saved in travel memories",
      },
      {
        id: 3,
        fileName: "tokyo_japan.jpg",
        src: Street,
        alt: "Shopping district in Tokyo",
        location: "Tokyo, Japan",
        note: "City lights and little details everywhere.",
        type: "JPEG image",
        size: "1.4 MB",
        created: "Saved in travel memories",
      },
      {
        id: 4,
        fileName: "brooklyn_ny.jpg",
        src: Brook,
        alt: "Brooklyn bridge in New York",
        location: "Brooklyn, New York",
        note: "A lively city memory I still really love.",
        type: "JPEG image",
        size: "1.0 MB",
        created: "Saved in travel memories",
      },
      {
        id: 5,
        fileName: "utrecht_netherlands.jpg",
        src: River,
        alt: "A river near my hotel in Amsterdam, Netherlands",
        location: "Utrecht, Netherlands",
        note: "Peaceful water views and dreamy streets.",
        type: "JPEG image",
        size: "1.3 MB",
        created: "Saved in travel memories",
      },
      {
        id: 6,
        fileName: "tainan_taiwan.jpg",
        src: Bridge,
        alt: "One of the bridges I visited with my aunt in Taiwan",
        location: "Tainan, Taiwan",
        note: "Warm weather, history, and familiar comfort.",
        type: "JPEG image",
        size: "1.1 MB",
        created: "Saved in travel memories",
      },
      {
        id: 7,
        fileName: "nova_scotia_02.jpg",
        src: Lake,
        alt: "A scenic place in Nova Scotia",
        location: "Nova Scotia, Canada",
        note: "One of those places that feels still and clear.",
        type: "JPEG image",
        size: "1.2 MB",
        created: "Saved in travel memories",
      },
      {
        id: 8,
        fileName: "dog_fountain.jpg",
        src: Doggo,
        alt: "A cute dog drinking fountain in Nova Scotia",
        location: "Nova Scotia, Canada",
        note: "A tiny detail that made the place feel extra charming.",
        type: "JPEG image",
        size: "1.0 MB",
        created: "Saved in travel memories",
      },
      {
        id: 9,
        fileName: "hobbit_hill.jpg",
        src: Hobbit,
        alt: "Hobbit hill in Taiwan with capybaras and goats",
        location: "Taiwan",
        note: "A cute and funny stop that felt a little unreal.",
        type: "JPEG image",
        size: "1.2 MB",
        created: "Saved in travel memories",
      },
      {
        id: 10,
        fileName: "gallery_ceiling.jpg",
        src: Gallery,
        alt: "New York art gallery with impressive ceiling art",
        location: "New York, USA",
        note: "The ceiling details were the best part for me.",
        type: "JPEG image",
        size: "1.3 MB",
        created: "Saved in travel memories",
      },
      {
        id: 11,
        fileName: "funny_photo.jpg",
        src: Mm,
        alt: "A hilarious photo I regret not buying",
        location: "Travel memory",
        note: "Still thinking about it to this day.",
        type: "JPEG image",
        size: "1.1 MB",
        created: "Saved in travel memories",
      },
      {
        id: 12,
        fileName: "kirby_cafe.jpg",
        src: Kirb,
        alt: "Kirby Cafe food",
        location: "Tokyo, Japan",
        note: "Cute and worth seeing, even if it was a little pricey.",
        type: "JPEG image",
        size: "1.4 MB",
        created: "Saved in travel memories",
      },
      {
        id: 13,
        fileName: "nova_scotia_ocean.jpg",
        src: Ocean,
        alt: "Nova Scotia ocean views",
        location: "Nova Scotia, Canada",
        note: "Beautiful water, even with all the mosquitoes.",
        type: "JPEG image",
        size: "1.3 MB",
        created: "Saved in travel memories",
      },
      {
        id: 14,
        fileName: "sensoji_shrine.jpg",
        src: Sensoji,
        alt: "The Sensoji Shrine entrance",
        location: "Tokyo, Japan",
        note: "I did an omikuji there, which made it extra memorable.",
        type: "JPEG image",
        size: "1.2 MB",
        created: "Saved in travel memories",
      },
      {
        id: 15,
        fileName: "night_shopping_street.jpg",
        src: Shop,
        alt: "A shopping street in Nova Scotia at night",
        location: "Nova Scotia, Canada",
        note: "Cute lights and arches made it feel really cozy.",
        type: "JPEG image",
        size: "1.2 MB",
        created: "Saved in travel memories",
      },
      {
        id: 16,
        fileName: "amsterdam_tulips_01.jpg",
        src: Toolip,
        alt: "Red tulips in Amsterdam",
        location: "Amsterdam, Netherlands",
        note: "I cannot wait to visit again.",
        type: "JPEG image",
        size: "1.1 MB",
        created: "Saved in travel memories",
      },
      {
        id: 17,
        fileName: "tokyo_tower.jpg",
        src: Tower,
        alt: "Tokyo Tower",
        location: "Tokyo, Japan",
        note: "I am terrified of heights, but I still went up anyway.",
        type: "JPEG image",
        size: "1.3 MB",
        created: "Saved in travel memories",
      },
      {
        id: 18,
        fileName: "amsterdam_tulips_02.jpg",
        src: Tulip,
        alt: "More tulips in Amsterdam",
        location: "Amsterdam, Netherlands",
        note: "Tulips always make me happy.",
        type: "JPEG image",
        size: "1.1 MB",
        created: "Saved in travel memories",
      },
    ],
    []
  );

  const [selectedId, setSelectedId] = useState(photos[0].id);
  const [showFullFolder, setShowFullFolder] = useState(false);

  const selectedPhoto =
    photos.find((photo) => photo.id === selectedId) || photos[0];

  const goPrev = () => {
    const currentIndex = photos.findIndex((photo) => photo.id === selectedId);
    const nextIndex = currentIndex === 0 ? photos.length - 1 : currentIndex - 1;
    setSelectedId(photos[nextIndex].id);
  };

  const goNext = () => {
    const currentIndex = photos.findIndex((photo) => photo.id === selectedId);
    const nextIndex = currentIndex === photos.length - 1 ? 0 : currentIndex + 1;
    setSelectedId(photos[nextIndex].id);
  };

  return (
    <section className="mx-auto mt-8 w-full max-w-[24rem] sm:max-w-[28rem] md:max-w-[46rem] lp:max-w-[42rem] lg:max-w-[54rem]">
      <div className="overflow-hidden border-2 border-blue-200 bg-[#eee6f6] shadow-[4px_4px_0_#d6ccf5]">
        {/* Header */}
        <div className="flex items-center justify-between border-b-2 border-blue-200 bg-blue-300 px-3 py-2 sm:px-4">
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center border border-blue-200 bg-[#f8f4ff] text-[0.8rem] text-blue-400 shadow-[inset_1px_1px_0_#ffffff,inset_-1px_-1px_0_#dcd3f7]">
              ✈
            </span>
            <span className="font-Dos text-[0.9rem] text-white sm:text-[1rem] md:text-[1.1rem]">
              travel_photos.exe
            </span>
          </div>

          <div className="flex items-center gap-1">
            <span className="flex h-5 w-5 items-center justify-center border border-blue-200 bg-[#f8f4ff] text-[0.65rem] text-blue-400 shadow-[inset_1px_1px_0_#ffffff,inset_-1px_-1px_0_#dcd3f7]">
              _
            </span>
            <span className="flex h-5 w-5 items-center justify-center border border-blue-200 bg-[#f8f4ff] text-[0.62rem] text-blue-400 shadow-[inset_1px_1px_0_#ffffff,inset_-1px_-1px_0_#dcd3f7]">
              □
            </span>
            <span className="flex h-5 w-5 items-center justify-center border border-blue-200 bg-[#f8f4ff] text-[0.65rem] text-blue-400 shadow-[inset_1px_1px_0_#ffffff,inset_-1px_-1px_0_#dcd3f7] transition hover:bg-red-300 hover:text-white">
              ✕
            </span>
          </div>
        </div>

        {/* Intro */}
        <div className="border-b-2 border-blue-200 bg-[#f8f4ff] px-4 py-4 sm:px-5 md:px-6">
          <div className="mb-2 flex items-center justify-between gap-3">
            <h5 className="font-vcr text-[1.05rem] text-blue-500 sm:text-[1rem] md:text-[1.5rem]">
              I also love travelling & taking photos!
            </h5>
          </div>

          <p className="font-mono text-[0.78rem] leading-relaxed text-[#8b44fc] sm:text-[0.6rem] md:text-[0.95rem]">
            Because I have a memory of a goldfish...
          </p>
        </div>

        {/* SM + MD ONLY */}
        <div className="block lp:hidden">
          <div className="bg-[#f8f4ff] p-4 sm:p-5 md:p-6">
            <div className="mx-auto max-w-[26rem] rounded-[0.7rem] border-2 border-blue-200 bg-[linear-gradient(180deg,#f8f4ff_0%,#eef7ff_100%)] shadow-[inset_-2px_-2px_0_#ddd5f7,inset_2px_2px_0_#ffffff] sm:max-w-[30rem] md:max-w-[38rem]">
              <div className="p-4 sm:p-5">
                <div className="flex justify-center rounded-[0.5rem] border-2 border-blue-200 p-2 shadow-[inset_2px_2px_0_#ffffff,inset_-2px_-2px_0_#ece6fb]">
                  <div className="flex h-[16rem] w-full max-w-[22rem] items-center justify-center overflow-hidden rounded-[0.35rem] bg-[#f8f4ff] sm:h-[18rem] sm:max-w-[26rem] md:h-[21rem] md:max-w-[32rem]">
                    <img
                      key={selectedPhoto.id}
                      src={selectedPhoto.src}
                      alt={selectedPhoto.alt}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                </div>
              </div>

              <div className="px-4 pb-3 sm:px-5 md:px-6">
                <div className="rounded-[0.5rem] border-2 border-blue-200 bg-[#f8f4ff] px-3 py-3 shadow-[inset_2px_2px_0_#ffffff,inset_-2px_-2px_0_#ddd5f7]">
                  <h6 className="break-words font-Dos text-[0.95rem] text-blue-500 sm:text-[1.05rem] md:text-[1.15rem]">
                    {selectedPhoto.fileName}
                  </h6>
                  <p className="mt-1 font-mono text-[0.74rem] text-[#6fb8da] sm:text-[0.8rem] md:text-[0.88rem]">
                    {selectedPhoto.location}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between gap-3 px-4 pb-4 sm:px-5 md:px-6">
                <button
                  type="button"
                  onClick={goPrev}
                  className="shrink-0 font-Dos text-[1.25rem] text-blue-500 transition hover:text-[#6fb8da] sm:text-[1.4rem] md:text-[1.6rem]"
                  aria-label="Previous photo"
                >
                  &#60;
                </button>

                <div className="min-w-0 flex-1 overflow-x-auto">
                  <div className="flex min-w-max items-center justify-center gap-2">
                    {photos.map((photo) => {
                      const isSelected = photo.id === selectedId;

                      return (
                        <button
                          key={photo.id}
                          type="button"
                          onClick={() => setSelectedId(photo.id)}
                          className={`relative shrink-0 rounded-[0.35rem] border-2 p-1 transition ${
                            isSelected
                              ? "border-blue-200 bg-[#e4dbfa]"
                              : "border-blue-200 bg-white hover:bg-[#f1ebfb]"
                          }`}
                        >
                          <img
                            src={photo.src}
                            alt={photo.alt}
                            className="h-[3.8rem] w-[3.8rem] rounded-[0.25rem] object-cover sm:h-[4.3rem] sm:w-[4.3rem] md:h-[4.8rem] md:w-[4.8rem]"
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={goNext}
                  className="shrink-0 font-Dos text-[1.25rem] text-blue-500 transition hover:text-[#6fb8da] sm:text-[1.4rem] md:text-[1.6rem]"
                  aria-label="Next photo"
                >
                  &#62;
                </button>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between px-1">
              <div className="font-Dos text-[0.74rem] text-blue-400 sm:text-[0.78rem] md:text-[0.82rem]">
                {photos.findIndex((photo) => photo.id === selectedId) + 1} / {photos.length}
              </div>
            </div>
          </div>
        </div>

        {/* LP + LG ONLY */}
        <div className="hidden lp:block">
          <div className="bg-[#f8f4ff] px-5 py-6 lg:px-6 lp:px-6">
            <div className="mx-auto w-full max-w-[58rem] overflow-hidden border-2 border-blue-200 bg-[#eee6f6] shadow-[4px_4px_0_#d6ccf5]">
              <div className="grid grid-cols-[13rem_minmax(0,1fr)] lp:grid-cols-[14rem_minmax(0,1fr)]">
                {/* Left sidebar */}
                <div className="border-r-2 border-blue-200 bg-[#f8f4ff] px-3">
                  <h2 className="flex justify-center text-center lp:text-[2rem] font-vcr text-[#8758fe] underline decoration-dotted decoration-[#659bff] py-[1rem] ">
                    T.O.C
                  </h2>
                  <div className="max-h-[38rem] space-y-2 overflow-y-auto pr-1">
                    {photos.map((photo) => {
                      const isSelected = photo.id === selectedId;

                      return (
                        <button
                          key={photo.id}
                          type="button"
                          onClick={() => setSelectedId(photo.id)}
                          className={`flex w-full items-center gap-3 border-2 px-2.5 py-2 text-left transition ${
                            isSelected
                              ? "border-blue-200 bg-[#dcd3f7] text-blue-500 shadow-[inset_2px_2px_0_#ffffff,inset_-2px_-2px_0_#bfb3f3]"
                              : "border-blue-200 bg-[#eee6f6] text-blue-400 shadow-[inset_2px_2px_0_#ffffff,inset_-2px_-2px_0_#ddd5f7] hover:bg-[#e4dbfa]"
                          }`}
                        >
                          <div className="flex h-7 w-7 shrink-0 items-center justify-center border border-blue-200 bg-[#f8f4ff] text-[0.68rem] text-blue-400 shadow-[inset_1px_1px_0_#ffffff,inset_-1px_-1px_0_#dcd3f7]">
                            🖼
                          </div>

                          <div className="min-w-0">
                            <p className="truncate font-Dos text-[0.72rem]">
                              {photo.fileName}
                            </p>
                            <p
                              className={`truncate font-mono text-[0.6rem] ${
                                isSelected ? "text-[#6fb8da]" : "text-blue-400"
                              }`}
                            >
                              {photo.type}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Right preview panel */}
                <div className="bg-[#f8f4ff] px-4 py-4 lg:px-5 lg:py-5">
                  <div className="mx-auto flex h-full max-w-[36rem] flex-col">
                    <div className="flex justify-center">
                      <div className="w-full max-w-[26rem] ">
                        <div className="flex h-[22rem] items-center justify-center overflow-hidden bg-[#f8f4ff] lg:h-[30rem] lp:h-[30rem]">
                          <img
                            key={selectedPhoto.id}
                            src={selectedPhoto.src}
                            alt={selectedPhoto.alt}
                            className="max-h-full max-w-full object-contain"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 border-2 border-blue-200 bg-[#f8f4ff] p-3 shadow-[inset_2px_2px_0_#ffffff,inset_-2px_-2px_0_#ddd5f7]">
                      <div className="mb-3 inline-block border border-blue-200 bg-[#e4dbfa] px-3 py-1">
                        <span className="font-Dos text-[0.75rem] text-blue-500">
                          File Details
                        </span>
                      </div>

                      <h6 className="font-Dos text-[1.45rem] text-blue-500 lg:text-[1.6rem]">
                        {selectedPhoto.fileName}
                      </h6>

                      <p className="mt-2 font-mono text-[0.82rem] text-[#6fb8da]">
                        {selectedPhoto.type} - {selectedPhoto.size}
                      </p>

                      <div className="mt-3 space-y-2 font-mono text-[0.82rem] leading-relaxed text-blue-500">
                        <p>{selectedPhoto.location}</p>
                        <p>{selectedPhoto.note}</p>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={goPrev}
                        className="border-2 border-blue-200 bg-[#e8dcf8] px-3 py-2 font-Dos text-[0.74rem] text-blue-500 shadow-[inset_2px_2px_0_#ffffff,inset_-2px_-2px_0_#dcd3f7] transition hover:translate-y-[1px]"
                      >
                        &#60; Prev
                      </button>

                      <div className="font-Dos text-[0.74rem] text-blue-400">
                        {photos.findIndex((photo) => photo.id === selectedId) + 1} / {photos.length}
                      </div>

                      <button
                        type="button"
                        onClick={goNext}
                        className="border-2 border-blue-200 bg-[#e8dcf8] px-3 py-2 font-Dos text-[0.74rem] text-blue-500 shadow-[inset_2px_2px_0_#ffffff,inset_-2px_-2px_0_#dcd3f7] transition hover:translate-y-[1px]"
                      >
                        Next &#62;
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Full folder */}
            {showFullFolder && (
              <div className="mt-6 overflow-hidden border-2 border-blue-200 bg-[#eee6f6] shadow-[4px_4px_0_#d6ccf5]">
                <div className="flex items-center justify-between border-b-2 border-blue-200 bg-blue-300 px-3 py-2 sm:px-4">
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center border border-blue-200 bg-[#f8f4ff] text-[0.8rem] text-blue-400 shadow-[inset_1px_1px_0_#ffffff,inset_-1px_-1px_0_#dcd3f7]">
                      📁
                    </span>
                    <span className="font-Dos text-[0.9rem] text-white sm:text-[1rem] md:text-[1.1rem]">
                      travel_photo_folder.exe
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setShowFullFolder(false)}
                    className="flex h-5 w-5 items-center justify-center border border-blue-200 bg-[#f8f4ff] text-[0.65rem] text-blue-400 shadow-[inset_1px_1px_0_#ffffff,inset_-1px_-1px_0_#dcd3f7] transition hover:bg-red-300 hover:text-white"
                  >
                    ✕
                  </button>
                </div>

                <div className="bg-[#f8f4ff] p-4 sm:p-5 md:p-6">
                  <header className="mb-6 text-center">
                    <h1 className="font-Dos text-[1.4rem] text-blue-500 sm:text-[1.6rem] md:text-[1.9rem]">
                      Travel Photo Folder
                    </h1>
                    <p className="mt-2 font-mono text-[0.8rem] text-[#6fb8da] sm:text-[0.9rem] md:text-[1rem]">
                      A collection of photos of places I have been to since 2023.
                    </p>
                  </header>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lp:grid-cols-3">
                    {photos.map((photo) => (
                      <div
                        key={photo.id}
                        className="overflow-hidden border-2 border-blue-200 bg-[#eef3ff] p-2 shadow-[4px_4px_0_#d6ccf5]"
                      >
                        <div className="mb-2 border border-dashed border-blue-200 bg-white p-2">
                          <img
                            src={photo.src}
                            alt={photo.alt}
                            className="h-[14rem] w-full object-cover sm:h-[16rem]"
                          />
                        </div>

                        <div className="space-y-1">
                          <h6 className="truncate font-Dos text-[0.9rem] text-blue-500">
                            {photo.fileName}
                          </h6>
                          <p className="font-mono text-[0.72rem] text-[#6fb8da]">
                            {photo.location}
                          </p>
                          <p className="font-mono text-[0.72rem] leading-relaxed text-blue-500">
                            {photo.note}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex justify-center">
                    <button
                      type="button"
                      onClick={() => setShowFullFolder(false)}
                      className="border-2 border-blue-200 bg-[#e8dcf8] px-4 py-2 font-Dos text-[0.78rem] text-blue-500 shadow-[inset_2px_2px_0_#ffffff,inset_-2px_-2px_0_#dcd3f7] transition hover:translate-y-[1px]"
                    >
                      Close Folder
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Full folder for sm + md too */}
        {showFullFolder && (
          <div className="block lp:hidden border-t-2 border-blue-200 bg-[#f8f4ff] p-4 sm:p-5 md:p-6">
            <div className="overflow-hidden border-2 border-blue-200 bg-[#eee6f6] shadow-[4px_4px_0_#d6ccf5]">
              <div className="flex items-center justify-between border-b-2 border-blue-200 bg-blue-300 px-3 py-2 sm:px-4">
                <div className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center border border-blue-200 bg-[#f8f4ff] text-[0.8rem] text-blue-400 shadow-[inset_1px_1px_0_#ffffff,inset_-1px_-1px_0_#dcd3f7]">
                    📁
                  </span>
                  <span className="font-Dos text-[0.9rem] text-white sm:text-[1rem] md:text-[1.1rem]">
                    travel_photo_folder.exe
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setShowFullFolder(false)}
                  className="flex h-5 w-5 items-center justify-center border border-blue-200 bg-[#f8f4ff] text-[0.65rem] text-blue-400 shadow-[inset_1px_1px_0_#ffffff,inset_-1px_-1px_0_#dcd3f7] transition hover:bg-red-300 hover:text-white"
                >
                  ✕
                </button>
              </div>

              <div className="p-4 sm:p-5 md:p-6">
                <header className="mb-6 text-center">
                  <h1 className="font-Dos text-[1.2rem] text-blue-500 sm:text-[1.45rem] md:text-[1.6rem]">
                    Travel Photo Folder
                  </h1>
                  <p className="mt-2 font-mono text-[0.78rem] text-[#6fb8da] sm:text-[0.85rem] md:text-[0.92rem]">
                    A collection of photos of places I have been to since 2023.
                  </p>
                </header>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {photos.map((photo) => (
                    <div
                      key={photo.id}
                      className="overflow-hidden border-2 border-blue-200 bg-[#eef3ff] p-2 shadow-[4px_4px_0_#d6ccf5]"
                    >
                      <div className="mb-2 border border-dashed border-blue-200 bg-white p-2">
                        <img
                          src={photo.src}
                          alt={photo.alt}
                          className="h-[12rem] w-full object-cover sm:h-[14rem]"
                        />
                      </div>

                      <div className="space-y-1">
                        <h6 className="truncate font-Dos text-[0.82rem] text-blue-500">
                          {photo.fileName}
                        </h6>
                        <p className="font-mono text-[0.7rem] text-[#6fb8da]">
                          {photo.location}
                        </p>
                        <p className="font-mono text-[0.7rem] leading-relaxed text-blue-500">
                          {photo.note}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex justify-center">
                  <button
                    type="button"
                    onClick={() => setShowFullFolder(false)}
                    className="border-2 border-blue-200 bg-[#e8dcf8] px-4 py-2 font-Dos text-[0.75rem] text-blue-500 shadow-[inset_2px_2px_0_#ffffff,inset_-2px_-2px_0_#dcd3f7] transition hover:translate-y-[1px]"
                  >
                    Close Folder
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TravelPhotos;