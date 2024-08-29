import Image from "next/image";
import image from '../public/image1.jpg'
export default function Home() {
  return (

    <section className="p-2 md:p-8 md:h-screen   flex justify-center shadow-xl ">
      <div className="md:h-[90vh] md:w-[99vw]  rounded-3xl overflow-hidden relative ">
        <Image src={image}
          alt=""
        />
        <div className="absolute top-[50%] left-[50%]  w-[80%] md:w-[60%] rounded-[1rem] md:rounded-[3rem] p-4 bg-opacity-70 bg-black -translate-x-1/2 -translate-y-1/2">
          <div className="w-full h-full flex flex-col items-center  text-white font-semibold md:text-2xl">
            <h1 className="text-xl md:text-3xl">medig+</h1>
            <br />
            <p>Care with Compassion </p>
            <p className="font-normal text-center mt-2 underline decoration-[#FFC94A] underline-offset-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate facere ex enim sed iure cum voluptates. </p>
          </div>
        </div>
      </div>
    </section>
  );
}
