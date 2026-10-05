import type { Skill } from '@/data/skills'

const SkillCard = ({ title, Icon, color }: Skill) => {
    return (
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <Icon className='my-4 w-20 h-20 mx-auto' color={color} aria-hidden='true' />
            <p className='font-semibold my-4'>{title}</p>
        </div>
    )
}

export default SkillCard
