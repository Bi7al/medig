import React from 'react'
import Image from "next/image";
import familyImage from '@/public/families.jpg';
function EndSection() {
    // Conatins AN Image and the "Who We Are? Information"
    return (
        <section className="mx-auto mb-8  h-fit w-[95vw]   py-4  flex   items-center flex-col text-[#074173]">
            <h1 className="font-extrabold text-3xl  ">Who are We ?</h1>
            <hr className="w-[90%] shadow-2xl" />
            <div className=" w-[95vw] md:w-[70vw] md:h-[45vh]  shadow-2xl  flex justify-center items-center mt-4 ">
                <Image
                    src={familyImage}
                    alt="Families in a Park"
                    height={330}
                    width={760}
                    className="object-cover h-full w-full rounded-3xl"
                    sizes="(max-width:768px)390w,760w"
                    placeholder="blur"

                />

            </div>
            <p className="mt-4 p-2 bg-white rounded-2xl shadow-lg text-xl text-center font-semibold md:text-2xl underline decoration-[#FFC94A] decoration-[1.5px] md:leading-relaxed md:w-[50vw]">
                We are a team of Doctors, Nurses, and Support staff,  Passionate about delivering exceptional patient care and who work together to provide personalized attention and care to you and your Family.
            </p>

        </section>
    )
}

export default EndSection