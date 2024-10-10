import React, { useState, useEffect } from "react";
import "./1.css";

const images = [
  "https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(19).webp",
  "https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(65).webp",
  "https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(11).webp",
  "https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(99).webp",
  "https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(41).webp",
];

const titles = ["One", "Two", "Three", "Four", "Five"];

const CarouselComponent: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Autoplay functionality: increment activeIndex every 3 seconds unless hovered
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000); // Change the interval as needed

      return () => clearInterval(interval); // Cleanup on component unmount
    }
  }, [isHovered]); // Re-run the effect when hover state changes

  // Function to dynamically assign classNames based on the activeIndex
  const getClassNames = (index: number) => {
    if (index === activeIndex) return "active-slide";
    if (index === (activeIndex + 1) % images.length) return "right-slide";
    if (index === (activeIndex + 2) % images.length) return "far-right-slide";
    if (index === (activeIndex - 1 + images.length) % images.length)
      return "left-slide";
    if (index === (activeIndex - 2 + images.length) % images.length)
      return "far-left-slide";
    return "hidden-slide";
  };

  // Handler for dot click to set active index
  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div
      id="slider"
      onMouseEnter={() => setIsHovered(true)} // Stop autoplay on hover
      onMouseLeave={() => setIsHovered(false)} // Resume autoplay on mouse leave
    >
      {images.map((img, index) => (
        <label
          key={index}
          className={`slider-item ${getClassNames(index)} ${
            activeIndex === index && isHovered ? "transparent" : ""
          }`}
          id={`slider${index + 1}`}
        >
          <img src={img} alt={`image${index + 1}`} />
          <h1>{titles[index]}</h1>
          {/* "Click here" text will appear on hover */}
          {activeIndex === index && isHovered && (
            <span className="click-here-text">Click here</span>
          )}
        </label>
      ))}
      {/* Indicators */}
      <div className="indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`indicator ${activeIndex === index ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default CarouselComponent;
