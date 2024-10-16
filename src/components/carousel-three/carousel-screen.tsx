// BusinessCarouselScreen.tsx
import React from "react";

interface CarouselItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface BusinessCarouselScreenProps {
  carouselData: CarouselItem[];
  currentIndex: number;
  handleNext: () => void;
  handlePrev: () => void;
}

const BusinessCarouselScreen: React.FC<BusinessCarouselScreenProps> = ({
  carouselData,
  currentIndex,
  handleNext,
  handlePrev,
}) => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 bg-gray-200">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-8">
        Great For <span className="text-orange-600">Working Remotely</span>
      </h1>
      <div className="relative flex sm:flex-col items-center">
        {/* Left Arrow */}
        <button
          className={`absolute left-0 top-2/3 md:top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-20 border border-slate-300 ${
            currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          ◀
        </button>

        {/* Text and Image */}
        <div className="w-full flex flex-col md:flex-row relative items-center">
          {/* Text container */}
          <div className="w-full relative z-10 bg-white rounded-lg shadow-lg w-full max-w-md">
            <div className="bg-white p-8 pl-10 rounded-lg shadow-lg w-full md:max-w-[53rem] md:w-[130%]">
              <h2 className="text-xl font-semibold mb-2">
                {carouselData[currentIndex].title}
              </h2>
              <p className="text-gray-600">
                {carouselData[currentIndex].description}
              </p>
            </div>
          </div>

          {/* Image container */}
          <div className="w-full relative md:ml-12 overflow-hidden rounded-lg shadow-lg">
            <img
              src={carouselData[currentIndex].image}
              alt={carouselData[currentIndex].title}
              className="h-64 md:h-80 lg:h-96 object-cover transition-transform duration-500 ease-out"
            />
          </div>
        </div>

        {/* Right Arrow */}
        <button
          className={`absolute right-0 top-2/3 md:top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg border-slate-300 ${
            currentIndex === carouselData.length - 1
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
          onClick={handleNext}
          disabled={currentIndex === carouselData.length - 1}
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default BusinessCarouselScreen;
