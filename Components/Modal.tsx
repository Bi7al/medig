import { Close } from '@mui/icons-material'
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
    const [bill, setBill] = useState<number>(0)

    function calcTotal(event: SyntheticEvent) {
        const target: HTMLInputElement = event.currentTarget as HTMLInputElement;
        if (parseInt(target.value) > 100) { target.value = "100"; alert("Maximum Allowed Limit = 100"); }
        var quantity: number = parseInt(target.value);

        if (selectedMed != null && !isNaN(quantity)) {
            const total: number = ((quantity / selectedMed.quantity) * selectedMed.price);

            setBill(Math.floor(total));
        }
        else {
            setBill(0)
        }

    }
    return (
        <div className={modalOpen ? 'fixed inset-0   backdrop-blur-sm flex justify-center items-center text-black ' : "hidden"}>
            <div className='w-[90vw] md:w-[40vw] h-[60vh] bg-white flex flex-col justify-between pb-2'>
                <div className='w-full  flex justify-between '>
                    <h1 className='p-2 text-2xl'>{selectedMed?.name}</h1>
                    <button onClick={closeModal} className='bg-red-700 p-2 hover:scale-105'><Close /></button>
                </div>
                <form action="" className='h-full flex flex-col justify-around text-lg font-normal p-2'>
                    <label htmlFor="">
                        Enter your address:
                        <input type="text" placeholder='Enter Your Address Here ' className='block border h-10 w-96 ps-2 ms-4 mt-2' required />
                    </label>
                    <label htmlFor="">Select Quantity:
                        <input type='number' max={100} onChange={calcTotal} name="" id="" className='block border h-10 w-96 ps-2 ms-4 mt-2' required />
                    </label>
                    <label htmlFor="">Total Amount(Rs): (COD)
                        <input type="text" disabled value={bill} className='block border h-10 w-96 ps-2 ms-4 mt-2' />
                    </label>
                    <div className='w-full h-fit flex justify-end gap-4'>
                        <button type='submit' className='py-2 px-6 border rounded-full hover:bg-[#E2E2B6] hover:text-white'>Accept</button>
                        <button onClick={closeModal} className='py-2 px-6 border rounded-full hover:bg-red-700 hover:text-white'>Close</button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Modal