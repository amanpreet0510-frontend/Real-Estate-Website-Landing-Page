import React from "react";

const HeroSection = () => {
  return (
    <>
    <div className="herosection h-[950px] sm:h-[800px] overflow-y-hidden overflow-x-hidden md:min-h-full md:h-full pb-[53px] bg-gradient-to-t from-[#474747] to-[#222222] ">
      <div className="container relative text-center  overflow-hidden md:text-left flex  md:flex-row max-w-full">
        <div className="hero-content ms-[20px] me-[20px] md:ms-[50px] lg:ms-[50px] xl:ms-[0px] mt-[30px]">
          <h1 className="font-[500] text-[28px] md:text-[35px] xl:text-[64px] text-[#FFFFFF]   md:max-w-[350px] lg:max-w-[350px] xl:max-w-[600px]">We Provide
           Architectural design and Construction</h1>
          <p className="font-[500] xl:text-[18px] mt-[24px] text-[#C4C4C4]  md:max-w-[350px] lg:max-w-[450px] xl:max-w-lg leading-[2rem] xl:leading-[3rem]">
            More than 100 building and housing projects that we have built. The
            building owner chose us over other contractors in Jakarta, because
            our work is different
          </p>
          <button className="mt-[62px] w-[140px] h-[54px] xl:w-[196px] xl:h-[64px] font-[600] text-[16px] text-[#FFFFFF] bg-gradient-to-t from-[#0A72AD] to-[#60BBEE]">Discover More</button>
          <div className="stats-container  ms-[10px]  justify-center md:justify-start   flex mt-[43px] gap-[31px] xl:gap-[51px]">
            <div className="stat-item">
              <h2 className="font-[700] text-[26px] xl:text-[36px] text-[#FFFFFF]">300<span className="text-[#2387C0] font-[700]">+</span></h2>
              <p className="mt-[17px] text-left font-[600] text-[16px] xl:text-[18px] text-[#C4C4C4]">Happy <p>Client</p></p>
            </div>
            <div className="stat-item">
              <h2 className="font-[700] text-[26px] xl:text-[36px] text-[#FFFFFF]">900<span className="text-[#2387C0] font-[700]">+</span></h2>
              <p className="mt-[17px] text-left font-[600] text-[16px] xl:text-[18px] text-[#C4C4C4]">Amazing <p>Projects</p></p>
            </div>
            <div className="stat-item">
              <h2 className="font-[700] text-[26px] xl:text-[36px] text-[#FFFFFF]">20<span className="text-[#2387C0] font-[700]">+</span></h2>
              <p className="mt-[17px] text-left font-[600] text-[16px] xl:text-[18px] text-[#C4C4C4]">Awards<p>Winning</p></p>
            </div>
          </div>
        </div>
        </div>
        <div className="hero-image relative w-full">
          <div className="float-right max-w-full">
          <img src="/assets/building.png" alt="Building construction" className="invisible md:visible max-w-[398px] mt-[-124px] xl:mt-[-935px] xl:max-w-[698px] h-[687px] md:mt-[-650px] md:max-w-[350px] lg:mt-[-700px] lg:h-[755px] lg:max-w-[450px] xl:h-[987px]" />
          </div>
          <div className="flex items-center left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 justify-center flex-col md:flex-row absolute mx-auto  w-[250px] h-[230px]  md:right-0 md:ps-[32px] md:pe-[20px] pt-[20px] pb-[20px] md:pt-[30px] xl:pt-[40px] md:pb-[37px] md:w-full md:max-w-[400px]   xl:max-w-[745px]   md:h-[150px] xl:h-[166px] mt-[50px] md:mt-[-61px] lg:max-w-[525px] lg:mt-[-40px] xl:mt-[-60px] gap-[15px] md:gap-[41px] bg-gradient-to-r from-[#399FD8] via-[#0775B4] to-[#003756]">
            <div className="font-[500] text-[14px] xl:text-[18px] text-[#FFFFFF] leading-[1.5rem] xl:leading-[2.5rem]"><h1>General <h1 className=" text-[16px] xl:text-[24px]">Project</h1></h1></div>
            <div className="font-[700] text-[18px] xl:text-[36px] text-[#FFFFFF]"><h2>25<span className="font-[500] ms-[15px] text-[18px] text-[#FFFFFF]">Years</span></h2>
            <h2 className="font-[600] text-[18px] xl:text-[24px] text-[#FFFFFF]">Operated</h2></div>
           <div className="font-[500] text-[12px] xl:text-[18px] text-[#FFFFFF] max-w-[250px] text-center md:max-w-[250px] lg:max-w-[250px] xl:max-w-[340px] leading-[1rem] xl:leading-[2rem]"><p>
              As a trusted general project that has been operating for 25 years,
              our commitment is always to prioritize our client satisfaction
            </p></div>
          </div>
        </div>  
      
      </div>
    </>
  );
};

export default HeroSection;
