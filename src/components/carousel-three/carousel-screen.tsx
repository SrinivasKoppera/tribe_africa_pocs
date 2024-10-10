import React, { useState } from "react";

interface CarouselItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

const carouselData: CarouselItem[] = [
  {
    id: 1,
    title: "Title 1",
    description: "Description 1",
    image:
      "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
  },
  {
    id: 2,
    title: "Title 2",
    description: "Description 2",
    image:
      "https://cdn.fstoppers.com/styles/full/s3/media/2019/12/04/nando-jpeg-quality-001.jpg",
  },
  {
    id: 3,
    title: "Title 3",
    description: "Description 3",
    image:
      "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
  },
  {
    id: 4,
    title: "Title 4",
    description: "Description 4",
    image:
      "https://photographylife.com/wp-content/uploads/2018/11/Moeraki-Boulders-New-Zealand.jpg",
  },
  {
    id: 5,
    title: "Title 5",
    description: "Description 5",
    image:
      "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
  },
  {
    id: 6,
    title: "Title 6",
    description: "Description 6",
    image:
      "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
  },
  {
    id: 7,
    title: "Title 7",
    description: "Description 7",
    image:
      "https://photographylife.com/wp-content/uploads/2018/11/Moeraki-Boulders-New-Zealand.jpg",
  },
  {
    id: 8,
    title: "Title 8",
    description: "Description 8",
    image:
      "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
  },
  {
    id: 9,
    title: "Title 9",
    description: "Description 9",
    image:
      "https://photographylife.com/wp-content/uploads/2018/11/Moeraki-Boulders-New-Zealand.jpg",
  },
];

const BusinessCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < carouselData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 bg-gray-200">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-8">
        Great For <span className="text-orange-600">Working Remotely</span>
      </h1>
      <div className="relative flex items-center">
        {/* Left Arrow */}
        <button
          className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg ${
            currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          ◀
        </button>

        {/* Text and Image */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Text container */}
          <div className="flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
              <h2 className="text-xl font-semibold mb-2">
                {carouselData[currentIndex].title}
              </h2>
              <p className="text-gray-600">
                {carouselData[currentIndex].description}
              </p>
            </div>
          </div>

          {/* Image container*/}

          <div className="w-full overflow-hidden rounded-lg shadow-lg">
            <img
              src={carouselData[currentIndex].image}
              alt={carouselData[currentIndex].title}
              className="w-full h-64 md:h-80 lg:h-96 object-cover transition-transform duration-500 ease-out"
            />
          </div>
        </div>

        {/* Right Arrow */}
        <button
          className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg ${
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

export default BusinessCarousel;
