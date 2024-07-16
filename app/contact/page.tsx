import React from 'react'
import Layout from '../components/util/layout'
import Button from '../components/util/Button/Button'
import { Pages } from '../components/NavBar/NavBar'

const Experiences = () => {
    return (
        <Layout currentPage={Pages.contact} pageName='Contact Me'>
            <section className='mt-5'>
                <p>Get in touch or shoot me an email directly at 04felix.li@gmail.com</p>
            </section>
            <form className="space-y-8 mt-3">
                <input
                    type="text"
                    id="Name"
                    className="shadow-sm bg-transparent border border-[#ccc] text-sm rounded-md block w-full p-2.5 focus:outline-none focus:ring-0"
                    placeholder="Name"
                    name="user_name"
                    required
                />
                <input
                    type="email"
                    id="email"
                    className="shadow-sm bg-transparent border border-[#ccc] text-sm rounded-md block w-full p-2.5 focus:outline-none focus:ring-0"
                    placeholder="Email"
                    name="user_email"
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
                <div className='mt-3 hover:scale-105 duration-300 w-fit'>
                    <Button text="Send Message" />
                </div>
            </form>
        </Layout>
    )
}

export default Experiences