import React from "react";
import heroBannerImage from "../../assets/banner-img-1.png";

const Hero = () => {
  return (
    <section className="bg-white">
      <div
        className="hero relative min-h-[550px] max-w-[1280px] mx-auto rounded-3xl bg-cover"
        style={{
          backgroundImage: `url(${heroBannerImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black/80 rounded-3xl"></div>
        <div className="max-w-[1009px] text-neutral-content text-center relative z-10">
          <div>
            <h1 className="max-w-[917px] mb-4 text-4xl leading-13 lg:text-5xl lg:leading-[60px] font-extrabold animate-pulse">It avoids subjective claims or exaggeration that might raise red flags legally</h1>
            <p className="max-w-[959px] text-sm leading-5 lg:text-[16px] lg:leading-[26px] text-white opacity-80">
            Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;