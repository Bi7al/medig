import React from 'react';
function AppointmentBooking() {

    return (
        <section className='h-[75vh] md:h-[90vh] w-[100vw]  flex justify-around items-center'>

            <div className='shadow-[05px_05px_10px_0px_#] shadow-slate-400  w-[90vw] md:w-[40vw] rounded-3xl ' >
                <h1 className='text-3xl font-extrabold text-black text-opacity-40 text-center underline decoration-1 underline-offset-4 mt-5'>Booking Form
                </h1>
                <form className='flex flex-col p-1 w-full  gap-5 md:h-[70vh] ps-6 '>
                    <label htmlFor="name">Full Name:
                        <input type="text" id='name' placeholder='Enter your Name' className='border-2 rounded px-2 w-3/4 h-10 block' /></label>
                    <label htmlFor="email">Your Email Address:
                        <input type="email" id='email' placeholder='Enter Your Email' className='border-2 rounded px-2 w-3/4 h-10 block' /></label>
                    <label htmlFor="date">Select a Date for Appointment:
                        <input type="date" id='date' className='border-2 rounded px-2 w-3/4 h-10 block' /></label>
                    <label htmlFor="deptt">Select a Department:
                        <select name="" id="deptt" className='border-2 rounded px-2 w-3/4  h-10 block'>
                            <option value="">Department</option>
                            <option value="">General</option>
                            <option value="">Dermatology (Skin)</option>
                            <option value="">Urology</option>
                            <option value="">Lab Session</option>
                        </select>
                    </label>
                    <label htmlFor="doctors">Available Doctors:
                        <select name="" id="doctors" className='border-2 rounded px-2 w-3/4 h-10 block' >
                            <option >Select Doctor</option>
                            <option value="">Dr.Abdullah</option>
                            <option value="">Dr.Ayesha</option>
                            <option value="">Dr.Hammad</option>
                        </select></label>
                    <button className='h-12 w-[8rem] rounded-full text-white font-bold text-xl  border bg-[#ffcf60]'>Request</button>
                </form>

            </div>
            <p className='hidden md:block h-[75vh] w-[35vw] font-extrabold my-auto text-5xl font-sans text-black text-opacity-30 pt-8'>
                Get the Best possible treatment with  Our team of expert professionals, providing top-notch care and personalized attention.
            </p>
        </section >
    )
}

export default AppointmentBooking