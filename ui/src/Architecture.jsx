import React from "react";
import archData from "../data/architecture.json"; 
import Button from "./Button";

const Architecture = () => {
  return (
    <>
    <div className="pb-[132px]">
      <div className="container flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8 lg:gap-12 xl:gap-[80px]">
        <div className="relative lg:w-1/2">
          <img src={archData?.mainimage} className="w-full h-auto" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:top-[60%] lg:left-[58%] lg:-translate-x-1/2 lg:-translate-y-1/2 xl:top-[55%] xl:left-[62%] bg-gradient-to-t from-[#474747] to-[#222222] w-[220px] sm:w-[294px] h-[220px] sm:h-[312px] rounded-[25px]" >
            <img className='w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] mt-[20px] sm:mt-[33px] m-[50px] sm:m-[97px] mb-[20px] sm:mb-[28px]' src={archData?.image}/>
            <h3 className='font-[600] text-[18px] sm:text-[22px] text-[#FFFFFF] m-[30px] sm:m-[65px] mt-0 mb-[10px] sm:mb-[13px]'>{archData?.CardHeading}</h3>
            <p className='font-[400] text-[12px] sm:text-[14px] leading-[20px] sm:leading-[25px] text-[#E5E5E5] m-[20px] sm:m-[30px] mt-0'>{archData?.CardDescription}</p>
          </div>
        </div>
        <div className="mt-[60px] lg:mt-0 lg:w-1/2 gap-[50px] lg:gap-[100px] xl:gap-[200px] text-center lg:text-left">
          <h1 className="text-[32px] sm:text-[46px] font-[600] text-[#242527] max-w-full lg:max-w-[480px]">Meet and talk with our best architecture</h1>
          <p className="font-[500] text-[16px] sm:text-[18px] text-[#C4C4C4] max-w-full lg:max-w-[400px] leading-[30px] sm:leading-[40px] mt-[36px]">
            All our teams are professional and competent in their fields and
            will help you realize your dream building with the excellent result.
          </p>
          <div className='flex flex-col sm:flex-row items-center mt-[59px] gap-4'>
          <Button text="see all team"
          className="bg-[#0A72AD] text-amber-50"
          style={{width:"200px",height:"60px"}}
          />
           <div className='flex items-center gap-2'>
             <h2> How it works </h2>
             <img src={archData?.arrow} />
           </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Architecture;
