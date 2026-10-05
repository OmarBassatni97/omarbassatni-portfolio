import React from 'react'
import { HiArrowNarrowRight, HiDownload } from 'react-icons/hi'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import SocialLinks from './SocialLinks'
import { RESUME, RESUME_FILENAME } from '../links'

const Home = () => {
    const [text] = useTypewriter({
        words: [' OMAR BASSATNI', ' I am a Frontend Developer.', ' React.js & Next.js.'],
        loop: true,
        delaySpeed: 1500
    })
    return (
        <section id='home' className='w-full h-screen bg-primary'>
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-secondary'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
                    <span className='sr-only'>Omar Bassatni, Frontend Developer</span>
                    <span aria-hidden='true'>{text}</span>
                    <span aria-hidden='true'><Cursor cursorColor='#00bd95' /></span>
                </h1>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>
                    I’m a frontend developer based in Beirut, specializing in React.js and
                    Next.js. I build production web applications and complex, data-driven
                    interfaces, and I’m currently expanding into mobile development with
                    React Native.
                </p>
                <div className='flex flex-wrap gap-4 my-2'>
                    <a href='#work' className='text-white group border-2 px-6 py-3 flex items-center hover:bg-secondary hover:border-secondary'>
                        View Work
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-3' aria-hidden='true' />
                        </span>
                    </a>
                    <a href={RESUME} download={RESUME_FILENAME} className='text-white border-2 border-secondary bg-secondary px-6 py-3 flex items-center hover:bg-transparent duration-300'>
                        Download CV
                        <HiDownload className='ml-3' aria-hidden='true' />
                    </a>
                </div>
                <SocialLinks className='lg:hidden pt-4 -ml-2 text-gray-300' />
            </div>
        </section>
    )
}

export default Home
