import React from 'react'
import Card from './Card';
import newsData from "../data/news.json";

const News = () => {

    return (
        <>
            <div className='container mt-[60px] sm:mt-[120px]'>
                <h1 className='font-[600] text-[32px] sm:text-[46px]'>{newsData?.mainHeading}</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-[38px]">
                    <Card
                        bg1={newsData?.image1}
                        date={newsData?.date}
                        month={newsData?.month}
                        title={newsData?.CardHeading1}
                        description={newsData?.CardDescription1}
                    />
                    <Card
                        bg1={newsData?.image2}
                        date={newsData?.date}
                        month={newsData?.month}
                        title={newsData?.CardHeading2}
                        description={newsData?.CardDescription2}
                    />
                    <Card
                        bg1={newsData?.image3}
                        date={newsData?.date}
                        month={newsData?.month}
                        title={newsData?.CardHeading3}
                        description={newsData?.CardDescription3}
                    />
                </div>
            </div>
        </>
    )
}

export default News