'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Logo from '@/assets/logo.png'
import {
    FaBars,
    FaTimes,
    FaGithub,
    FaLinkedin
} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { motion } from 'framer-motion'
import SocialLinks from './SocialLinks'
import { EMAIL, GITHUB, LINKEDIN, RESUME, RESUME_FILENAME, sections, type Section } from '@/lib/links'

const label = (section: Section) => section.charAt(0).toUpperCase() + section.slice(1)

const Navbar = () => {
    const [nav, setNav] = useState(false)

    // Stop the page scrolling behind the open mobile menu
    useEffect(() => {
        document.body.style.overflow = nav ? 'hidden' : ''
    }, [nav])

    return (
        <header className='fixed z-50 w-full h-[80px] flex justify-between items-center px-4 bg-primary text-gray-300'>
            <motion.a
                href='#home'
                aria-label='Back to top'
                initial=
                {{
                    opacity: 0,
                    x: -500,
                }}
                animate={{
                    opacity: 1,
                    x: 0
                }}
                transition={{ duration: 2 }}
            >
                <Image src={Logo} alt="Omar Bassatni logo" className='w-[80px] h-auto' priority />
            </motion.a>
            {/* menu */}
            <nav aria-label='Main'>
                <motion.ul
                    className='hidden md:flex'
                    initial=
                    {{
                        opacity: 0,
                        x: 500,
                    }}
                    animate={{
                        opacity: 1,
                        x: 0
                    }}
                    transition={{ duration: 2 }}
                >
                    {sections.map((section) => (
                        <li key={section} className='px-4'>
                            <a href={`#${section}`} className='hover:text-secondary transition duration-300 font-bold'>{label(section)}</a>
                        </li>
                    ))}
                </motion.ul>
            </nav>
            <button
                type='button'
                className='md:hidden z-10 p-2'
                onClick={() => { setNav(!nav) }}
                aria-label={nav ? 'Close menu' : 'Open menu'}
                aria-expanded={nav}
                aria-controls='mobile-menu'
            >
                {nav ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
            {/* mobile menu */}
            <div id='mobile-menu' className={`${nav ? 'flex' : 'hidden'} md:hidden absolute top-0 left-0 w-full h-screen flex-col justify-center items-center bg-primary`}>
                <ul className='flex flex-col items-center'>
                    {sections.map((section) => (
                        <li key={section} className='py-4'>
                            <a onClick={() => { setNav(false) }} href={`#${section}`} className='text-4xl hover:text-secondary transition duration-300'>{label(section)}</a>
                        </li>
                    ))}
                </ul>
                <SocialLinks className='pt-8' />
            </div>

            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] focus-within:ml-[-10px] duration-300 bg-blue-600 px-4'>
                        <a href={LINKEDIN} target='_blank' rel='noreferrer' className='flex justify-between items-center w-full'>Linkedin <FaLinkedin size={30} /></a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] focus-within:ml-[-10px] duration-300 bg-[#333333] px-4'>
                        <a href={GITHUB} target='_blank' rel='noreferrer' className='flex justify-between items-center w-full'>Github <FaGithub size={30} /></a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] focus-within:ml-[-10px] duration-300 bg-[#6fc2b0] px-4'>
                        <a href={`mailto:${EMAIL}`} className='flex justify-between items-center w-full text-gray-300'>
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] focus-within:ml-[-10px] duration-300 bg-[#565f69] px-4'>
                        <a href={RESUME} download={RESUME_FILENAME} className='flex justify-between items-center w-full'>Resume <BsFillPersonLinesFill size={30} /></a>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Navbar
