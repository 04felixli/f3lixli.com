"use client"
import React from 'react'
import Button from './Button/Button';

const OpenResumeButton = () => {

    const openResume = (href: string, target: string) => {
        window.open(href, target);
    }

    return (
        <Button text='Resume' onClickFunction={() => openResume("/Resume.pdf", "_blank")} className='mt-3' />
    )
}

export default OpenResumeButton