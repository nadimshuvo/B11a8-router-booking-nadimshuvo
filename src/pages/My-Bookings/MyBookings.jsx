import React, { useEffect, useRef, useState } from "react";
import ReChart from "../../components/ReChart/ReChart";
import { Link, useLocation } from "react-router";

import SingleAppoinmentCard from "../../components/SingleAppoinmentCard/SingleAppoinmentCard";
import Spacer from "../../components/Spacer/Spacer";
import Spinner from "../../components/Spinner/Spinner";
import { toast } from "react-toastify";

const MyBookings = () => {
  const [loading, setLoading] = useState(true);
  const [lawyerArray, setLawyerArray] = useState([]);
  const location = useLocation();
  const hasLoaded = useRef(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    if (hasLoaded.current) return;
    hasLoaded.current = true;

    if (location.state?.lawyer) {
      const existing = JSON.parse(localStorage.getItem("bookings") || "[]");

      const isAlreadyBooked = existing.some(
        (l) => l.id === location.state.lawyer.id
      );

      const updated = isAlreadyBooked
        ? existing
        : [...existing, location.state.lawyer];

      localStorage.setItem("bookings", JSON.stringify(updated));
      setLawyerArray(updated);
    } else {
      const stored = JSON.parse(localStorage.getItem("bookings") || "[]");
      setLawyerArray(stored);
    }
  }, [location.state]);

  const handleCancel = (id) => {
    toast.error(
      `Appoinment for Advocate ${location.state?.lawyer.name} has been calcelled !`
    );
    const updated = lawyerArray.filter((lawyer) => lawyer.id !== id);
    setLawyerArray(updated);
    localStorage.setItem("bookings", JSON.stringify(updated));
  };

  return (
    <section className="bg-white">
      {loading ? (
        <>
          <Spinner />
        </>
      ) : (
        <aside>
          {/* rechart */}
          {lawyerArray.length > 0 ? (
            <ReChart lawyerArray={lawyerArray} />
          ) : null}
          <Spacer />
          {/* My Today Appointments */}
          <section className="max-w-[1300px] min-h-screen mx-auto px-2.5">
            <div className="section-title text-center">
              <h2 className="plus-jakarta-sans-extrabold text-[40px] leading-[50px] text-[#0F0F0F] mb-4">
                {lawyerArray.length > 0
                  ? "My Today Appointments"
                  : "You have not booked any appointments yet !"}
              </h2>
              <p className="plus-jakarta-sans-regular text-[16px] leading-[26px] text-[#0F0F0F]">
                Our platform connects you with verified, experienced Lawyers
                across various specialties — all at your convenience.
              </p>
              {lawyerArray.length > 0 ? null : (
                <Link to="/">
                  <button className="mt-10 cursor-pointer font-bold text-[20px] bg-[#0EA106] text-white py-4 px-8 rounded-full hover:bg-[#2563EB] transition duration-300 ease-in-out">
                    Book an Appoinment
                  </button>
                </Link>
              )}
            </div>

            {lawyerArray.length > 0 ? (
              lawyerArray.map((lawyer, index) => (
                <SingleAppoinmentCard
                  key={index}
                  lawyer={lawyer}
                  handleCancel={handleCancel}
                />
              ))
            ) : (
              null
            )}
          </section>
          <Spacer />
          <Spacer />
        </aside>
      )}
    </section>
  );
};

export default MyBookings;
