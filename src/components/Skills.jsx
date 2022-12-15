import React from 'react'
import SkillCard from './SkillCard'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import FireBase from '../assets/firebase.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';

const Skills = () => {
    return (
        <section name='skills' className='w-full h-screen bg-primary text-gray-300'>

            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-secondary '>Skills</p>
                    <p className='py-4'>These are the technologies I've worked with</p>
                </div>

                <div className='w-full grid grid-cols-2 md:grid-cols-4 gap-4 text-center py-8'>
                    <SkillCard title='HTML' img={HTML} />
                    <SkillCard title='CSS' img={CSS} />
                    <SkillCard title='JAVASCRIPT' img={JavaScript} />
                    <SkillCard title='REACT' img={ReactImg} />
                    <SkillCard title='GITHUB' img={GitHub} />
                    <SkillCard title='NODE JS' img={Node} />
                    <SkillCard title='TAILWIND' img={Tailwind} />
                    <SkillCard title='FireBase' img={FireBase} />
                </div>
            </div>
        </section>
    )
}

export default Skills