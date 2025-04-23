import React from "react";

const SingleLawyerCard = ({
  lawyer: {
    name,
    specialty,
    availability_days,
    experience,
    license_no,
    profile_picture,
    fee,
  },
}) => {
  return (
    <div className="border border-[#0F0F0F]/15 rounded-2xl p-8 hover:bg-[#09982F]/10 hover:scale-110 hover:border-[#09982F] transition">
      <div className="flex max-sm:flex-col items-center gap-6">
        <span className="max-sm:w-full w-[308px] h-[308px] bg-[#C4C4C4] rounded-[20px] overflow-hidden">
          <img src={profile_picture} alt="laywer photo" className="w-full h-full object-cover"/>
        </span>

        <div className="max-sm:text-center text-left">
          <p className="font-medium text-[16px] text-[#176AE5] px-4 py-1.5 bg-[#176AE5]/10 rounded-full inline-block mb-4">
            {experience}
          </p>
          <h3 className="font-extrabold max-sm:text-2xl text-[32px] text-[#141414] mb-4">
            {name}
          </h3>

          <span className="flex max-sm:gap-4 gap-10 max-sm:justify-center font-medium max-sm:text-[10px] text-[16px] text-[#141414] mb-4">
            <p className="opacity-60">{specialty}</p>
            <p className="opacity-70">&reg; License No: {license_no}</p>
          </span>

          {/* Availability */}
          <div className="flex max-sm:flex-col items-center gap-4 mb-4">
            <p className="font-bold text-[16px] text-[#141414]/70">
              Availability
            </p>
            <div className="flex max-sm:justify-center max-sm:flex-wrap gap-4">
              {availability_days.map((day, index) => (
                <span
                  key={index}
                  className="px-2.5 py-[5px] text-sm text-[#FFA000] bg-[#FFA000]/10 border border-[#FFA000]/20 rounded-full"
                >
                  {day}
                </span>
              ))}
            </div>
          </div>

          {/* Consultation Fee */}
          <div className="flex max-sm:justify-center items-center gap-4 text-[16px]">
            <p className="font-bold text-[#141414]/70">Consultation Fee:</p>
            <p className="manrope-extrabold font-extrabold text-[#0EA106] animate-pulse">
              Taka : {fee}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleLawyerCard;
