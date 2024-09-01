"use client"
import React, { SyntheticEvent, useState } from 'react'
import { Search } from '@mui/icons-material';
import { motion } from 'framer-motion';

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
    // Recieves an Array of Data to Perform Search On.
    const [searchval, setSearchValue] = useState<string>("") // Gets the Value from Input from the Search Bar

    function handleChange(event: SyntheticEvent) { // Handles The Change of Search Input and Updates searchVal State
        const target: HTMLInputElement = event.currentTarget as HTMLInputElement;
        setSearchValue(target.value)
    }
    function handleClick(id: number) { // Sets searchVal State equal to the Clicked Med's Name
        const selectedMed: Medicine | undefined = data.find((med) => med.medId == id);
        if (selectedMed != undefined) {
            setSearchValue(selectedMed.name);
        }

    }

    return (
        <motion.div // Slightly Animated Using Framer Motion
            className='h-fit relative text-black'
            initial={{
                opacity: 0,
                y: -100
            }}
            animate={{
                opacity: 1,
                y: 0

            }}
            transition={{
                duration: 0.5
            }}
        >
            <div className='flex justify-center items-center h-[45px] w-[250px] md:w-[400px]   rounded-2xl bg-white  overflow-hidden' >
                {/* The Main Search Bar */}
                <input type="text" placeholder='Search a Medicine' value={searchval} onChange={handleChange} className='h-full w-[85%] p-4 border-e-2 outline-none' />

                <button className='h-full w-[15%] flex justify-center items-center active:scale-95'>
                    <Search />
                </button>

            </div>
            {/* Renders the DropDown Component Containg Search Suggestions */}
            {
                searchval && < div className=' w-[250px] md:w-[400px] z-50 absolute top-12 rounded-lg  bg-white ps-2 '>
                    {
                        data.filter((med: Medicine) => {
                            // Gets the searchVal converts it to lowerCase and does same to every med's name in data array and renders the top 5 results as suggestions
                            const searchTerm: string = searchval.toLowerCase();
                            const medName: string = med.name.toLowerCase();
                            return searchTerm === medName ? false : medName.startsWith(searchTerm)
                        }).slice(0, 5).map((med => {
                            return (
                                // Seperate Row for Every Suggestion
                                <div key={med.medId} className='border-b-2 hover:border-b-4 p-2 hover:cursor-pointer' onClick={() => handleClick(med.medId)}>{med.name}</div>
                            )
                        }))
                    }
                </div>
            }
        </motion.div >
    )
}

export default SearchBar