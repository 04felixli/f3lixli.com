'use client'
import React, { useRef } from 'react'
import Button from '../components/util/Button/Button'
import emailjs from '@emailjs/browser';

const Form = () => {
    const form = useRef<HTMLFormElement>();

    return (
        <form className="space-y-8 mt-3" ref={form as React.RefObject<HTMLFormElement>}>
            <input
                type="text"
                id="name"
                className="shadow-sm bg-transparent border border-[#ccc] text-sm rounded-md block w-full p-2.5 focus:outline-none focus:ring-0"
                placeholder="Name"
                name="user name"
                required
            />
            <input
                type="email"
                id="email"
                className="shadow-sm bg-transparent border border-[#ccc] text-sm rounded-md block w-full p-2.5 focus:outline-none focus:ring-0"
                placeholder="Email"
                name="email"
                required
            />
            <div className="sm:col-span-2">
                <textarea
                    id="message"
                    rows={6}
                    className="shadow-sm bg-transparent border border-[#ccc] text-sm rounded-md block w-full p-2.5 focus:outline-none focus:ring-0 resize-none"
                    placeholder="Message"
                    name="message"
                    required
                ></textarea>
            </div>
            <div className='mt-3 hover:scale-105 duration-300 w-fit animate-bounce'>
                <Button text="Send Message" />
            </div>
        </form>
    )
}

export default Form