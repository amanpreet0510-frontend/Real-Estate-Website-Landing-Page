import React from "react";
import { image } from "../data/services.json";
import { Title } from "../data/services.json";
import { description } from "../data/services.json";

const Services = () => {
  return (
    <>
      <div className="bg-[#F6F6F6CC]">
        <div className="container">
          <div className="flex justify-around place-items-center gap-[321px]">
            <h1 className="pt-[80px] pb-[80px] left-0 font-[600] text-[#242527] text-[46px] max-w-[400px]">
              Our Excellent Services
            </h1>
            <p className="pt-[80px] pb-[107px] leading-[40px] font-[500] text-[18px] text-[#C4C4C4] max-w-[500px] ">
              Check out our best service you can possibly orders in building
              your company and don't forget to ask via our email or our customer
              service if you are interested in using our services
            </p>
          </div>
          <div>
            <div className="pb-[113px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
              {image.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col"
                >
                  <img key={index} src={item.img1} height={287} width={368} />
                  <h2 className="mt-[38px] text-[#242527] text-[28px] font-[600] ">
                    {Title[index]?.label}
                  </h2>
                  <p className="mt-[37px] leading-[40px] text-[#C4C4C4] text-[18px] font-[500] max-w-[350px] break-all">
                    {description[index]?.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
