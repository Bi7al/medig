import React from 'react';
import Image, { StaticImageData } from 'next/image';
interface Props {
    image: StaticImageData,
    alt: string,
    title: string,
    description: string,
}
function Card({ image, alt, title, description }: Props) {
    return (
        <div className='w-[80%] mx-auto md:w-[25vw] h-[60vh]  flex flex-col items-center p-4 rounded-2xl shadow-[2.5px_2.5px_10px_0px] shadow-slate-500 gap-2  m-4 md:hover:scale-105 transition delay-150'>
            <Image
                src={image}
                alt={alt}
                className='w-full h-[50%] rounded-lg'
            />
            <h3 className=' w-full font-sans font-semibold text-lg md:text-2xl'>{title}</h3>
            <p className='w-full text-left  md:text-lg'>{description}</p>
        </div >
    )
}


export default Card