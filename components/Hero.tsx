'use client'
import React from 'react'
import {Cursor, useTypewriter} from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Link from 'next/link'
import HeroPhoto from '/public/HeroPhoto.jpeg'

type Props = {}

function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: ["Coder","Coffee Lover"],
        loop: true,
        delaySpeed: 2000
    })

    return (
    <div className = "h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
        <BackgroundCircles />
        <img 
        className= "relative rounded-full h-32 w-32 mx-auto object-cover"
        src ="https://github.com/kristinalstout/portolfio/blob/main/components/F2486CBC-E341-493A-9D0F-9DB53CE62C8E_1_105_c.jpeg?raw=true"
        alt="" />
        <div className ="z-20">
            <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">Software Engineer</h2>
        <h1 className= "text-5xl lg:text-6xl font-semibold px-10">
            <span className= "mr-3">{text}</span>
            <Cursor cursorColor ="#E1B143"/>
        </h1>
        <div className = "pt-5">
            <Link href="#about">
            <button className = "heroButton">About</button>
            </Link>
            <Link href="#experience">
            <button className = "heroButton">Experience</button>
            </Link>
            <Link href="#skills">
            <button className = "heroButton">Skills</button>
            </Link>
            <Link href="#projects">
            <button className = "heroButton">Projects</button>
            </Link>
        
        </div>
        </div>
    </div>
  )
}

export default Hero