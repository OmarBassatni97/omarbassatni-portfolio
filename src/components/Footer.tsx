import SocialLinks from './SocialLinks'
import { EMAIL } from '@/lib/links'

const Footer = () => {
    return (
        <footer className='w-full bg-[#1a1f26] text-gray-300 py-8 px-4'>
            <div className='max-w-[1000px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4'>
                <div className='text-center sm:text-left'>
                    <p className='font-bold'>Omar Bassatni</p>
                    <a href={`mailto:${EMAIL}`} className='text-sm text-[#8892b0] hover:text-secondary'>{EMAIL}</a>
                </div>
                <SocialLinks />
                <p className='text-sm text-[#8892b0]'>© {new Date().getFullYear()} Omar Bassatni</p>
            </div>
        </footer>
    )
}

export default Footer
