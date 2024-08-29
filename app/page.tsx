import Image from "next/image";
import image from '../public/image1.jpg'
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
      <section className="p-4 md:p-8 bg-white mt-4 gap-4 flex flex-col md:flex-row items-center">
        <p className="font-extrabold text-2xl md:text-5xl text-[#074173] shadow-2xl p-4 rounded-2xl leading-normal md:w-[45vw] mb-8">Built on Trust of our patients.<br />
          Over 1500+ successful procedures, Serving Humanity With Our Best.
        </p>

        {/* Chart Component */}
        <LinearChart />
      </section>
    </main>
  );
}
