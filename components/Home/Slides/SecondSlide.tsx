"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const SecondSlide = () => {
  const containerRef = useRef(null);
  const mainText = useRef(null);
  const subgText = useRef(null);
  const textContainer = useRef(null);
  const subImage = useRef(null);

  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=500%",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    timeline.from(mainText.current, {
      y: "100%",
      opacity: 0,
      ease: "power2.inOut",
      duration: 5,
    });

    timeline.from(subgText.current, {
      opacity: 0,
      ease: "power2.inOut",
      duration: 2,
    });

    timeline.from(subImage.current, {
      y: "100%",
      duration: 6,
    });

    timeline.to(containerRef.current, {
      x: "100%",
      duration: 6,
    });
    timeline.to(
      subImage.current,
      {
        x: "-50%",
        duration: 6,
      },
      "<",
    );
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
          className="absolute top-0 left-0 h-full w-full object-cover z-0 rotate-180"
        />

        <img
          src="2slide.png"
          className=" absolute z-40 rotate-20 bottom-[-200px]"
          alt=""
          ref={subImage}
        />

        <div
          ref={textContainer}
          className="relative z-20 h-screen  flex flex-col items-center justify-center"
        >
          <div className="max-w-7xl">
            <p
              ref={mainText}
              className="text-[#CC0000] w-fit text-9xl font-playfair-display font-bold"
            >
              DIFFERENT
            </p>
            <p
              ref={subgText}
              className="text-[#CC0000] text-center   font-light"
            >
              FOR REAL
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SecondSlide;
