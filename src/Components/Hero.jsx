import React, { useState } from "react";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[96px] w-full h-screen mx-auto text-center flex flex-col">
        <p className="text-[#00df9a] font-bold p-2">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md: py-5">
          Grow with Data.
        </h1>
        <div>
          <p className="md:text-5xl sm:text-4xl text-xl font-bold ">
            Fast, Flexible Financing For
          </p>
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500 mt-2">
          Monitor your data analystics to increase revenue for BTB, BTC, & SASS
          platforms.
        </p>

        <button className="bg-[#00df9a] w-[200px] h-[50px] rounded-md my-6 px-6 mx-auto font-bold text-xl">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
