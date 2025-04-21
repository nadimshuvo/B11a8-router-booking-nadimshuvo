import React from "react";
import Services from "./Services";
import totalLayerImage from '../../assets/success-doctor.png'
import totalReviewsImage from '../../assets/success-review.png'
import casesInitiatedImage from '../../assets/success-patients.png'
import totalStuffsImage from '../../assets/success-staffs.png'


const WeProvideBestLawServices = () => {
  return (
    <section className="bg-white text-[#0F0F0F] text-center">
      <h2 className="font-extrabold text-[40px] mb-4">
        We Provide Best Law Services
      </h2>
      <p className="text-[16px] leading-[26px] mb-8">
        Our platform connects you with verified, experienced Lawyers across
        various specialities — all at your convenience.{" "}
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 justify-items-center lg:grid-cols-4 gap-6 max-w-[1300px] mx-auto px-2.5">
        <Services img={totalLayerImage} title="199+" subtitle="Total Lawyer" />
        <Services img={totalReviewsImage} title="467+" subtitle="Total Reviews"/>
        <Services img={casesInitiatedImage} title="1900+" subtitle="Cases Initiated"/>
        <Services img={totalStuffsImage} title="300+" subtitle="Total Stuffs"/>
      </div>
    </section>
  );
};

export default WeProvideBestLawServices;
