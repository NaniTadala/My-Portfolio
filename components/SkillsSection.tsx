import React from 'react'
import SkillCard from './Cards/SkillCard'

const SkillsSection = () => {
  return (
    <div className="relative z-10 flex justify-center items-center flex-col max-w-7xl mx-auto sm:px-20 px-6 pb-20">
       <h1 className='md:text-4xl text-3xl font-bold md:leading-[69px]'>Skills</h1>
       <p className="md:text-xl max-w-[600px] text-center text-md mb-8">Here are some of my skills on which I have been working on for the past 2 years.</p>
        <SkillCard/>
    </div>
  )
}

export default SkillsSection