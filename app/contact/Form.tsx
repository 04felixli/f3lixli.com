'use client'
import React, { useRef } from 'react'
import Button from '../components/util/Button/Button'
import emailjs from '@emailjs/browser';
import { sendEmailServerAction } from '../components/util/actions';
import SubmitButton from './SubmitButton';
import toast from 'react-hot-toast';

const Form = () => {
    const ref = useRef<HTMLFormElement>(null)

    return (
        <form
            ref={ref}
            className="space-y-8 mt-3"
            action={async FormData => {
                await sendEmailServerAction(FormData);
                ref.current?.reset();
                toast.success("Email Sent Successfully!")
            }}>
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
            <SubmitButton />
        </form>
    )
}

export default Form