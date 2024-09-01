"use client"
import SearchBar from '@/Components/SearchBar';
import React, { useState } from 'react'
import Modal from '@/Components/Modal';
interface Medicine {
    medId: number,
    name: string,
    quantity: number
    price: number
}
function Pharmacy() {
    const [modalOpen, setModalOpen] = useState<boolean>(false)
    const [selectedMed, setSelectedMed] = useState<Medicine | null>(null)
    function closeModal() {
        setModalOpen(false)
    }
    function setMed(id: number) {
        const selectedMed: Medicine | undefined = MedicineCatalogue.find((med) => med.medId == id)
        if (selectedMed != undefined) {
            setSelectedMed(selectedMed);
        }
    }
    const MedicineCatalogue: Medicine[] = [
        {
            medId: 1,
            name: "Panadol",
            quantity: 10,
            price: 30
        },
        {

            medId: 2,
            name: "Actim (2.5mg)",
            quantity: 15,
            price: 100
        }, {
            medId: 3,
            name: "Actim (5mg)",
            quantity: 15,
            price: 200
        },
        {
            medId: 4,
            name: "Lexotnil",
            quantity: 20,
            price: 75
        },
        {
            medId: 5,
            name: "Nebil (2.5mg)",
            quantity: 10,
            price: 150
        },
        {
            medId: 6,
            name: "Nebil (5mg)",
            quantity: 10,
            price: 175
        }
    ]

    return (
        <section className='min-h-screen  flex flex-col justify-center md:justify-evenly gap-[10vh] md:gap-0 items-center text-white font-sans font-bold bg-[#6EACDA]'>
            <SearchBar data={MedicineCatalogue} />
            <table className='border-2 w-[90vw] '>
                <thead>
                    <tr className='border-2  w-full'>
                        <th>ID</th>
                        <th>Medicine</th>
                        <th>Price (Rs)</th>
                        <th>Quantity</th>
                        <th>Buy</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        MedicineCatalogue.map((med: Medicine) => {
                            return (
                                <tr key={med.medId} className='border-2 w-full'>
                                    <td className='border-r-2 pe-2 md:pe-4 text-right'>{med.medId}</td>
                                    <td className='border-r-2 md:w-3/5 ps-2'>{med.name}</td>
                                    <td className='border-r-2 pe-2 md:pe-4 text-right' >{med.price}</td>
                                    <td className='border-r-2 pe-2 md:pe-4 text-right' >{med.quantity}</td>
                                    <td className='flex justify-center'><button onClick={() => { setMed(med.medId); setModalOpen(!modalOpen); }} className='p-2 my-1 underline underline-offset-2 md:text-white text-[#ffcf60] md:w-[70px] md:rounded-2xl md:bg-[#ffcf60]'>Buy</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            {/*Modal Element  */}
            <Modal modalOpen={modalOpen} closeModal={closeModal} selectedMed={selectedMed} />

        </section>
    )
}

export default Pharmacy