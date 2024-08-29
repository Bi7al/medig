'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
function Navbar() {
    const [mobileResponsive, setMobileResonsive] = useState(false)
    return (
        <nav className='w-full h-16 px-4 md:px-8 bg-white shadow-lg md:shadow-2xl  fixed flex justify-between items-center'>
            <Link href='/'><h1 className='font-extrabold text-3xl md:text-5xl text-[#3fa2f6]'>medig+</h1></Link >


            <div>
                <ul className='hidden md:flex justify-center items-center ps-4 gap-8 text-[#2066a2]'>
                    <Link href='/doctorspanel' >
                        <li className='uppercase font-semibold hover:underline  hover:underline-offset-8   decoration-[#FFC94A] hover:text-[#3FA2F6]'>doctors</li>
                    </Link>
                    <Link href='/schedule' >
                        <li className='uppercase font-semibold hover:underline  hover:underline-offset-8   decoration-[#FFC94A] hover:text-[#3FA2F6]'>book appointment</li>
                    </Link>
                    <Link href='/pharmacy' >
                        <li className='uppercase font-semibold hover:underline  hover:underline-offset-8   decoration-[#FFC94A] hover:text-[#3FA2F6]'>meds</li>
                    </Link>
                </ul>
            </div>
            <div className={mobileResponsive ? 'absolute bg-gray-300 h-[100vh] w-full top-16 left-0 md:hidden transition ease-in  shadow-2xl' : "absolute top-[-100vh] "}>
                <ul className='flex flex-col justify-center border-t-2 bg-white items-center p-4 gap-8 text-[#2066a2]'>
                    <Link href='/doctorspanel' onClick={() => setMobileResonsive(!mobileResponsive)}>
                        <li className='uppercase font-semibold underline underline-offset-2  hover:underline-offset-8    decoration-[#FFC94A] hover:text-[#3FA2F6]'>doctors</li>
                    </Link>
                    <Link href='/schedule' onClick={() => setMobileResonsive(!mobileResponsive)}>
                        <li className='uppercase font-semibold underline underline-offset-2  hover:underline-offset-8   decoration-[#FFC94A] hover:text-[#3FA2F6]'>book appointment</li>
                    </Link>
                    <Link href='/pharmacy' onClick={() => setMobileResonsive(!mobileResponsive)}>
                        <li className='uppercase font-semibold underline underline-offset-2  hover:underline-offset-8   decoration-[#FFC94A] hover:text-[#3FA2F6]'>meds</li>
                    </Link>
                </ul>
            </div>

            <button className='md:hidden ' type='button' onClick={() => setMobileResonsive(!mobileResponsive)}>{mobileResponsive ? <CloseIcon /> : <MenuIcon />}</button>
        </nav >
    )
}

export default Navbar
