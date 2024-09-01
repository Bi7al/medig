'use client'
import Link from 'next/link'
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion';

/**
 * A responsive navigation bar component.
 *
 * The Navbar component is designed to be used as a top-level navigation element.
 * It includes links to the main pages of the application and a mobile-responsive
 * menu that can be toggled on and off.
 */




function Navbar() {

    const [mobileResponsive, setMobileResonsive] = useState<boolean>(false)
    return (

        <nav className='w-full h-[10vh] px-4  md:px-8 z-20 bg-white border-b-2 fixed flex justify-between items-center'>
            <Link href='/'><h1 className='font-extrabold text-3xl md:text-5xl text-[#3fa2f6]'>medig+</h1></Link >


            <div>
                <ul className='hidden md:flex justify-center items-center ps-4 me-8 gap-8 text-[#2066a2]'>
                    <Link href='/' className='hover:scale-105 transition delay-75' >
                        <li className='uppercase font-semibold hover:underline  hover:underline-offset-8   decoration-[#FFC94A] hover:text-[#3FA2F6] '>Home</li>
                    </Link>
                    <Link href='/doctorspanel' className='hover:scale-105 transition delay-75' >
                        <li className='uppercase font-semibold hover:underline  hover:underline-offset-8   decoration-[#FFC94A] hover:text-[#3FA2F6]'>doctors</li>
                    </Link>
                    <Link href='/booking' className='hover:scale-105 transition delay-75' >
                        <li className='uppercase font-semibold hover:underline  hover:underline-offset-8   decoration-[#FFC94A] hover:text-[#3FA2F6]'>book appointment</li>
                    </Link>
                    <Link href='/pharmacy' className='hover:scale-105 transition delay-75' >
                        <li className='uppercase font-semibold hover:underline  hover:underline-offset-8   decoration-[#FFC94A] hover:text-[#3FA2F6]'>meds</li>
                    </Link>
                </ul>
            </div>
            <motion.div // For Mobile Navigation Only Appears on Screens Below 768px. Animated Using Framer Motion Library
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                    duration: 0.5,
                }}

                className={mobileResponsive ? 'fixed inset-0 top-[10vh] h-screen w-screen backdrop-blur' : "absolute top-[-100vh] "}>
                <motion.ul
                    // Contains Nav Links
                    initial={{
                        y: -200,
                        opacity: 0
                    }}
                    whileInView={{
                        y: 0,
                        opacity: 1
                    }}
                    transition={{
                        duration: 0.5,
                    }}
                    className='flex flex-col justify-center border-t-2 bg-white items-center p-4 gap-8 text-[#2066a2]'>
                    <Link href='/' onClick={() => setMobileResonsive(!mobileResponsive)} >
                        <li className='uppercase font-semibold underline underline-offset-2  hover:underline-offset-8    decoration-[#FFC94A] hover:text-[#3FA2F6]'>Home</li>
                    </Link>
                    <Link href='/doctorspanel' onClick={() => setMobileResonsive(!mobileResponsive)}>
                        <li className='uppercase font-semibold underline underline-offset-2  hover:underline-offset-8    decoration-[#FFC94A] hover:text-[#3FA2F6]'>doctors</li>
                    </Link>
                    <Link href='/booking' onClick={() => setMobileResonsive(!mobileResponsive)}>
                        <li className='uppercase font-semibold underline underline-offset-2  hover:underline-offset-8   decoration-[#FFC94A] hover:text-[#3FA2F6]'>book appointment</li>
                    </Link>
                    <Link href='/pharmacy' onClick={() => setMobileResonsive(!mobileResponsive)}>
                        <li className='uppercase font-semibold underline underline-offset-2  hover:underline-offset-8   decoration-[#FFC94A] hover:text-[#3FA2F6]'>meds</li>
                    </Link>
                </motion.ul>
            </motion.div>

            <motion.button

                //Close Button And The Burger Menu Icon
                initial={{ rotate: 0 }}
                whileTap={{
                    rotate: 180,
                }}
                transition={{
                    duration: 0.2,
                }}
                className='md:hidden ' type='button' onClick={() => setMobileResonsive(!mobileResponsive)}>
                {mobileResponsive ? <CloseIcon /> : <MenuIcon />}
            </motion.button>
        </nav >
    )
}

export default Navbar
