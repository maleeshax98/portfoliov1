import React from "react";

const BackgroundVideo = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="relative h-screen w-full  bg-black">
      {/* 1. THE VIDEO LAYER */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 h-full w-full object-cover z-0"
        poster="/hero_image.jpg" 
      >
        <source src="/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* <img
        src="/hero_image.jpg"
        alt=""
        className="absolute top-0 left-0 h-full w-full object-cover z-0"
      /> */}

      <div className="absolute inset-0 z-10 bg-black/40" />
      {children}
    </section>
  );
};

export default BackgroundVideo;
