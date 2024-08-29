'use client'
import Link from 'next/link'
import React, { useState } from 'react'

function Navbar() {
    const [mobileResponsive, setMobileResonsive] = useState(false)
    return (
        <nav className='w-full h-16 px-4 md:px-8 bg-white shadow-lg md:shadow-2xl  fixed flex justify-between items-center'>
            <Link href='/'><h1 className='font-extrabold text-3xl md:text-5xl text-[#3fa2f6]'>medig+</h1></Link >


            <div className={mobileResponsive ? 'absolute h-fit top-16 left-0  py-11 border-t-2  w-full  bg-white ' : "hidden md:static"}>
                <ul className='flex flex-col justify-center items-center ps-4 gap-3 md:flex-row md:gap-8 text-[#2066a2]'>
                    <Link href='/panel' onClick={() => setMobileResonsive(!mobileResponsive)}>
                        <li className='uppercase font-semibold hover:underline hover:transition  ease-in delay-100 hover:underline-offset-8   decoration-[#FFC94A] hover:text-[#3FA2F6]'>doctors</li>
                    </Link>
                    <Link href='/schedule' onClick={() => setMobileResonsive(!mobileResponsive)}>
                        <li className='uppercase font-semibold hover:underline hover:transition  ease-in delay-100 hover:underline-offset-8   decoration-[#FFC94A] hover:text-[#3FA2F6]'>book appointment</li>
                    </Link>
                    <Link href='/pharmacy' onClick={() => setMobileResonsive(!mobileResponsive)}>
                        <li className='uppercase font-semibold hover:underline hover:transition  ease-in delay-100 hover:underline-offset-8   decoration-[#FFC94A] hover:text-[#3FA2F6]'>meds</li>
                    </Link>
                </ul>
            </div>
            <button className='md:hidden' onClick={() => setMobileResonsive(!mobileResponsive)}>Toggle</button>
        </nav>
    )
}

export default Navbar
