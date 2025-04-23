import React, { useEffect, useState } from "react";
import SingleLawyerCardSection from "../../components/OurBestLayers/SingleLawyerCardSection";
import Spacer from "../../components/Spacer/Spacer";
import { useLoaderData } from "react-router";
import Spinner from "../../components/Spinner/Spinner";

const Lawyer = () => {
  const lawyer = useLoaderData();
  const [loading, setloading] = useState(true);

  useEffect(() => {
    setTimeout(() => setloading(false), 2000);
  }, []);

  return (
    <section className="bg-white">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <SingleLawyerCardSection lawyer={lawyer} />
          <Spacer />
        </>
      )}
    </section>
  );
};

export default Lawyer;
