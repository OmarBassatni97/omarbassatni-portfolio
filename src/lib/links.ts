export const SITE_URL = 'https://omar-bassatni.netlify.app'

export const EMAIL = 'omarbassatni@gmail.com'
export const RESUME = '/Omar_Bassatni_Resume_2026.pdf'
export const RESUME_FILENAME = 'Omar_Bassatni_Resume_2026.pdf'
export const LINKEDIN = 'https://www.linkedin.com/in/omar-bassatni-40a762188/'
export const GITHUB = 'https://github.com/OmarBassatni97'

export const sections = ['home', 'about', 'experience', 'skills', 'work', 'contact'] as const
export type Section = (typeof sections)[number]
