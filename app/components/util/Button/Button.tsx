'use client';
import React from 'react'
import './button.css';
import { motion } from 'framer-motion';

interface Props {
    text: string;
    onClickFunction?: () => void; // Make onClickFunction optional
    className?: string; // Additional styles if needed
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
}

const Button = (props: Props) => {
    // Temporary default function if none is provided
    const handleClick = () => { };

    const onClick = props.onClickFunction || handleClick;
    const buttonType = props.type || "submit";
    const disabled = props.disabled || false;

    return (
        <motion.button
            // @ts-ignore
            initial={{ "--x": "100%", scale: 1 }}
            // @ts-ignore
            animate={{ "--x": "-100%" }}
            whileTap={{ scale: 0.97 }}
            transition={{
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 1,
                type: "spring",
                stiffness: 20,
                damping: 15,
                mass: 2,
                scale: {
                    type: "spring",
                    stiffness: 10,
                    damping: 5,
                    mass: 0.1,
                },
            }}
            className={`px-6 py-2 rounded-md relative radial-gradient shadow-lg ${props.className}`}
            onClick={onClick}
            type={buttonType}
            disabled={disabled}
        >
            <span className={`tracking-wide h-full w-full block relative linear-mask ${disabled ? 'text-gray-500' : ''}`}>
                {props.text}
            </span>
            <span className="block absolute inset-0 rounded-md p-px linear-overlay" />
        </motion.button>
    )
}

export default Button