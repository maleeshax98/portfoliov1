"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import BackgroundVideo from "./BackgroundVideo";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const container = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const myImage = useRef(null);
  const textContainer = useRef(null);
  useGSAP(
    () => {
      // High-performance setters for the light effect
      const xTo = gsap.quickSetter(glowRef.current, "x", "px");
      const yTo = gsap.quickSetter(glowRef.current, "y", "px");

      const handleMouseMove = (e: MouseEvent) => {
        // Centers the 600px glow on the cursor
        xTo(e.clientX - 300);
        yTo(e.clientY - 300);
      };

      gsap.to(myImage.current, {
        scrollTrigger: {
          trigger: container.current,
          start: "bottom 90%",
          end: "bottom 10%",
          scrub: 1,
        },
        x: "100%",
      });

      gsap.to(textContainer.current, {
        scrollTrigger: {
          trigger: container.current,
          start: "bottom 90%",
          end: "bottom 10%",
          scrub: 1,
        },
        y: "-100%",
      });

      window.addEventListener("mousemove", handleMouseMove);

      return () => window.removeEventListener("mousemove", handleMouseMove);
    },
    { scope: container },
  );

  const largeTextClass =
    "font-playfair-display font-extrabold text-[15vh] leading-[0.9] tracking-tighter uppercase";
  const navTextClass =
    "font-playfair-display font-extrabold text-[10vh] leading-[0.85] hover:italic transition-all cursor-pointer";

  return (
    <div ref={container} className="h-screen w-full overflow-hidden bg-black">
      {/* Dynamic Light Layer - Moves with Mouse */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute top-0 left-0 z-10 h-[600px] w-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(236,5,5,0.15) 0%, rgba(236,5,5,0) 70%)",
          filter: "blur(60px)",
          willChange: "transform",
        }}
      />

      <BackgroundVideo>
        <div className="relative z-20 flex h-full items-center px-8">
          <section className="mx-auto w-full max-w-[1800px]">
            <div className="flex flex-col lg:flex-row justify-between items-end lg:items-center gap-8">
              {/* Left Side: Headline */}
              <div ref={textContainer} className="max-w-[80%] relative">
                <h1 className={`${largeTextClass} text-[#EC0505]`}>
                  Cinematic Experiences. <br />
                  <span className="text-white">Engineered.</span>
                  <span className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-10 font-light">
                    AND
                  </span>
                </h1>
                <p className="mt-6 text-lg font-extralight text-gray-300">
                  Focused on backend development and the fundamentals of deep
                  computer science.
                </p>
              </div>

              <nav className="flex flex-col items-end justify-between h-screen text-right border-r-4 border-[#EC0505] pr-6 py-10">
                <p className={navTextClass}>Home</p>
                <div className="relative">
                  <div className="relative z-10">
                    <p className={navTextClass}>Projects</p>
                    <p className={navTextClass}>Works</p>
                    <p className={navTextClass}>Blog</p>
                  </div>
                  <img
                    ref={myImage}
                    src="me.jpg"
                    alt=""
                    className="absolute top-0 left-0 z-0 rotate-12"
                  />
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
