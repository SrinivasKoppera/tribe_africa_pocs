// CharmingHotelsCarouselScreen.tsx
import React from "react";
import { Link } from "react-router-dom";

interface CarouselScreenProps {
  images: string[];
  currentIndex: number;
  itemsPerPage: number;
  handleNext: () => void;
  handlePrev: () => void;
  isNextDisabled: boolean;
  isPrevDisabled: boolean;
}

const CharmingHotelsCarouselScreen: React.FC<CarouselScreenProps> = ({
  images,
  currentIndex,
  handleNext,
  handlePrev,
  isNextDisabled,
  isPrevDisabled,
  itemsPerPage,
}) => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-12 gap-4 items-center mx-6 md:mx-10 lg:mx-14 mb-2">
        <h1 className="col-span-12 md:col-span-6 text-2xl md:text-3xl lg:text-4xl">
          Charming <span className="text-orange-400">Hotels</span>
        </h1>
        <Link
          to={"#"}
          className="col-span-12 md:col-span-6 text-[10px] md:text-base md:text-right text-orange-400 underline flex items-center justify-start md:justify-end"
        >
          Advertise with Us
        </Link>
      </div>

      <div className="relative w-full flex items-center justify-center">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          disabled={isPrevDisabled}
          className={`absolute left-0 md:left-2 lg:left-7 top-1/2 border-2 border-slate-200 transform -translate-y-1/2 z-10 flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-white rounded-full p-0 border border-gray-500 ${
            isPrevDisabled
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-200"
          }`}
        >
          <span className="text-4xl">&#8249;</span>
        </button>

        {/* Carousel Images */}
        <div className="flex overflow-hidden w-11/12">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
            }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="w-full px-2 sm:w-1/1 md:w-1/2 lg:w-1/3 flex-shrink-0"
                style={{ minWidth: "33.3333%" }}
              >
                <img
                  src={image}
                  alt={`carousel-${index}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          disabled={isNextDisabled}
          className={`absolute right-0 md:right-2 lg:right-7 border-2 border-slate-200 top-1/2 transform -translate-y-1/2 z-10 flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-white rounded-full p-0 border border-gray-500 ${
            isNextDisabled
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-200"
          }`}
        >
          <span className="text-4xl">&#8250;</span>
        </button>
      </div>
    </div>
  );
};

export default CharmingHotelsCarouselScreen;
