"use client"
import React, { useEffect, useRef, useState } from 'react'
import { useMediaQuery } from 'react-responsive';

interface Props {
    sectionName: string;
}

const SectionTitle = ({ sectionName }: Props) => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase();
    const [name, setName] = useState(sectionName);
    const iterations = useRef(0);
    const isMobile = useMediaQuery({ query: '(max-width: 320px)' });

    // useEffect(() => {
    //     if (isMobile) {
    //         return;
    //     }

    //     const timeout = setTimeout(() => {
    //         const interval = setInterval(() => {
    //             setName(prevName => {
    //                 const newName = prevName.split("")
    //                     .map((letter, index) => {
    //                         if (index < iterations.current) {
    //                             return sectionName[index];
    //                         }

    //                         return letters[Math.floor(Math.random() * 26)];
    //                     })
    //                     .join("");

    //                 return newName;
    //             });

    //             if (iterations.current >= sectionName.length) {
    //                 clearInterval(interval);
    //             }

    //             iterations.current += 1 / 3;
    //         }, 30);

    //         // Cleanup the interval on component unmount
    //         return () => clearInterval(interval);
    //     }, 500);

    //     // Cleanup the timeout on component unmount
    //     return () => clearTimeout(timeout);
    // }, [sectionName]);

    return (
        <h1 className="section-names">{name}</h1>
    );
}

export default SectionTitle;
