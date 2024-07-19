'use client'
import React, { useState, useEffect } from 'react'
import { CiMenuFries } from 'react-icons/ci';
import { motion, AnimatePresence } from 'framer-motion';
import './navBar.css'
import { MotionDiv } from '../util/MotionDiv';

interface Props {
    currentPage: string;
}
export const navLinks = [
    { title: "Home", page: "", href: "/" },
    { title: "Experiences", page: "experiences", href: "/experiences" },
    { title: "Projects", page: "projects", href: "/projects" },
    { title: "Contact", page: "contact", href: "/contact" },
]

const MobileMenu = ({ currentPage }: Props) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsOpen(prevOpen => !prevOpen);
    }

    // Disable scrolling when the menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto'; // Cleanup on unmount
        }
    }, [isOpen]);

    return (
        <div>
            <CiMenuFries className='w-10 h-10 cursor-pointer hover:scale-105 dura' onClick={toggleMenu} />
            <AnimatePresence>
                {isOpen && (
                    <MotionDiv
                        className='fixed inset-0 bg-black flex flex-col items-center justify-center z-50'
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -100 }}
                        transition={{ duration: 0.3 }}
                    >
                        <button className='absolute top-10 right-10 text-2xl hover:scale-105 duration-300' onClick={toggleMenu}>X</button>
                        <nav className='text-xl'>
                            <ul className='flex flex-col items-center space-y-10'>
                                {navLinks.map(link => (
                                    <li key={link.page}>
                                        <a href={link.href} className={`navBar-links ${currentPage === link.page ? 'opacity-100 active' : ''}`}>
                                            {link.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </MotionDiv>
                )}
            </AnimatePresence>
        </div>
    )
}

export default MobileMenu
