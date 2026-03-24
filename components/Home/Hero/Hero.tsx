import React from "react";
import BackgroundVideo from "./BackgroundVideo";

const Hero = () => {
  const headingStyle =
    "font-playfair-display font-extrabold text-4xl bg-amber-300 mb-4";
  const largeTextClass =
    "font-playfair-display font-extrabold text-[15vh] leading-[0.9] tracking-tighter uppercase";
  const navTextClass =
    "font-playfair-display font-extrabold text-[10vh] leading-[0.85] hover:italic transition-all cursor-pointer";

  return (
    <div className="h-screen w-full overflow-hidden">
      <BackgroundVideo>
        <div className="relative z-20 flex h-full items-center px-8">
          <section className="mx-auto w-full max-w-[1800px]">
            <div className="flex flex-col lg:flex-row justify-between items-end lg:items-center gap-8">
              {/* Left Side: Headline */}
              <div className="max-w-[80%]">
                <h1 className={`${largeTextClass} text-[#EC0505]`}>
                  Cinematic  Experiences. <br />
                  <span className="text-white">Engineered.</span>
                </h1>
                <p className="mt-6  text-lg font-extralight text-gray-300">
                  Focused on backend development and the fundamentals of deep
                  computer science.
                </p>
              </div>

              <nav className="flex flex-col items-end justify-between  h-screen text-right border-r-4 border-[#EC0505] pr-6 py-10">
                <p className={navTextClass}>Home</p>
                <div>
                  <p className={navTextClass}>Projects</p>
                  <p className={navTextClass}>Works</p>
                  <p className={navTextClass}>Blog</p>
                </div>
                <p className={navTextClass}>Contact</p>
              </nav>
            </div>
          </section>
        </div>
      </BackgroundVideo>
    </div>
  );
};

export default Hero;
