'use client'
import { motion } from 'framer-motion';


import React from 'react'
import Image from "next/image";
import image from '@/public/image1.jpg';
import Link from 'next/link';
import { duration } from '@mui/material';


function SectionTop() {
    return (
        <section className="p-2 md:p-4 md:h-screen   flex justify-center shadow-xl ">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: .5
                }}
                className="md:h-[90vh] md:w-[99vw]    relative ">
                <Image src={image}
                    alt="Hospital Building"
                    priority
                    height={660}
                    width={1030}
                    className="object-cover h-full w-full rounded-3xl animate-appear "
                    sizes="(max-width:768px)384w,1030w"




                />
                <div

                    className="absolute top-[50%] left-[50%] h-[fit] md:h-auto  w-[90%] md:w-[60%] rounded-[.75rem] md:rounded-[1.5rem] p-4 bg-opacity-70 bg-black -translate-x-1/2 -translate-y-1/2">
                    <div className="w-full h-full flex flex-col items-center  text-white font-semibold md:text-2xl">
                        <h1 className="text-xl md:text-3xl mb-2">medig+</h1>
                        <p>Care with Compassion </p>
                        <p className="font-normal text-center mt-2 underline decoration-[#FFC94A] decoration-1 underline-offset-2 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate facere ex enim sed iure cum voluptates. </p>
                        <Link href={"/booking"} className=" md:font-semibold text-sm md:text-base mt-2  w-fit p-2 md:p-4 flex items-center rounded-full    bg-[#ffaa3c] hover:animate-rubber-band" >Book Appointment </Link>
                    </div>
                </div>
            </motion.div>
        </section >
    )
}

export default SectionTop