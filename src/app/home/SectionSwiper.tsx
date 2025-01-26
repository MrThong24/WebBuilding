"use client"; // <===== REQUIRED

import React, { useEffect, useRef } from "react";

const DemoSlider: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Chắc chắn video phát tự động khi có sự tương tác của người dùng
      const handleUserInteraction = () => {
        video.play();
      };

      // Thêm sự kiện click để video phát khi người dùng tương tác
      document.addEventListener("click", handleUserInteraction);

      return () => {
        document.removeEventListener("click", handleUserInteraction);
      };
    }
  }, []);

  return (
    <section className="relative bg-white lg:mt-0 mt-24">
      <div className="box_video">
        <video
          ref={videoRef}
          autoPlay={true}
          loop={true}
          muted={true}
          playsInline
          width="100%"
          height="auto"
        >
          <source
            src="https://daitienphatcons.com/intro.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </section>
  );
};

export default DemoSlider;
