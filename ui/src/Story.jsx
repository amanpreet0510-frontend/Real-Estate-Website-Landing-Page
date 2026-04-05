import React from "react";
import storyData from "../data/story.json";
import Button from "./Button";

const Story = () => {
    return (
        <>
            <div className="pb-[132px]">
                <div className="container flex flex-col md:flex-row md:flex-row-reverse justify-between items-center md:items-start gap-8 md:gap-[80px] mt-[60px] md:mt-[120px]  ">
                    <div className="gap-[50px] md:gap-[100px] lg:gap-[200px] text-center md:text-left md:w-1/2">
                        <h1 className="text-[32px] sm:text-[46px] font-[600] text-[#242527] max-w-full md:max-w-[320px]">{storyData?.Heading}</h1>
                        <p className="font-[500] text-[16px] sm:text-[18px] text-[#C4C4C4] max-w-full sm:max-w-[400px] lg:max-w-xl text-justify md:text-left leading-[30px] sm:leading-[40px] mt-[24px]">
                            {storyData?.Description}
                        </p>
                        <div className='flex justify-center md:justify-start mt-[49px]'>
                            <Button text="See More"
                                className="bg-[#0A72AD] text-amber-50 "
                                style={{ width: "200px", height: "60px" }}
                            />
                        </div>
                    </div>
                    <div className="mt-8 md:mt-0 md:w-1/2">
                        <img src={storyData?.mainimage} className="w-full h-auto" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Story;
