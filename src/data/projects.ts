import Dilmun from '@/assets/dilmun.webp'
import Gaming from '@/assets/gaming-is-life.webp'
import Weather from '@/assets/weather.webp'
import Shopify from '@/assets/shopify.webp'
import CheckOut from '@/assets/checkout.webp'
import OceanWaves from '@/assets/oceanwavesuae.webp'

import type { StaticImageData } from 'next/image'

export type Project = {
    id: number
    img: StaticImageData
    title: string
    description: string
    tags: string[]
    live: string
    github?: string
}

// Professional work that can't be linked publicly
export const caseStudy = {
    title: 'Medulink',
    company: 'Arabia Intelligence',
    description: 'A comprehensive back-office system with a wide range of business features and workflows, which I develop and maintain as part of the frontend team.',
    points: [
        'Complex forms, customer and subscription workflows, and data-management interfaces',
        'REST API integration across multiple workflows',
        'Code reviews, merges, and production deployments',
    ],
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'REST APIs'],
}

export const freelance: Project[] = [
    {
        id: 1,
        img: CheckOut,
        title: 'CheckoutForex',
        description: 'Forex broker comparison platform with a database of 200+ brokers, featuring comparison, reviews, ratings, an economic calendar, and financial news.',
        tags: ['Next.js', 'Tailwind CSS', 'Hygraph'],
        live: 'https://checkoutforex.com/'
    },
    {
        id: 2,
        img: OceanWaves,
        title: 'OceanWavesUAE',
        description: 'Yacht platform with yacht exploration and comparison, fishing package details, and a WhatsApp-based booking flow.',
        tags: ['Next.js', 'Tailwind CSS', 'Hygraph'],
        live: 'https://oceanwavesuae.com/'
    },
]

export const earlier: Project[] = [
    {
        id: 3,
        img: Dilmun,
        title: 'Dilmun',
        description: 'Team capstone project: a multilingual marketplace to buy, sell, and donate products, with email, Google, and Facebook sign-in.',
        tags: ['React', 'Redux Toolkit', 'Firebase', 'Tailwind CSS'],
        github: 'https://github.com/ReCoded-Org/capstone-IQLBPS-Dilmun',
        live: 'https://capstone-dilmun.netlify.app/'
    },
    {
        id: 4,
        img: Gaming,
        title: 'Gaming Is Life',
        description: 'Game discovery app with search, popular games, genres, age ratings, and game details.',
        tags: ['React'],
        github: 'https://github.com/OmarBassatni97/gaming-is-life',
        live: 'https://gaming-is-life.netlify.app/'
    },
    {
        id: 5,
        img: Weather,
        title: 'Weather App',
        description: 'Weather app that looks up current conditions for any city.',
        tags: ['React'],
        github: 'https://github.com/OmarBassatni97/weather-app',
        live: 'https://oh-my-weather.netlify.app/'
    },
    {
        id: 6,
        img: Shopify,
        title: 'The Shoppies',
        description: 'Shopify challenge: search movies and build a list of nominations.',
        tags: ['React'],
        github: 'https://github.com/OmarBassatni97/shopify-challenge',
        live: 'https://shopify-challenge-react.netlify.app/'
    },
]
