import React from "react";
import { Link } from "react-router";

const LawyersCard = ({
  lawyer: {
    id,
    profile_picture,
    name,
    specialty,
    license_no,
    availability_days,
    experience,
  },
}) => {

  const today = new Date();
  const dayName = today.toLocaleDateString('en-US', {weekday: 'long'});
  const availabileToday = availability_days.includes(dayName);
  
  return (
    <div className="xl:w-[607px] border border-black/15 rounded-3xl p-6 hover:bg-[#09982F]/10 hover:scale-110 hover:border-[#09982F] transition hover:rotate-[-0.015rad]">
      <div className="flex max-lg:justify-center max-[350px]:gap-3 gap-8 md:gap-16 items-center">
        <span className="w-[159px] h-[158px] rounded-[12px] bg-[#C4C4C4] overflow-hidden border-2 border-[#09982F]/50">
          <img
            src={profile_picture}
            alt=""
            className="w-full h-full object-cover"
          />
          {/* Avatar */}
        </span>
        <div className="text-left">
          <span className="flex items-center gap-2 font-medium mb-2">
            <p
              className={`max-sm:text-[8px] text-[12px] ${
                availabileToday
                  ? "text-[#09982F]"
                  : "text-[#FF0000]"
              } py-[5px] px-3.5 ${
                availabileToday
                  ? "bg-[#09982F]/10"
                  : "bg-[#FF0000]/10"
              } rounded-full`}
            >
              {availabileToday ? "Available" : "Unavailable"}
            </p>
            <p className="max-sm:text-[8px] text-[12px] text-[#176AE5] py-[5px] px-3.5 bg-[#176AE5]/10 rounded-full">
              {experience}
            </p>
          </span>
          <h3 className="font-extrabold max-sm:text-[18px] text-2xl mb-1">
            {name}
          </h3>
          <p className="font-medium max-sm:text-xs text-[18px] opacity-60">
            {specialty}
          </p>
          <p className="font-medium max-sm:text-[10px] text-[16px] opacity-70 mb-4">
            &reg; License No: BD {license_no}
          </p>

          <Link to={`/lawyer/${id}`}>
            <button className="cursor-pointer transition w-full  xl:w-[337px] py-2 border border-[#176AE5]/20 rounded-full text-[#176AE5] font-bold max-sm:text-[10px] text-[16px] hover:bg-[#09982F] hover:text-white">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LawyersCard;
