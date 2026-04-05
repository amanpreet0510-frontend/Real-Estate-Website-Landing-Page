import React from 'react'
import Slider from './Slider';
import footerData from "../data/footer.json";
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";




const Footer = () => {
  return (
    <>
      <div className='bg-gradient-to-r from-[#474747] to-[#222222] pb-[87px]'>
        <div className='container'>
        <div className=''><Slider /></div>
        <div className='container p-10'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 sm:gap-20 text-[#FFFFFF]' >
            <div>
          <h2 className='text-[14px] sm:text-[16px] font-[600] text-white'>{footerData?.mainTitle}</h2>
              <p className='mt-[32px] w-auto  font-[400] text-[14px] sm:text-[16px]'>{footerData?.description}</p>
              <span className='flex justify-start gap-5 sm:gap-10 mt-[32px]'>
                <FaTwitter className="w-[20px] h-[20px] sm:w-[25px] sm:h-[25px]"/>
                <FaGoogle className="w-[20px] h-[20px] sm:w-[25px] sm:h-[25px]"/>
                <RiInstagramFill className="w-[20px] h-[20px] sm:w-[25px] sm:h-[25px]"/>
                <FaLinkedin className="w-[20px] h-[20px] sm:w-[25px] sm:h-[25px]"/>
              </span>
            </div>
            <div className='flex flex-col'>
            <div className='flex gap-10 sm:gap-15 md:gap-20 lg:gap-34 '>{footerData?.title?.map(item =><div className='text-[14px] sm:text-[16px] font-[600] text-white' key={item}>{item}</div>)}</div>
            <div className='text-white flex gap-5 sm:gap-9 md:gap-15 lg:gap-28'>
             <div className='mt-[7px] '>{footerData?.company.map(item => <div className='mt-[25px] font-[400] text-[14px] sm:text-[16px]' key={item}>{item}</div>)}</div>
            <div className='mt-[7px]'>{footerData?.more.map(item => <div className='mt-[25px] font-[400] text-[14px] sm:text-[16px]' key={item}>{item}</div>)}</div>
          </div>
          </div>
          </div>
        </div>
        </div>
</div>
      </>
      )
}

      export default Footer;