import React from "react";
import archData from "../data/architecture.json"; 
import Button from "./Button";

const Architecture = () => {
  return (
    <>
    <div className="pb-[132px]">
      <div className="container flex justify-between ">
        <div>
          <img src={archData?.mainimage} height={540} width={504}/>
          <div className="absolute mt-[-400px] ms-[300px] bg-gradient-to-t from-[#474747] to-[#222222] w-[294px] h-[312px]" >
            <img src={archData?.image}/>
          </div>
        </div>
        <div className="mt-[120px]  gap-[200px]">
          <h1 className="text-[46px] font-[600] text-[#242527] max-w-[480px]">Meet and talk with our best architecture</h1>
          <p className="font-[500] text-[18px] text-[#C4C4C4] max-w-[400px] leading-[40px] mt-[36px]">
            All our teams are professional and competent in their fields and
            will help you realize your dream building with the excellent result.
          </p>
          <Button text="see all team"
          className="bg-[#0A72AD] text-amber-50"
          style={{width:"200px",height:"60px"}}
          />
          <span>
            How it works <img src={archData?.arrow} />
          </span>
        </div>
      </div>
      </div>
    </>
  );
};

export default Architecture;
