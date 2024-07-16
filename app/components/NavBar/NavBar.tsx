import Link from 'next/link'
import React from 'react'

const NavBar = () => {
    return (
        <div className='flex itemx-center justify-between flex-row w-full'>
            <Link href='/'>Profile</Link>
            <div className='w-4/12 flex justify-between'>
                <Link href='/experiences'>Experiences</Link>
                <Link href='/projects'>Projects</Link>
                <Link href=''>Contact</Link>
            </div>

        </div>
    )
}

export default NavBar