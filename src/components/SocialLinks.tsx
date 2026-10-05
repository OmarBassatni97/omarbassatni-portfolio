import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { EMAIL, GITHUB, LINKEDIN, RESUME, RESUME_FILENAME } from '@/lib/links'

// Icon row for screens where the side tab bar is hidden
const SocialLinks = ({ className = '' }: { className?: string }) => {
    const linkClass = 'p-2 hover:text-secondary duration-300'
    return (
        <div className={`flex items-center gap-4 ${className}`}>
            <a href={LINKEDIN} target='_blank' rel='noreferrer' aria-label='LinkedIn' className={linkClass}><FaLinkedin size={28} /></a>
            <a href={GITHUB} target='_blank' rel='noreferrer' aria-label='GitHub' className={linkClass}><FaGithub size={28} /></a>
            <a href={`mailto:${EMAIL}`} aria-label='Email' className={linkClass}><HiOutlineMail size={30} /></a>
            <a href={RESUME} download={RESUME_FILENAME} aria-label='Download resume' className={linkClass}><BsFillPersonLinesFill size={28} /></a>
        </div>
    )
}

export default SocialLinks
