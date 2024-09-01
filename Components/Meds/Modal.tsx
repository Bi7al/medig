'use client'
import { Close } from '@mui/icons-material';
import { motion } from 'framer-motion';
import React, { MouseEventHandler, SyntheticEvent, useState } from 'react';
interface Medicine {
    medId: number,
    name: string,
    quantity: number
    price: number
}
interface Props {
    modalOpen: boolean,
    selectedMed: Medicine | null,
    closeModal: MouseEventHandler<HTMLButtonElement>
}

function Modal({ modalOpen, selectedMed, closeModal }: Props) {
    // Recieves the Information:
    // modalOpen: determines Whether The Modal is Open or Closed
    // selectedMed: The Medicine Selected by the User for  Buying
    // closeModal: The Function to Close the Modal

    const [bill, setBill] = useState<number>(0)  //State That is Used To Store The Total Of Medicine 

    function calcTotal(event: SyntheticEvent) {
        // This Function Calculates the Total And Stores it in The Bill State
        const target: HTMLInputElement = event.currentTarget as HTMLInputElement; //Gets the Target Element 


        if (parseInt(target.value) > 100) { target.value = "100"; alert("Maximum Allowed Limit = 100"); } // Places a Check Tablets can only Be Bought if The Quantity is = or < 100
        const quantity: number = parseInt(target.value); // Gets the Parsed value from the Target Elelment

        if (selectedMed != null && !isNaN(quantity)) {
            // Calculates the Total and Updates the Bill
            const total: number = ((quantity / selectedMed.quantity) * selectedMed.price);

            setBill(Math.floor(total));
        }
        else {
            // If The Quantity is Not a Number or The SelectedMed State is Invalid Set Bill to 0. (Mainly Placed to Satisfy Typescript)
            setBill(0)
        }

    }
    return (
        <motion.div // Slightly Animated Using the Framer-Motion
            className={modalOpen ? 'fixed inset-0   backdrop-blur-sm flex justify-center items-center text-black ' : "hidden"}
            initial={{
                opacity: 0,
                scale: 0
            }}
            whileInView={{
                scale: 1,
                opacity: 1
            }}
            transition={
                {
                    duration: .2,
                    ease: "easeOut"
                }
            }
        >
            <div className='w-[90vw] md:w-[40vw] h-[60vh] bg-white flex flex-col justify-between pb-2'>
                <div className='w-full  flex justify-between '>
                    {/* Renders the Name of Medicin and The Close Button */}
                    <h1 className='p-2 text-xl md:text-2xl'>{selectedMed?.name}</h1>
                    <button onClick={closeModal} className='bg-red-700 p-2 hover:scale-105'><Close /></button>
                </div>
                <form action="" className='h-full flex flex-col justify-around font-semibold md:text-lg  p-2'>
                    {/* Gets User Address and Quantity for Medicine from The User and Displays the Total Amount of Bill */}
                    <label htmlFor="">
                        Enter your address:
                        <input type="text" placeholder='Enter Your Address Here ' className='block border h-10 w-60 md:w-96 ps-2 ms-4 mt-2' required />
                    </label>
                    <label htmlFor="">Select Quantity:
                        <input type='number' max={100} onChange={calcTotal} name="" id="" className='block border h-10 w-60 md:w-96 ps-2 ms-4 mt-2' required />
                    </label>
                    <label htmlFor="">Total Amount(Rs): (COD)
                        <input type="text" disabled value={bill} className='block border h-10 w-60 md:w-96 ps-2 ms-4 mt-2' />
                    </label>
                    <div className='w-full h-fit flex justify-end gap-4'>
                        {/* Renders the Accept and Close  Button */}
                        <button type='submit' className='py-2 px-6 border rounded-full hover:bg-[#E2E2B6] hover:text-white'>Accept</button>
                        <button onClick={closeModal} className='py-2 px-6 border rounded-full hover:bg-red-700 hover:text-white'>Close</button>
                    </div>
                </form>

            </div>
        </motion.div>
    )
}

export default Modal