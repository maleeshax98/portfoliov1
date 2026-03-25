import About from "@/components/Home/About";
import BackgroundVideo from "@/components/Home/Hero/BackgroundVideo";
import Hero from "@/components/Home/Hero/Hero";
import FirstSlide from "@/components/Home/Slides/FirstSlide";
import SecondSlide from "@/components/Home/Slides/SecondSlide";
import React from "react";

const Page = () => {
  return (
    <main className="min-h-screen w-full">
      <Hero />
      <FirstSlide />
      <About />
      <SecondSlide />
      <div className="h-screen"></div>
    </main>
  );
};

export default Page;
