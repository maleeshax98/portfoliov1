import React from "react";

const BackgroundVideo = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* 1. THE VIDEO LAYER */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 h-full w-full object-cover z-0"
        poster="/hero_image.jpg" // Essential for LCP and slow connections
      >
        <source src="/hero.mp4" type="video/mp4" />
        {/* Fallback for browsers that don't support HTML5 video */}
        Your browser does not support the video tag.
      </video>

      {/* 2. THE OVERLAY LAYER (Crucial for Contrast) */}
      {/* A semi-transparent black or gradient overlay ensures text remains readable regardless of video brightness */}
      <div className="absolute inset-0 z-10 bg-black/40" />

      {/* 3. THE CONTENT LAYER */}
        {children}
    </section>
  );
};

export default BackgroundVideo;
