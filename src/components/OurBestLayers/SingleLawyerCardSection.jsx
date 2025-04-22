import React from "react";
import divider from "../../assets/divider-line.png"
import iIcon from "../../assets/i-icon.svg"

const SingleLawyerCardSection = () => {
  return (
    <section className="bg-white text-[#0F0F0F] text-center ">
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

        {/* SingleLawyerCard */}
        <div className="border border-[#0F0F0F]/15 rounded-2xl p-8">
          <div className="flex items-center gap-6">
            <span className="w-[308px] h-[308px] bg-[#C4C4C4] rounded-[20px]">
              <img src="" alt="" />
            </span>

            <div className="text-left">
              <p className="font-medium text-[16px] text-[#176AE5] px-4 py-1.5 bg-[#176AE5]/10 rounded-full inline-block mb-4">
                5+ Years Experience
              </p>
              <h3 className="font-extrabold max-sm:text-2xl text-[32px] text-[#141414] mb-4">
                Awlad Hossain
              </h3>

              <span className="flex gap-10 font-medium max-sm:text-[10px] text-[16px] text-[#141414] mb-4">
                <p className="opacity-60">Criminal Expert</p>
                <p className="opacity-70">&reg; License No: BD 12451254</p>
              </span>

              <div className="flex items-center gap-4 mb-4">
                <p className="font-bold text-[16px] text-[#141414]/70">
                  Availability
                </p>
                <div className="flex gap-4">
                  <span className="px-2.5 py-[5px] text-sm text-[#FFA000] bg-[#FFA000]/10 border border-[#FFA000]/20 rounded-full ">
                    Sunday
                  </span>
                  <span className="px-2.5 py-[5px] text-sm text-[#FFA000] bg-[#FFA000]/10 border border-[#FFA000]/20 rounded-full ">
                    Monday
                  </span>
                  <span className="px-2.5 py-[5px] text-sm text-[#FFA000] bg-[#FFA000]/10 border border-[#FFA000]/20 rounded-full ">
                    Thursday
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-[16px]">
                <p className="font-bold text-[#141414]/70">Consultation Fee:</p>
                <p className="manrope-extrabold font-extrabold text-[#0EA106]">
                  Taka : 273
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Book Appoinment */}
        <div className="book-appoinment mt-8 border border-[#0F0F0F]/15 rounded-2xl p-8 text-left">
          <h3 className="text-center font-bold text-2xl text-[#141414] mb-4">Book an Appointment</h3>
          <img src={divider} alt="divider" />

          <div className="mt-4 flex justify-between items-center border-b pb-4 border-[#141414]/10">
            <p className="plus-jakarta-sans-bold text-[18px] text-[#141414]">Availability</p>
            <p className="plus-jakarta-sans-medium text-sm text-[#09982F] px-3.5 py-[7px] bg-[#09982F]/10 rounded-full border border-[#09982F]/20">Lawyer Available Today</p>
          </div>

          <div className="mt-4 inline-flex items-center gap-4 bg-[#FFA000]/10 rounded-full py-2 px-4">
            <span>
              <img src={iIcon} alt="" />
            </span>
            <p>Due to high client volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.</p>
          </div>

          <div className="button-book-now bg-[#0EA106] m-6 text-center rounded-full">
            <button className="font-bold text-[20px] py-3.5 text-white">Book Appointment Now</button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SingleLawyerCardSection;
