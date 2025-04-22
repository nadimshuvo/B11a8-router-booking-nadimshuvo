import React from "react";

import SingleLawyerCard from "./SingleLawyerCard";
import BookAppointment from "./BookAppointment";

const SingleLawyerCardSection = ({lawyer}) => {
  
  return (
    <section className="pt-8 bg-white text-[#0F0F0F] text-center border-t border-[#0F0F0F]/15">
      <div className="max-w-[1300px] mx-auto px-2.5">
        <div
          className="section-profile-details p-[72px] bg-[#0F0F0F]/5 rounded-2xl mb-8 border
      border-[#0F0F0F]/15"
        >
          <h2 className="text-[#141414] font-extrabold text-[32px] mb-4">
            Lawyer’s Profile Details
          </h2>
          <p className="font-medium text-[#141414]/70 text-[16px] leading-[28px] max-w-[1028px] mx-auto">
            Our platform connects you with verified, experienced doctors across
            various specialties — all at your convenience. Whether it's a
            routine checkup or urgent consultation, book appointments in minutes
            and receive quality care you can trust.
          </p>
        </div>

        <SingleLawyerCard lawyer={lawyer}/>
        <BookAppointment />
        
      </div>
    </section>
  );
};

export default SingleLawyerCardSection;
