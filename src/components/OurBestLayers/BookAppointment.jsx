import React from "react";

import divider from "../../assets/divider-line.png";
import iIcon from "../../assets/i-icon.svg";
import { Link } from "react-router";
import { toast } from "react-toastify";


const BookAppointment = ({lawyer}) => {
  const today = new Date();
  const dayName = today.toLocaleDateString('en-US', {weekday: 'long'});
  const availabileToday = lawyer.availability_days.includes(dayName);
  
  const handleBookAppoinment = (id)=> {    
    const existingStorage = JSON.parse(localStorage.getItem("bookings") || "[]");
    const isAlreadyBooked = existingStorage.some( l => l.id === id);
    
    if(isAlreadyBooked) {
      toast.error(`Appoinment for Advocate ${lawyer.name} has already been scheduled`);      
    } else {
      toast.success(`Appoinment for Advocate ${lawyer.name} has been successfully scheduled`);
    }

  }

  return (
    <div className="book-appoinment mt-8 border border-[#0F0F0F]/15 rounded-2xl p-8 text-left">
      <h3 className="text-center font-bold text-2xl text-[#141414] mb-4">
        Book an Appointment
      </h3>
      <img src={divider} alt="divider" />

      <div className="mt-4 flex max-sm:flex-col gap-4 justify-between items-center border-b pb-4 border-[#141414]/10">
        <p className="plus-jakarta-sans-bold text-[18px] text-[#141414]">
          Availability
        </p>
        <p className={`plus-jakarta-sans-medium text-sm ${availabileToday ? "text-[#09982F] bg-[#09982F]/10" : "text-[#ff0000] bg-[#ff0000]/10"}  px-3.5 py-[7px]  rounded-full border border-[#09982F]/20`}>
          {availabileToday ? "Lawyer Available Today" : "Lawyer is unavailable today"}
        </p>
      </div>

      <div className="my-4 flex max-sm:flex-col max-w-[1085px] items-center gap-4 bg-[#FFA000]/10 max-sm:rounded-xl rounded-full py-2 px-4">
        <span className="min-w-4 min-h-4">
          <img src={iIcon} alt="" />
        </span>
        <p className="font-medium text-[#FFA000] text-[16px] max-sm:text-center">
          Due to high client volume, we are currently accepting appointments for
          today only. We appreciate your understanding and cooperation.
        </p>
      </div>

      <Link to="/bookings" state={{lawyer}} onClick={()=> handleBookAppoinment(lawyer.id)}>
        <div className="cursor-pointer button-book-now bg-[#0EA106] m-6 text-center rounded-full hover:bg-white border border-[#09982F] text-white hover:text-[#09982F] transition">
          <button className="cursor-pointer font-bold max-sm:text-[14px] text-[20px] p-3.5">
            Book Appointment Now
          </button>
        </div>
      </Link>
      
    </div>
  );
};

export default BookAppointment;
