import React from 'react';
import Services from "../src/Services";
import differentData from "../data/different.json";


const Different = () => {
  return (
    <>
      <div className="">
        <div className="container">
          <div className="flex justify-around place-items-center gap-[321px]">
            <h1 className="pt-[80px] pb-[80px] left-0 font-[600] text-[#242527] text-[46px] max-w-[400px]">
            What Make Us
            Different?
            </h1>
            <p className="pt-[80px] pb-[80px] leading-[40px] font-[500] text-[18px] text-[#C4C4C4] max-w-[500px] ">
            Check out our best service you can possibly orders in building
your company and don't forget to ask via our email or our
customer service if you are interested in using our services
            </p>
          </div>
          <div>
            <div className="pb-[113px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[100px]">
              {differentData?.image?.map((item, index) => (
                
                <div
                  key={index}
                  className="flex flex-col"
                >
                  <img key={index} src={differentData?.backgroundimage1} className="" height={94} width={94} />
                  <img key={index} src={differentData?.backgroundimage2} className="absolute mt-[10px] ms-[10px] items-center" height={74} width={74} />
                  <img key={index} className='absolute ms-[30px] mt-[30px]' src={item?.vector } height={29} width={32} />
                  <h2 className="mt-[38px] text-[#242527] text-[28px] font-[600] ">
                    {differentData?.SubTitle[index]?.label}
                  </h2>
                  <p className="mt-[37px] leading-[40px] text-[#C4C4C4] text-[18px] font-[500] max-w-[240px] ">
                    {differentData?.Subdescription[index]?.desc}
                  </p>
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