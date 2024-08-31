import LinearChart from "@/Components/LineChart";
import Image from "next/image";
import familyImage from '../public/families.jpg';
import image from '../public/image1.jpg';
import Link from "next/link";
import CardContainer from "@/Components/CardContainer";
export default function Home() {
  return (

    <>
      <section className="p-2 md:p-4 md:h-screen   flex justify-center shadow-xl ">
        <div className="md:h-[90vh] md:w-[99vw]    relative ">
          <Image src={image}
            alt="Hospital Building"
            priority
            className="object-cover h-full w-full rounded-3xl"
            sizes="(max-width:768px)400w,1240w"
          />
          <div className="absolute top-[50%] left-[50%] h-[fit] md:h-auto  w-[90%] md:w-[60%] rounded-[.75rem] md:rounded-[1.5rem] p-4 bg-opacity-70 bg-black -translate-x-1/2 -translate-y-1/2">
            <div className="w-full h-full flex flex-col items-center  text-white font-semibold md:text-2xl">
              <h1 className="text-xl md:text-3xl mb-2">medig+</h1>
              <p>Care with Compassion </p>
              <p className="font-normal text-center mt-2 underline decoration-[#FFC94A] decoration-1 underline-offset-2 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate facere ex enim sed iure cum voluptates. </p>
              <Link className=" md:font-semibold text-sm md:text-base mt-2  w-fit p-2 md:p-4 flex items-center rounded-full    bg-[#ffaa3c] hover:bg-[#ffbf6b]" href={"/schedule"}>Book Appointment </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="p-4 md:p-8 bg-white my-4 gap-4 flex flex-col md:flex-row items-center">
        <p className="font-extrabold text-2xl md:text-5xl text-[#074173] shadow-2xl p-4 rounded-2xl leading-10 h-full md:w-[45vw] mb-8">Built on Trust of our patients.<br />
          Over 1500+ successful procedures, Serving Our Best to Humanity.
        </p>

        {/* Chart Component */}
        <LinearChart />
      </section>
      <section className="mx-auto mb-8  h-fit w-[95vw]   py-4  flex   items-center flex-col text-[#074173]">
        <h1 className="font-extrabold text-3xl  ">Who are We ?</h1>
        <hr className="w-[90%] shadow-2xl" />
        <div className=" w-[95vw] md:w-[70vw] md:h-[45vh]  shadow-2xl  flex justify-center items-center mt-4 ">
          <Image
            src={familyImage}
            alt="Families in a Park"
            className="object-cover h-full w-full rounded-3xl"
            sizes="(max-width:768px)390w,900w"
          />

        </div>
        <p className="mt-4 p-2 bg-white rounded-2xl shadow-lg text-xl text-center font-semibold md:text-2xl underline decoration-[#FFC94A] decoration-[1.5px] md:leading-relaxed md:w-[50vw]">
          We are a team of Doctors, Nurses, and Support staff,  Passionate about delivering exceptional patient care and who work together to provide personalized attention and care to you and your Family.
        </p>

      </section>
      <CardContainer />

    </>
  );
}
