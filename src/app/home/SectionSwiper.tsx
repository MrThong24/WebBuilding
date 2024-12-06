import React from "react";
const DemoSlider: React.FC = () => {
  return (
    <section className="relative bg-white lg:mt-0 mt-24">
      <div className="box_video">
        <video autoPlay={true} loop={true} muted={true} height="90%">
          <source src="/intro.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default DemoSlider;
