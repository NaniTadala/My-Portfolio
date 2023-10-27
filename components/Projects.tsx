import React from 'react'
import ProjectsTab from './ProjectsTab'

const Projects = () => {
    return (
        <div className="relative z-10 flex justify-center items-center flex-col max-w-7xl mx-auto sm:px-20 px-6">
           <h1 className='md:text-4xl text-3xl font-bold md:leading-[69px]'>Projects</h1>
           <p className="md:text-xl max-w-[600px] text-center text-md mb-8">I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.</p>
            <ProjectsTab/>
        </div>
      )
}

export default Projects