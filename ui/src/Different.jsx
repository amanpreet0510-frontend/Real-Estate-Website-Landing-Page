import React from 'react';
import Services from "../src/Services";
import differentData from "../data/different.json";
import Card from "./Card";


const Different = () => {
  return (
    <>
      <div className="">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-16 lg:gap-[321px] text-center md:text-left">
            <h1 className="pt-[40px] md:pt-[80px] pb-[40px] md:pb-[80px] font-[600] text-[#242527] text-[32px] sm:text-[46px] md:w-1/2 lg:w-[45%] max-w-[300px] sm:max-w-[400px]">
              What Make Us
              Different?
            </h1>
            <p className="pt-0 md:pt-[80px] pb-[40px] md:pb-[80px] leading-[30px] sm:leading-[40px] font-[500] text-[16px] sm:text-[18px] text-[#C4C4C4] md:w-1/2 lg:w-[45%] max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] ">
              Check out our best service you can possibly orders in building
              your company and don't forget to ask via our email or our
              customer service if you are interested in using our services
            </p>
          </div>
          <div>
            <div className="pb-[113px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12 lg:gap-[100px] place-items-center">
              {differentData?.image?.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="relative w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] mx-auto">
                    <img
                      src={differentData?.backgroundimage1}
                      className="w-full h-full rounded-full object-cover"
                    />
                    <div className="absolute top-1/2 left-1/2 w-[50px] sm:w-[70px] h-[50px] sm:h-[70px] -translate-x-1/2 -translate-y-1/2 rounded-full overflow-hidden flex items-center justify-center">
                      <img
                        src={differentData?.backgroundimage2}
                        className="absolute w-full h-full object-cover rounded-full"
                      />
                      <img
                        src={item?.vector}
                        className="relative w-[24px] sm:w-[32px] h-[22px] sm:h-[29px]"
                      />
                    </div>
                  </div>
                  <h3 className="mt-4 font-semibold text-[16px] sm:text-[18px]">{differentData?.SubTitle?.[index]?.label}</h3>
                  <p className="mt-2 text-[14px] sm:text-sm">{differentData?.Subdescription?.[index]?.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Different;