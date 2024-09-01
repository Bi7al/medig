import React from 'react'
import Image, { StaticImageData } from 'next/image';
interface Doctor {
    image: StaticImageData,
    name: string,
    qualification: string,
    description: string,
}
interface Props {
    departmentTitle: string,
    staff: Doctor[]

}
function Department({ departmentTitle, staff }: Props) {
    // Recieves Title of Department and An Array Containing Doctors of the Department
    return (
        <div className='w-2/3'>
            {/* Title Heading For the Department */}
            <h1 className='text-white text-center my-8 text-2xl'>{departmentTitle}</h1>
            {
                staff.map((member: Doctor, index) => {
                    return (
                        <div key={index} className='h-fit md:h-[30vh] w-full bg-white bg-opacity-50 border border-[#ffcf60] rounded-xl shadow-2xl mb-[5vh] md:mb-[10vh] flex flex-col md:flex-row items-center p-4 md:px-8 hover:scale-105 transition duration-150'>
                            {/* Image of The Docotor */}
                            <Image className='w-1/2 md:w-1/6 h-4/5  rounded-lg'

                                src={member.image}
                                alt='Doctor Image Goes Here'
                                height={205}
                                width={215}
                                sizes='(max-width:768px) 120w,215w'
                                quality={50}
                                placeholder="blur"

                            />

                            {/* Conatians Information About The docotor Name, Qualification and Description */}
                            <div className='text-sm md:text-xl ms-4 h-3/5 text-slate-800'>
                                <h1 className='font-sans font-bold text-xl md:text-3xl'>{member.name}</h1>
                                <p>{member.qualification}</p>
                                <p>{member.description}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Department