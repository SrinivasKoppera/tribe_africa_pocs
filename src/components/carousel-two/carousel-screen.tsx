import React, { useState } from "react";
import { Link } from "react-router-dom";

interface CarouselProps {
  images: string[];
}

const CharmingHotelsCarouselComponent: React.FC<CarouselProps> = ({
  images = [
    "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
    "https://photographylife.com/wp-content/uploads/2018/11/Moeraki-Boulders-New-Zealand.jpg",
    "https://cdn.fstoppers.com/styles/full/s3/media/2019/12/04/nando-jpeg-quality-001.jpg",
    "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
    "https://photographylife.com/wp-content/uploads/2018/11/Moeraki-Boulders-New-Zealand.jpg",
    "https://cdn.fstoppers.com/styles/full/s3/media/2019/12/04/nando-jpeg-quality-001.jpg",
    "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
    "https://photographylife.com/wp-content/uploads/2018/11/Moeraki-Boulders-New-Zealand.jpg",
    "https://cdn.fstoppers.com/styles/full/s3/media/2019/12/04/nando-jpeg-quality-001.jpg",
  ],
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const handleNext = () => {
    if (currentIndex + itemsPerPage < images.length) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (currentIndex - itemsPerPage >= 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  const isNextDisabled = currentIndex + itemsPerPage >= images.length;
  const isPrevDisabled = currentIndex === 0;

  return (
    <div className="bg-gray-200">
      <div className="grid grid-cols-12 gap-4 items-center mx-14 mb-2">
        <h1 className="col-span-12 md:col-span-6 text-2xl md:text-3xl lg:text-4xl">
          Charming <span className="text-orange-400">Hotels</span>
        </h1>
        <Link
          to={"#"}
          className="col-span-12 md:col-span-6 text-1xl md:text-2xl md:text-right flex items-center justify-start md:justify-end"
        >
          Advertise with Us
        </Link>
      </div>

      <div className="relative w-full flex items-center justify-center">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          disabled={isPrevDisabled}
          className={`absolute left-6 top-1/2 border-2 border-slate-200 transform -translate-y-1/2 z-10 flex items-center justify-center w-16 h-16 bg-white rounded-full p-0 ${
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
          className={`absolute right-6 border-2 border-slate-200 top-1/2 transform -translate-y-1/2 z-10 flex items-center justify-center w-16 h-16 bg-white rounded-full p-0 ${
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

export default CharmingHotelsCarouselComponent;
