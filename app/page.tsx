import Image from "next/image";
import image from '../public/image1.jpg';
import familyImage from '../public/families.jpg';
import LinearChart from "@/Components/LineChart";
export default function Home() {
  return (

    <main>
      <section className="p-2 md:p-4 md:h-screen   flex justify-center shadow-xl ">
        <div className="md:h-[90vh] md:w-[99vw]  rounded-3xl overflow-hidden relative ">
          <Image src={image}
            alt=""
          />
          <div className="absolute top-[50%] left-[50%] h-[70%] md:h-auto  w-[90%] md:w-[60%] rounded-[.75rem] md:rounded-[1.5rem] p-4 bg-opacity-70 bg-black -translate-x-1/2 -translate-y-1/2">
            <div className="w-full h-full flex flex-col items-center  text-white font-semibold md:text-2xl">
              <h1 className="text-xl md:text-3xl mb-2">medig+</h1>

              <p>Care with Compassion </p>
              <p className="font-normal text-center mt-2 underline decoration-[#FFC94A] decoration-1 underline-offset-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate facere ex enim sed iure cum voluptates. </p>
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
      <section className="mx-auto  h-fit w-[95vw]   py-4  flex   items-center flex-col text-[#074173]">
        <h1 className="font-extrabold text-3xl  ">Who are We ?</h1>
        <hr className="w-[90%] shadow-2xl" />
        <div className=" w-[95vw] md:w-[70vw] md:h-[45vh] rounded-[3rem] shadow-2xl overflow-hidden flex justify-center items-center mt-4 ">
          <Image
            src={familyImage}
            alt="" />
        </div>
        <p className="mt-4 p-2 bg-white rounded-2xl shadow-lg text-sm text-center font-semibold md:text-2xl underline decoration-[#FFC94A] decoration-[1.5px] md:leading-relaxed md:w-[50vw]">
          " We are a team of dedicated professionals who are passionate about delivering exceptional patient care. Our team is
          comprised of experienced Doctors, Nurses, and Support staff who work together to provide personalized attention
          and care to you and your Family."
        </p>
      </section>
      <section className="w-[60vw]">
      </section>
    </main>
  );
}
