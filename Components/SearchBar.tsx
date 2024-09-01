"use client"
import React, { SyntheticEvent, useState } from 'react'
import { Search } from '@mui/icons-material';
interface Medicine {
    medId: number,
    name: string,
    quantity: number
    price: number
}
interface Props {
    data: Medicine[]
}
function SearchBar({ data }: Props) {
    const [searchval, setSearchValue] = useState<string>("")

    function handleChange(event: SyntheticEvent) {
        const target: HTMLInputElement = event.currentTarget as HTMLInputElement;
        setSearchValue(target.value)
    }
    function handleClick(id: number) {
        const selectedMed: Medicine | undefined = data.find((med) => med.medId == id);
        if (selectedMed != undefined) {
            setSearchValue(selectedMed.name);
        }

    }

    return (
        <div className='h-fit relative text-black'>
            <div className='flex justify-center items-center h-[45px] w-[250px] md:w-[400px]   rounded-2xl bg-white  overflow-hidden' >
                <input type="text" placeholder='Search a Medicine' value={searchval} onChange={handleChange} className='h-full w-[85%] p-4 border-e-2 outline-none' />

                <button className='h-full w-[15%] flex justify-center items-center active:scale-95'>
                    <Search />
                </button>

            </div>
            {
                searchval && < div className=' w-[250px] md:w-[400px] z-50 absolute top-12 rounded-lg  bg-white ps-2 '>
                    {
                        data.filter((med: Medicine) => {
                            const searchTerm: string = searchval.toLowerCase();
                            const medName: string = med.name.toLowerCase();
                            return searchTerm === medName ? false : medName.startsWith(searchTerm)
                        }).slice(0, 5).map((med => {
                            return (
                                <div key={med.medId} className='border-b-2 hover:border-b-4 p-2 hover:cursor-pointer' onClick={() => handleClick(med.medId)}>{med.name}</div>
                            )
                        }))
                    }
                </div>
            }
        </div >
    )
}

export default SearchBar