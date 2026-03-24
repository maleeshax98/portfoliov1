"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const FirstSlide = () => {
  const containerRef = useRef(null);
  const mainText = useRef(null);
  const subgText = useRef(null);
  const textContainer = useRef(null);
  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=200%",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    timeline.from(mainText.current, {
      y: "100%",
      opacity: 0,
      ease: "power2.out",
      duration: 1,
    });

    timeline.from(subgText.current, {
      opacity: 0,
      ease: "power2.out",
      duration: 1,
    });

    // timeline.to(textContainer.current, {
    //   scale: 9,
    //   opacity: 0,
    //   ease: "power2.out",
    //   duration: 1,
    // });
    
  }, []);
  return (
    <div>
      <section
        ref={containerRef}
        className="relative h-screen w-full  bg-black"
      >
        {/* 1. THE VIDEO LAYER */}

        <img
          src="/bg.png"
          alt=""
          className="absolute top-0 left-0 h-full w-full object-cover z-0"
        />

        {/* <div className="absolute inset-0 z-10 bg-black/40" /> */}
        <div
          ref={textContainer}
          className="relative z-20 h-screen  flex  items-center justify-center px-8"
        >
          <div>
            <p
              ref={mainText}
              className="text-[#CC0000]  text-[20vw] font-playfair-display font-bold"
            >
              PATIENT
            </p>
            <p
              ref={subgText}
              className="text-[#CC0000] text-center text-[2vw]  font-light"
            >
              FOR REAL
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FirstSlide;
