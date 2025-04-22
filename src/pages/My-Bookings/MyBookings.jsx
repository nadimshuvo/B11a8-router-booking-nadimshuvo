import React from "react";
import SingleAppoinmentCard from "../../components/SingleAppoinmentCard/SingleAppoinmentCard";
import Spacer from "../../components/Spacer/Spacer";
import ReChart from "../../components/ReChart/ReChart";

const MyBookings = () => {
  return (
    <div className="bg-white">
      {/* rechart */}

      <div className="max-w-[1300px] mx-auto px-2.5 border border-[ #141414]/15 rounded-2xl p-12">
        <ReChart />
      </div>

      <Spacer />
      {/* My Today Appointments */}
      <section className="max-w-[1300px] mx-auto px-2.5">
        <div className="section-title text-center">
          <h2 className="plus-jakarta-sans-extrabold text-[40px] leading-[50px] text-[#0F0F0F] mb-4">
            My Today Appointments
          </h2>
          <p className="plus-jakarta-sans-regular text-[16px] leading-[26px] text-[#0F0F0F]">
            Our platform connects you with verified, experienced Lawyers across
            various specialties — all at your convenience.
          </p>
        </div>

        <SingleAppoinmentCard />
        <SingleAppoinmentCard />
        <SingleAppoinmentCard />
        <SingleAppoinmentCard />
      </section>
      <Spacer />
      <Spacer />
    </div>
  );
};

export default MyBookings;
