import React from 'react'
import projectData from "../data/project.json";

const Project = () => {
    const images = [
        projectData?.image1,
        projectData?.image2,
        projectData?.image3,
        projectData?.image4
    ];

    return (
        <div className='mt-[95px] mb-[141px]'>
            <div className='container'>
                <h1 className='font-[600] text-[46px] w-80 md:text-[36px] lg:text-[46px]'>
                    {projectData?.mainHeading}
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px] mt-[38px]">

                    {images.map((img, index) => (
                        <div key={index} className="relative group overflow-hidden">
                            <img
                                src={img}
                                alt="project"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-0  left-5 right-5 
                              bg-white p-4 
                              translate-y-full 
                              group-hover:-translate-y-5
                              transition-all duration-300">
                                <div className='flex justify-between'>
                                    <div>
                                        <p className="text-md ">
                                            Project Description
                                        </p>
                                        <span className='text-[14px]'>View Project</span>
                                    </div>
                                    <div>
                                        <a
                                            href="#"
                                            className="font-bold flex items-center gap-2 bg-blue-900 text-white p-2 ps-5 pe-5 mt-1" 
                                        >
                                            →
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Project