import React from "react";
import LayersCard from "./LayersCard";

const OurBestLayers = () => {
  return (
    <section className="bg-white text-[#0F0F0F] text-center">
      <h2 className="font-extrabold text-[40px] leading-[50px] mb-4">Our Best Lawyers</h2>
      <p className="opacity-80 text-[16px] leading-[26px] max-w-[1009px] mx-auto">
        Our platform connects you with verified, experienced Lawyers across
        various specialties — all at your convenience. Whether it's a routine
        checkup or urgent consultation, book appointments in minutes and receive
        quality care you can trust.
      </p>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-[1300px] mx-auto px-2.5">
        <LayersCard />
        <LayersCard />
        <LayersCard />
        <LayersCard />
        <LayersCard />
        <LayersCard />
      </div>

      <button className="bg-[#0EA106] rounded-full text-white py-4 px-8 mt-8 hover:bg-[#2563EB] transition cursor-pointer">
      Show All Lawyer
      </button>
    </section>
  );
};

export default OurBestLayers;
