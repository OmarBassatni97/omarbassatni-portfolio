import type { IconType } from 'react-icons'
import {
    SiCss,
    SiGit,
    SiGithub,
    SiHtml5,
    SiJavascript,
    SiNextdotjs,
    SiReact,
    SiRedux,
    SiTailwindcss,
    SiTypescript,
    SiVercel,
} from 'react-icons/si'
import { TbBrandReactNative } from 'react-icons/tb'

export type Skill = {
    title: string
    Icon: IconType
    color: string
}

export const skills: Skill[] = [
    { title: 'HTML', Icon: SiHtml5, color: '#e34f26' },
    { title: 'CSS', Icon: SiCss, color: '#1572b6' },
    { title: 'JAVASCRIPT', Icon: SiJavascript, color: '#f7df1e' },
    { title: 'TYPESCRIPT', Icon: SiTypescript, color: '#3178c6' },
    { title: 'REACT', Icon: SiReact, color: '#61dafb' },
    { title: 'NEXT JS', Icon: SiNextdotjs, color: '#ffffff' },
    { title: 'REACT NATIVE', Icon: TbBrandReactNative, color: '#61dafb' },
    { title: 'TAILWIND', Icon: SiTailwindcss, color: '#06b6d4' },
    { title: 'REDUX TOOLKIT', Icon: SiRedux, color: '#764abc' },
    { title: 'GIT', Icon: SiGit, color: '#f05032' },
    { title: 'GITHUB', Icon: SiGithub, color: '#ffffff' },
    { title: 'VERCEL', Icon: SiVercel, color: '#ffffff' },
]
