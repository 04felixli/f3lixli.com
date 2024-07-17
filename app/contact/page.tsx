import React, { useRef } from 'react'
import Layout from '../components/util/layout'
import Button from '../components/util/Button/Button'
import { Pages } from '../components/NavBar/NavBar'
import Form from './Form'

const Experiences = () => {
    return (
        <Layout currentPage={Pages.contact} pageName='Contact Me'>
            <section className='mt-5'>
                <p>Get in touch or shoot me an email directly at 04felix.li@gmail.com</p>
            </section>
            <Form />
        </Layout>
    )
}

export default Experiences