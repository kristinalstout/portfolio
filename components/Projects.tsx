'use client'
import React from 'react'
import {motion} from "framer-motion"

type Props = {}

function Projects({}: Props) {
    const projects = [1,2,3,4,5]
  return (
    <motion.div 
    initial={{opacity:0}}
    transition={{duration:1.5}}
    whileInView={{opacity:1}}
    className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
        <h3 className=" absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
            Projects
        </h3>
        <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#a0c0b2]/80">
           {projects.map((project,i)=>(
            <div 
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
                <motion.img
                initial={{
                    y:-300,
                    opacity:0
                }}
                transition={{duration:1.2}}
                whileInView={{
                    opacity:1,
                    y:0
                }}
                viewport={{once:true}}
                src="https://github.com/kristinalstout/portolfio/blob/main/components/F2486CBC-E341-493A-9D0F-9DB53CE62C8E_1_105_c.jpeg?raw=true"
                alt=""
                />
                <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                    <h4 className="text-4xl font-semibold text-center">
                        <span className="underline decoration-[#a0c0b2]/50">Case Study {i+1} of {projects.length}:</span> Grocery Store App
                    </h4>

                    <p className="text-lg text-center md:text-left">
                        {/* Description of case study */}
                        This is a case study for grocery stores to predict your next grocery list and find the cheapest options in the area
                    </p>
                </div>
            </div>
           ))}
        </div>
        <div className="w-full absolute top-[30%] bg-[#a0c0b2]/10 left-0 h-[500px] -skew-y-12">
        </div>
    </motion.div>
  )
}

export default Projects