import React from 'react'

const SkillCard = ({ title, img, Icon, color }) => {
    return (
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            {Icon
                ? <Icon className='my-4 w-20 h-20 mx-auto' color={color} aria-hidden='true' />
                : <img className='my-4 w-20 mx-auto' src={img} alt='' />}
            <p className='font-semibold my-4'>{title}</p>
        </div>
    )
}

export default SkillCard
