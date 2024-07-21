"use client"
import React from 'react'
import Button from '../components/util/Button/Button'
import { useFormState, useFormStatus } from 'react-dom'

const SubmitButton = () => {
    const { pending } = useFormStatus();

    return (
        <div className='hover:scale-105 duration-300 w-fit'>
            <Button text="Send Message" disabled={pending} />
        </div>
    )
}

export default SubmitButton