import { StaticImageData } from 'next/image';
import React from 'react';
import doctorImage1 from '@/public/DoctorImages/doctor1.jpg'
import doctorImage2 from '@/public/DoctorImages/doctor2.jpg'
import doctorImage3 from '@/public/DoctorImages/doctor3.jpg'
import doctorImage4 from '@/public/DoctorImages/doctor4.jpg'
import doctorImage5 from '@/public/DoctorImages/doctor5.jpg'
import doctorImage6 from '@/public/DoctorImages/doctor6.jpg'
import Department from '@/Components/Doctors/Department';
interface Doctor {
    image: StaticImageData,
    name: string,
    qualification: string,
    description: string,
}
function Doctors() {
    const general: Doctor[] = [{
        image: doctorImage3,
        name: "Dr. Abdullah",
        qualification: "MBBS, SEC 2",
        description: "A experienced general practitioner who provides comprehensive primary care for a wide range of health conditions. Dr. Abdullah specializes in family medicine."

    },
    {
        image: doctorImage2,
        name: "Dr. Ahmer",
        qualification: "MBBS, SEC 2",
        description: "A compassionate general practitioner who is dedicated to providing personalized care to patients of all ages. Dr. Ahmer has a particular interest in geriatrics."

    }]



    const Cardiology: Doctor[] = [{
        image: doctorImage1,
        name: "Dr. Rehan",
        qualification: "MBBS, SEC 2",
        description: "A renowned cardiologist with extensive experience in diagnosing and treating heart diseases. Dr. Rehan specializes in  coronary artery disease, heart failure."

    },
    {
        image: doctorImage4,
        name: "Dr. Sheeren",
        qualification: "MBBS, SEC 2",
        description: "A compassionate and skilled cardiologist who is dedicated to providing personalized care to patients with heart conditions. Dr. Sheeren has a particular interest in interventional cardiology."

    }]
    const Dermatology: Doctor[] = [{
        image: doctorImage5,
        name: "Dr. Abid",
        qualification: "MBBS, SEC 2",
        description: "A compassionate dermatologist who is dedicated to providing personalized care to patients with dermatological concerns. Dr. Abid  has a particular interest in pediatric dermatology"

    },
    {
        image: doctorImage6,
        name: "Dr. Shehnaaz",
        qualification: "MBBS, SEC 2",
        description: "A skilled dermatologist with expertise in diagnosing and treating skin, hair, and nail conditions. Dr. Shehnaaz specializes in  skin cancer and general Skin disease."

    }]
    const Nuerology: Doctor[] = [{
        image: doctorImage1,
        name: "Dr. Ali",
        qualification: "MBBS, SEC 2",
        description: " A highly regarded neurologist with expertise in diagnosing and treating a wide range of neurological disorders. Dr. Ali specializes in stroke, multiple sclerosis."

    },
    {
        image: doctorImage6,
        name: "Dr. Aleena",
        qualification: "MBBS, SEC 2",
        description: "A dedicated neurologist who is committed to providing compassionate care to patients with neurological conditions. Dr. Aleena has a particular interest in epilepsy, neuromuscular disorders."

    }]
    return (
        <section className='w-full bg-[#16325B] min-h-screen border-b-2 border-[#ffcf60] flex justify-center items-center flex-col py-8'>
            {/* Contains Information About Doctors */}
            <h1 className='text-center font-bold text-2xl md:text-5xl text-white underline'>Meet the Team</h1>
            <Department departmentTitle='General' staff={general} />
            <Department departmentTitle='Cardiology' staff={Cardiology} />
            <Department departmentTitle='Dermatology' staff={Dermatology} />
            <Department departmentTitle='Nuerology' staff={Nuerology} />

        </section >
    )
}

export default Doctors