import React, { useEffect, useState } from "react";
import LawyersCard from "./LawyersCard";
import Spinner from "../Spinner/Spinner";

const OurBestLayers = () => {
  const [allLawyers, setAllLawyers] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/lawyers.json")
      .then((res) => res.json())
      .then((data) => {
        setAllLawyers(data);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      });
  }, []);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const visibleLawyers = allLawyers.slice(0, visibleCount);

  return (
    <section className="bg-white text-[#0F0F0F] text-center">
      <h2 className="font-extrabold text-[40px] leading-[50px] mb-4">
        Our Best Lawyers
      </h2>
      <p className="opacity-80 text-[16px] leading-[26px] max-w-[1009px] mx-auto">
        Our platform connects you with verified, experienced Lawyers across
        various specialties — all at your convenience. Whether it's a routine
        checkup or urgent consultation, book appointments in minutes and receive
        quality care you can trust.
      </p>

      {loading ? (
        <Spinner />
      ) : (
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-[1300px] mx-auto px-2.5">
          {visibleLawyers.map((lawyer) => (
            <LawyersCard key={lawyer.id} lawyer={lawyer} />
          ))}
        </div>
      )}

      {visibleCount < allLawyers.length && (
        <button
          onClick={handleLoadMore}
          className="bg-[#0EA106] rounded-full text-white py-4 px-8 mt-8 hover:bg-[#2563EB] transition cursor-pointer"
        >
          Show All Lawyer
        </button>
      )}
    </section>
  );
};

export default OurBestLayers;
