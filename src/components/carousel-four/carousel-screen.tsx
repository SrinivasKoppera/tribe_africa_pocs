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

const BusinessFriendlyCarouselScreen: React.FC<BusinessCarouselScreenProps> = ({
  carouselData,
  currentIndex,
  handleNext,
  handlePrev,
}) => {
  return (
    <div className="container w-full max-w-6xl mx-auto px-8 py-8">
      <h1 className="text-2xl md:text-4xl font-bold mb-8">
        <span className="text-orange-600">Business </span>Friendly
      </h1>
      <div className="relative flex sm:flex-col items-center">
        {/* Left Arrow */}
        <button
          className={`absolute -left-7 top-2/3 md:top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-20 border w-12 h-12 md:w-16 md:h-16 border-slate-300 ${
            currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          {/* ◀ */}
          <span className="text-4xl leading-6">&#8249;</span>
        </button>

        {/* Text and Image */}
        <div className="w-full flex flex-col md:flex-row-reverse relative items-center">
          {/* Text container */}
          <div className="w-full md:-ml-10 mb-3 md:mb-0 z-10 relative bg-white rounded-lg shadow-lg">
            <div className="bg-white p-8 md:-ml-10 rounded-lg w-full md:max-w-[53rem]">
              <h2 className="text-xl font-semibold mb-2">
                {carouselData[currentIndex].title}
              </h2>
              <p className="text-gray-600">
                {carouselData[currentIndex].description}
              </p>
            </div>
          </div>

          {/* Image container */}
          <div className="w-full relative overflow-hidden rounded-lg shadow-lg">
            <img
              src={carouselData[currentIndex].image}
              alt={carouselData[currentIndex].title}
              className="h-64 md:h-80 lg:h-96 object-cover transition-transform duration-500 ease-out"
            />
          </div>
        </div>

        {/* Right Arrow */}
        <button
          className={`absolute z-30 -right-7 top-2/3 md:top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full w-12 h-12 md:w-16 md:h-16 shadow-lg border-slate-300 ${
            currentIndex === carouselData.length - 1
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
          onClick={handleNext}
          disabled={currentIndex === carouselData.length - 1}
        >
          {/* ▶ */}
          <span className="text-4xl leading-6">&#8250;</span>
        </button>
      </div>
    </div>
  );
};

export default BusinessFriendlyCarouselScreen;
