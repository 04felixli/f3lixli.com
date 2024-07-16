import { AboutMe } from '@/app/Objects/AboutMeObjects'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
    return (
        <div className='flex items-center justify-between flex-row w-full'>
            <Link href='/' className='w-10 h-10 border border-[#ccc] rounded-md shadow-lg'>
                <img
                    src={AboutMe.pfpPath}
                    alt={`${AboutMe.name} Image`}
                    className='w-full object-contain rounded-md'
                />
            </Link>
            <div className='w-4/12 flex justify-between'>
                <Link href='/experiences' className='w-fit h-fit'>Experiences</Link>
                <Link href='/projects' className='w-fit h-fit'>Projects</Link>
                <Link href='/contact' className='w-fit h-fit'>Contact</Link>
            </div>

        </div>
    )
}

export default NavBar