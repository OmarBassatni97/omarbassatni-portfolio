const About = () => {
    return (
        <section id='about' className='w-full bg-primary text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full min-h-screen py-[80px]'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <h2 className='text-4xl font-bold inline border-b-4 border-secondary'>
                            About
                        </h2>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi. I'm Omar Bassatni, nice to meet you. Please take a look around.</p>
                    </div>
                    <div>
                        <p>I'm a Frontend Developer specializing in React.js and Next.js, with
                            professional experience building production web applications and
                            contributing across the development lifecycle. I develop complex,
                            data-driven interfaces, integrate REST APIs, and translate designs and
                            requirements into responsive applications.</p>
                        <p className='pt-4'>I also review code, manage merges and deployments,
                            and collaborate closely with backend developers, designers, project
                            teams, and clients. I'm comfortable working with TypeScript and am
                            currently expanding into mobile development with React Native.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About