import React from 'react'
import LinearChart from "@/Components/Home/LineChart";

function SectionMid() {
    return (
        <section className="p-4 md:p-8 bg-white my-4 gap-4 flex flex-col md:flex-row items-center">
            <p
                className="font-extrabold text-2xl md:text-5xl text-[#074173] shadow-2xl p-4 rounded-2xl leading-10 h-full md:w-[45vw] mb-8"

            >Built on Trust of our patients.<br />
                Over 1500+ successful procedures, Serving Our Best to Humanity.
            </p>

            {/* Chart Component */}
            <LinearChart />
        </section>
    )
}

export default SectionMid