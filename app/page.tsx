import React from "react";
import CardContainer from "@/Components/Home/CardContainer";
import SectionTop from "@/Components/Home/SectionTop";
import SectionMid from "@/Components/Home/SectionMid";
import EndSection from "@/Components/Home/EndSection";
export default function Home() {
  return (

    <>
      <SectionTop />
      <SectionMid />
      <EndSection />
      <CardContainer />
    </>
  );
}
