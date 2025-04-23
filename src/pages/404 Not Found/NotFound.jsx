import React from "react";
import notFoundImage from "/not-found-img.jpg"
import { Link, useParams } from "react-router";

const NotFound = ({message}) => {

  const err = useParams();
  console.log(err);
  
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center p-4 bg-white">
        <img className="w-4xl animate-pulse" src={notFoundImage} alt="not found image" />
      <h1 className="text-5xl font-bold text-red-600 my-8">404</h1>
      <p className="text-2xl text-red-600 mb-4">{message || "Oops❗Page not found"}</p>
      <p className="text-5xl text-red-500 mb-4">{err ? err.id : ""}</p>
      <Link to="/" className="font-black text-3xl text-[#0EA106] py-4 px-15 border border-[#0EA106] rounded-full hover:bg-[#0EA106] hover:text-white transition">
        Go back home
      </Link>
      </div>
  );
};

export default NotFound;