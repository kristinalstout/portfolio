'use client'

import React from 'react'
import {PhoneIcon, MapPinIcon, EnvelopeIcon} from '@heroicons/react/24/solid'
import {useForm, SubmitHandler} from "react-hook-form";


type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
}

type Props = {}

function Contact({}: Props) {
    const {register, handleSubmit} = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = formData =>console.log(window.location.href=`mailto:kristinalstout@gmail?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`);
      
    return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
            Contact
        </h3>
        <div className="flex flex-col space-y-10">
            <h4 className="text-4xl font-semibold text-center">
                Let's Talk.
            </h4>
            <div className="space-y-10">
                <div className="flex items-center space-x-5 justify-center">
                    <PhoneIcon className="text-[#a0c0b2] h-7 w-7 animate-pulse"/>
                    <p className="text-2xl">+4437712759</p>
                </div>

                <div className="flex items-center space-x-5 justify-center">
                    <EnvelopeIcon className="text-[#a0c0b2] h-7 w-7 animate-pulse"/>
                    <p className="text-2xl">kristinalstout@gmail.com</p>
                </div>

                <div className="flex items-center space-x-5 justify-center">
                    <MapPinIcon className="text-[#a0c0b2] h-7 w-7 animate-pulse"/>
                    <p className="text-2xl">Address</p>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mx-auto">
                <div className="flex space-x-2">
                    <input {...register('name')} className="contactInput" placeholder="Name" type="text" />
                    <input {...register('email')}className="contactInput" placeholder="Email" type="email"/>
                </div>

                <input {...register('subject')} className="contactInput" placeholder="Subject" type="text"/>

                <textarea {...register('message')} className="contactInput" placeholder="Message"/>

                <button className="bg-[#a0c0b2] py-5 px-10 rounded-md text-black font-bold text-lg ">Submit</button>
            </form>

        </div>
    </div>
  )
}

export default Contact