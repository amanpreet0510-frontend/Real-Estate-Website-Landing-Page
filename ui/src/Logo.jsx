import React from "react";
import { logoData } from "../data/logo.json";

const Logo = () => {
  return (
    <>
      <div className="mt-[96px] mb-[90px]">
        <div className="container">
          <div className="grid justify-center  gap-[20px] sm:grid-cols-5 sm:gap-[10px]  md:gap-[50px] lg:gap-[40px] xl:gap-[96px]  ">
            {logoData.map((item,index) => (
              <>
                <img  key={index} alt={item.alt} src={item.logo} className={`${item.className} object-contain`}/>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Logo;
