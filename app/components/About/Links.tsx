import { AboutMe } from '@/app/Objects/AboutMeObjects';
import React from 'react'
import { FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";




const links = () => {
    return (
        <div className='flex flex-row items-center justify-between w-28 mt-5'>
            <a href={AboutMe.linkedIn} target="_blank" className="w-8">
                <CiLinkedin className='w-full h-full' />
            </a>

            <a href={`mailto:${AboutMe.email}`} className="w-8">
                <TfiEmail className='w-full h-full' />
            </a>

            <a href={AboutMe.github} target="_blank" className="w-8">
                <FiGithub className='w-full h-full' />
            </a>
        </div>
    )
}

export default links