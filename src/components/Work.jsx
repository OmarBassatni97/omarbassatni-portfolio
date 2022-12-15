import React from 'react'
import { data } from '../project-data/data'

const Work = () => {
    return (
        <div name='work' className='w-full md:h-screen text-gray-300 bg-primary'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-secondary'>
                        Work
                    </p>
                    <p className='py-6'>Check out some of my recent work</p>
                </div>

                {/* container for projects */}
                <div className="grid md:grid-cols-2 gap-4">

                    {/* Gird Item */}
                    {data.map((item) => (
                        <div
                            key={item.id}
                            style={{ backgroundImage: `url(${item.img})` }}
                            className="shadow-lg my-2 sm:my-0 shadow-[#040c16] group container rounded-md 
            flex justify-center text-center items-center mx-auto bg-no-repeat bg-center bg-cover h-[250px] content-div"
                        >
                            {/* Hover effect for images */}
                            <div className="opacity-0 group-hover:opacity-100 ">
                                <span className="text-2xl font bold text-white tracking-wider ">
                                    {item.title}
                                </span>
                                <div className="pt-8 text-center ">
                                    {/* eslint-disable-next-line */}
                                    <a href={item.github} target="_blank" rel='noreferrer'>
                                        <button
                                            className="text-center rounded-lg px-4 py-3 m-2
                     bg-white text-gray-700 font-bold text-lg hover:opacity-70 duration-300"
                                        >
                                            Code
                                        </button>
                                    </a>
                                    {/* eslint-disable-next-line */}
                                    <a href={item.live} target="_blank" rel='noreferrer'>
                                        <button
                                            className="text-center rounded-lg px-4 py-3 m-2
                     bg-white text-gray-700 font-bold text-lg hover:opacity-70 duration-300"
                                        >
                                            Live
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}


                </div>
            </div>
        </div>
    )
}

export default Work