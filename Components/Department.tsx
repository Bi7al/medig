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
    return (
        <div className='w-2/3'>
            <h1 className='text-white text-center my-8 text-2xl'>{departmentTitle}</h1>
            {
                staff.map((member, index) => {
                    return (
                        <div key={index} className='h-[30vh] w-full bg-white bg-opacity-50 border border-[#ffcf60] rounded-xl shadow-2xl mb-[10vh] flex items-center px-8 hover:scale-105 transition duration-150'>
                            <Image className='w-1/6 h-4/5  rounded-lg'

                                src={member.image}
                                alt='Doctor Image Goes Here' />

                            <div className='text-xl ms-4 h-3/5 text-slate-800'>
                                <h1 className='font-sans font-bold text-3xl'>{member.name}</h1>
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