"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText, ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";
gsap.registerPlugin(SplitText, ScrollTrigger);
const About = () => {
  const textRef = useRef(null);
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const subImage = useRef(null);

  useGSAP(() => {
    const split = new SplitText(textRef.current, { type: "chars" });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=1200%",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });
    tl.from(split.chars, {
      opacity: 0,
      stagger: 0.1,
      duration: 6,
    });
    tl.fromTo(
      imageRef.current,
      { x: -1200, stagger: 0.1 },
      {
        x: 400,
        stagger: 0.1,
        duration: 6,
      },
      "<=0.2",
    );

    tl.from(subImage.current, {
      y: "80%",
      duration: 3,
    })
  }, []);
  return (
    <section ref={containerRef} className=" relative h-screen w-full  bg-black">
      <img
        src="me2.png"
        className=" absolute z-50 rotate-[-10deg] bottom-[-500px] right-[-200px] "
        alt=""
        ref={subImage}
      />
      <div className="flex justify-center h-screen items-center">
        <div className="w-[60vw] mx-auto">
          <p
            ref={textRef}
            className="text-white relative z-40 text-center font-semibold text-2xl  "
          >
            <span className="text-left font-playfair-display uppercase ">
              A little about me
            </span>{" "}
            <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
            deserunt fugit qui ea ipsam debitis vel, voluptatem voluptatibus
            iure repudiandae, soluta blanditiis cum et, nam a tempore odio dicta
            aspernatur.ß
          </p>
        </div>
        <div>
          <img
            ref={imageRef}
            src="me.jpg"
            className=" absolute w-[40vw] opacity-25 top-1/2 left-0  -translate-x-1/2 -translate-y-1/2 rotate-10 z-0"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default About;
