export type Job = {
    id: number
    company: string
    role: string
    location: string
    period: string
    points: string[]
}

export const experience: Job[] = [
    {
        id: 1,
        company: 'Arabia Intelligence',
        role: 'Frontend Developer',
        location: 'Beirut, Lebanon',
        period: 'February 2024 – Present',
        points: [
            'Develop and maintain Medulink, a comprehensive back-office system with a wide range of business features and workflows.',
            'Build production-ready web applications and responsive user interfaces using Next.js, React, Tailwind CSS, and TypeScript.',
            'Design and implement complex forms, customer and subscription workflows, data-management interfaces, profile screens, and other business-critical features.',
            'Integrate and consume REST APIs to retrieve, update, and manage application data across multiple workflows.',
            'Review team code, participate in pull-request workflows, and manage merges and production deployments.',
            'Develop mobile applications using React Native as part of the team\'s expansion into mobile products.',
        ]
    },
    {
        id: 2,
        company: 'ITXI',
        role: 'Frontend Developer',
        location: 'Beirut, Lebanon',
        period: 'November 2023 – January 2024',
        points: [
            'Worked as part of a development team to build and improve application features and user interfaces.',
            'Participated in daily team meetings to discuss progress, resolve challenges, and prioritize tasks.',
        ]
    },
    {
        id: 3,
        company: 'Astudio',
        role: 'Frontend Developer',
        location: 'Dubai, U.A.E.',
        period: 'March 2023 – August 2023',
        points: [
            'Developed a CRM web application using Next.js, Tailwind CSS, and Context API.',
            'Built key features including timesheet management, dynamic profile pages, forms, tables, and data-driven interfaces.',
            'Integrated frontend functionality with backend APIs and collaborated with backend developers to ensure reliable data flow.',
            'Resolved bugs and improved usability and overall user experience across the application.',
        ]
    },
]
