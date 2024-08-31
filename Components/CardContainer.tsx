import React from 'react';
import Cardio from '@/public/heart.jpg'
import { StaticImageData } from 'next/image';
import Card from './Card';
interface Card {
    image: StaticImageData,
    alt: string,
    title: string,
    description: string,
}
function CardContainer() {
    const cards: Card[] = [
        {
            image: Cardio,
            alt: 'Cardiology Department Image',
            title: 'Cardiology Department',
            description: 'This is a cardiology department.',

        }, {
            image: Cardio,
            alt: 'Cardiology Department Image',
            title: 'Cardiology Department',
            description: 'This is a Nueorology department.',

        },
        {
            image: Cardio,
            alt: 'Cardiology Department Image',
            title: 'Cardiology Department',
            description: 'This is a Urology department.',

        },
    ]
    return (
        <section className='w-full md:w-[95vw] flex justify-around my-4 flex-col md:flex-row'>
            {
                cards.map((card, index) => {
                    return (
                        <Card key={index} image={card.image} alt={card.alt} title={card.title} description={card.description} />
                    )
                })
            }
        </section >
    )
}

export default CardContainer