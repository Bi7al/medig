import Image from "next/image";
import image from '../public/image1.jpg'
export default function Home() {
  return (

    <section className="p-8 md:p-8 md:h-screen   flex justify-center items-center">
      <div className="md:h-[99vh] md:w-[99vw]  rounded-3xl overflow-hidden relative ">
        <Image src={image}
          alt=""
        />
        <div className="absolute top-[50%] left-[50%] h-[50%] w-[70%] md:w-[60%] rounded-[3rem] p-4 bg-opacity-30 bg-white -translate-x-1/2 -translate-y-1/2">
          <div className="w-full h-full flex justify-center items-center">
            <h1>Hello World</h1>
          </div>
        </div>
      </div>
    </section>
  );
}
