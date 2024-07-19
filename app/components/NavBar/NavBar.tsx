import { AboutMe } from '@/app/Objects/AboutMeObjects'
import Link from 'next/link'
import React from 'react'
import './navBar.css'
import { CiMenuFries } from "react-icons/ci";
import MobileMenu from './MobileMenu';


export enum Pages {
    about = "",
    projects = "projects",
    experiences = "experiences",
    contact = "contact"
}

export const navLinks = [
    { page: Pages.about, href: "/" },
    { page: Pages.projects, href: "/projects" },
    { page: Pages.experiences, href: "/experiences" },
    { page: Pages.contact, href: "/contact" },
]

interface Props {
    currentPage: Pages;
}

const NavBar = ({ currentPage }: Props) => {
    return (
        <div className='flex items-center justify-between flex-row w-full'>
            <Link href='/' className='w-10 h-10 border border-[#ccc] rounded-md shadow-lg hover:scale-105 duration-300'>
                <img
                    src={AboutMe.pfpPath}
                    alt={`${AboutMe.name} Image`}
                    className='w-full h-full object-contain rounded-md hover:scale-105 duration-300'
                />
            </Link>
            <div className='sm:w-7/12 md:w-6/12 lg:w-5/12 xl:w-4/12 flex justify-between max-sm:hidden'>
                <Link href='/experiences' className={`navBar-links ${currentPage === Pages.experiences ? 'opacity-100 active' : ''}`}>Experiences</Link>
                <Link href='/projects' className={`navBar-links ${currentPage === Pages.projects ? 'opacity-100 active' : ''}`}>Projects</Link>
                <Link href='/contact' className={`navBar-links ${currentPage === Pages.contact ? 'opacity-100 active' : ''}`}>Contact</Link>
            </div>
            <div className='sm:hidden'>
                <MobileMenu currentPage={currentPage} />
            </div>
        </div>
    )
}

export default NavBar