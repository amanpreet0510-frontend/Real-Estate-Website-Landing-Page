import React from 'react'

const Card = ({ bg1, title, description, date, month }) => {
    return (
        <div className="flex flex-col items-start w-full max-w-[100%] sm:max-w-[368px]">
            <div className="relative w-full h-[180px] sm:h-[220px] md:h-[260px] -ms-0 sm:-ms-8">
                {bg1 && (
                    <img src={bg1} alt="bg1" className="w-full h-full object-cover rounded-2xl" />
                )}
            </div>
            <div className='flex flex-wrap gap-3 items-end mt-4'>
                <div className='flex flex-col'>
                    <span className='font-[600] text-[22px] sm:text-[26px]'>{date}</span>
                    <span className='font-[600] text-[12px] sm:text-[14px]'>{month}</span>
                </div>
                <h3 className=" text-[#242527] text-[14px] sm:text-[16px] font-[600] flex-1 min-w-[140px] sm:min-w-[180px] mt-2 ">{title}</h3>
            </div>
            <p className="mt-[20px] leading-[26px] sm:leading-[34px] text-[#C4C4C4] text-[14px] sm:text-[16px] font-[400] max-w-full">{description}</p>
        </div>
    )
}

export default Card;