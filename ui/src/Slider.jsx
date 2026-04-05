import React, { useState } from "react";
import sliderData from "../data/slider.json";

const Slider = () => {
  const slides = [sliderData, sliderData, sliderData];
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative overflow-hidden mt-[60px] mb-[60px]">
      <div className="container">

        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((data, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20  p-6 lg:p-[60px] w-full shrink-0"
            >
              
              {/* Image Section */}
              <div className="relative flex justify-center w-full lg:w-auto">
                <img
                  src={data?.mainimage}
                  alt="slider"
                  className="w-[150px] h-[170px] lg:w-[269px] lg:h-[344px]"
                />

                <img
                  src="./Ellipse.png"
                  alt="ellipse"
                  className="absolute top-25 right-[-20px] w-[60px] lg:w-[82px]"
                />

                <img
                  src="./quote.png"
                  alt="quote"
                  className="absolute top-[115px] right-[3px] w-[14px] lg:w-[17px]"
                />

                {/* Small Card */}
                <div className="absolute -bottom-22 md:-bottom-10 bg-white w-[230px] lg:w-[263px] p-4 text-center shadow-lg">
                  <p className="text-[18px] lg:text-[22px] font-semibold">
                    {data?.smallHeading}
                  </p>
                  <p className="text-[12px] lg:text-[13px] text-[#939393] mt-2 leading-5">
                    {data?.smallDescription}
                  </p>
                </div>
              </div>

              {/* Text Section */}
              <div className="w-full lg:w-[40%] text-center lg:text-left mt-16 lg:mt-0">
                <h1 className="text-white text-[22px] md:text-[30px] lg:text-[36px] font-semibold leading-8 lg:leading-12">
                  {data?.Heading}
                </h1>

                <p className="text-[#C4C4C4] text-[14px] md:text-[16px] lg:text-[18px] mt-6 leading-7">
                  {data?.Description}
                </p>

                {/* Arrows */}
                <div className="flex gap-3 justify-center lg:justify-start mt-8">
                  <div
                    onClick={prevSlide}
                    className="hover:bg-[#0A72AD] h-12 w-12 lg:h-16 lg:w-16 flex items-center justify-center cursor-pointer"
                  >
                    <img src="./left-arrow.png" alt="arrow" className="w-5" />
                  </div>

                  <div
                    onClick={nextSlide}
                    className="hover:bg-[#0A72AD] h-12 w-12 lg:h-16 lg:w-16 flex items-center justify-center cursor-pointer"
                  >
                    <img src="./right arrow.png" alt="arrow" className="w-5" />
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Slider;