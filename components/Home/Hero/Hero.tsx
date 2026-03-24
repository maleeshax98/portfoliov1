import React from "react";
import BackgroundVideo from "./BackgroundVideo";

const Hero = () => {
  const headingStyle =
    "font-playfair-display font-extrabold text-4xl bg-amber-300 mb-4";
  return (
    <div>
      <BackgroundVideo>
        <div className="relative z-20 flex h-full flex-col px-4 ">
          <h1 className="text-4xl font-bold text-white md:text-6xl">
            Built for Performance
          </h1>
          <p className="mt-4 text-lg text-gray-200">
            Clean, scalable, and visually immersive interfaces.
          </p>
          <section className="max-w-7xl mx-auto w-full">
            <header>
              <h1 className={headingStyle}>Primary Heading</h1>
            </header>
            <article>
              <h2 className={headingStyle}>Secondary Section</h2>
              <p className="text-gray-700">
                By using mx-auto, this container stays centered regardless of
                screen size.
              </p>
            </article>
          </section>
        </div>
      </BackgroundVideo>
    </div>
  );
};

export default Hero;
