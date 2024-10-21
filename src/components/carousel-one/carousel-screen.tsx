// CarouselScreen.tsx
import React from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import "./1.css";
import { Link } from "react-router-dom";

interface CarouselScreenProps {
  images: string[];
  titles: string[];
  activeIndex: number;
  isHovered: boolean;
  setIsHovered: (hovered: boolean) => void;
  getClassNames: (index: number) => string;
  handleDotClick: (index: number) => void;
  handleRightClick: () => void;
  handleLeftClick: () => void;
}

const CarouselScreen: React.FC<CarouselScreenProps> = ({
  images,
  titles,
  activeIndex,
  isHovered,
  setIsHovered,
  getClassNames,
  handleDotClick,
  handleRightClick,
  handleLeftClick,
}) => {
  return (
    <div className="bg-[#2B170A]">
      <div className="flex justify-between items-center px-2 lg:px-8">
        <h2 className="text-lg md:text-3xl lg:text-4xl font-Poppins text-white">
          Favourite{" "}
          <span className="font-Rufina text-[#FF6600]">
            Holiday Destinations
          </span>
        </h2>
        <Link
          to="#"
          className="text-[10px] md:text-base text-white underline font-Poppins"
        >
          Advertise with us
        </Link>
      </div>
      <div
        id="slider"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="bg-red-400">
          {images.map((img, index) => (
            <label
              key={index}
              className={`slider-item ${getClassNames(index)} ${
                activeIndex === index && isHovered ? "transparent" : ""
              }`}
              id={`slider${index + 1}`}
            >
              <img src={img} alt={`image${index + 1}`} />
              <h1 className="text-sm">{titles[index]}</h1>
              {activeIndex === index && isHovered && (
                <span className="click-here-text">Click here</span>
              )}
            </label>
          ))}
        </div>
        {/* Indicators */}
      </div>
      <div className="indicators">
        <FaArrowLeftLong
          className="mr-5 cursor-pointer"
          onClick={handleLeftClick}
          color="#fff"
        />
        {images.map((_, index) => (
          <span
            key={index}
            className={`indicator ${activeIndex === index ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
        <FaArrowRightLong
          className="ml-5 cursor-pointer"
          onClick={() => handleRightClick()}
          color="#fff"
        />
      </div>
    </div>
  );
};

export default CarouselScreen;
