"use client"
import React from 'react';
import Cardio from '@/public/heart.jpg';
import Nuero from '@/public/Nuero.jpg';
import Derma from '@/public/Derma.jpg';
import { motion } from 'framer-motion';
import { StaticImageData } from 'next/image';
import Card from './Card';
interface Card {
    image: StaticImageData,
    alt: string,
    title: string,
    description: string,
}
function CardContainer() {
    // Receives Nothing in Props. Contains data for Every Card and Acts As A Container For All the Cards.

    const cards: Card[] = [
        {
            image: Cardio,
            alt: 'Cardiology Department Image',
            title: 'Cardiology ',
            description: 'We offer a wide range of diagnostic and therapeutic services to address your heart health needs. Our state-of-the-art facilities and advanced technology ensure that you receive the highest quality care.',

        }, {
            image: Nuero,
            alt: 'Nuerology Department Image',
            title: 'Nuerology ',
            description: "Our Neurology Department offers state-of-the-art diagnosis and treatment for a wide range of neurological conditions, including stroke, multiple sclerosis, Parkinson's disease, and more.",

        },
        {
            image: Derma,
            alt: 'Dermatology Department Image',
            title: 'Dermatology ',
            description: "Our Dermatology Department is your partner in skin health. We offer expert care for a variety of skin conditions, from acne to skin cancer. Let us help you achieve your skin goals."



        },
    ]
    return (
        <motion.section    //Left-to-right Sliding Animation Added Through Framer_Motion Library
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            transition={{
                duration: 1,
                ease: "easeInOut"
            }}
            className='w-full md:w-[95vw] flex justify-around my-4 flex-col md:flex-row'>
            {
                cards.map((card, index) => {
                    return (
                        <Card key={index} image={card.image} alt={card.alt} title={card.title} description={card.description} />
                    )
                })
            }
        </motion.section >
    )
}

export default CardContainer