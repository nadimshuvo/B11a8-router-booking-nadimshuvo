import React from "react";
import notFoundImage from "/not-found-img.jpg"
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center p-4 bg-white">
        <img className="w-4xl animate-pulse" src={notFoundImage} alt="not found image" />
      <h1 className="text-5xl font-bold text-red-600 my-8">404</h1>
      <p className="text-xl text-gray-700 mb-4">Oops❗Page not found</p>
      <Link to="/" className="font-extrabold text-[#0EA106] hover:underline">
        Go back home
      </Link>
      </div>
  );
};

export default NotFound;
