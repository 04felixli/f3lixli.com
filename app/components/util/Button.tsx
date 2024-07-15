import React from 'react'

interface Props {
    className?: string
    onClickFunction?: () => void
    text: string
}

const Button = ({ className, onClickFunction, text }: Props) => {
    return (
        <button className={`flex items-center justify-center ${className}`} onClick={onClickFunction}>{text}</button>
    )
}

export default Button