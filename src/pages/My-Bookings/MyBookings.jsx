import React, { useEffect, useRef, useState } from "react";
import ReChart from "../../components/ReChart/ReChart";
import { useLocation } from "react-router";

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
    toast.error(`Appoinment for Advocate ${location.state?.lawyer.name} has been calcelled !`);
    const updated = lawyerArray.filter((lawyer) => lawyer.id !== id);
    setLawyerArray(updated);
    localStorage.setItem("bookings", JSON.stringify(updated));
  };

  return (
    <section className="bg-white">
      {loading ? (<>
        <Spinner />
        
      </>

      ) : (
        <aside>
          {/* rechart */}
          <div className="max-w-[1300px] mx-auto px-2.5 border border-[ #141414]/15 rounded-2xl p-12">
            <ReChart lawyerArray={lawyerArray} />
          </div>
          <Spacer />
          {/* My Today Appointments */}
          <section className="max-w-[1300px] mx-auto px-2.5">
            <div className="section-title text-center">
              <h2 className="plus-jakarta-sans-extrabold text-[40px] leading-[50px] text-[#0F0F0F] mb-4">
                My Today Appointments
              </h2>
              <p className="plus-jakarta-sans-regular text-[16px] leading-[26px] text-[#0F0F0F]">
                Our platform connects you with verified, experienced Lawyers
                across various specialties — all at your convenience.
              </p>
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
              <p>Back to Home</p>
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
