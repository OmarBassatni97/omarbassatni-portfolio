import React from 'react'

const SkillCard = ({ title, img }) => {
    return (
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='my-4 w-20 mx-auto' src={img} alt={title} />
            <p className='font-semibold my-4'>{title}</p>
        </div>
    )
}

export default SkillCard