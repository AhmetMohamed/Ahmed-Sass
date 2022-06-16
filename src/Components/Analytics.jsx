import React from "react";
import Laptop from "../Assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img src={Laptop} alt="" className="w-[500px] mx-auto my-4" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold p-2">
            DATA ANALYSTICS DASHBOARD
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2 xl font-bold py-2">
            Manage Data Analystics Centrally
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga
          </p>
          <button className="bg-[#000300] text-[#00df9a] w-[200px] h-[50px] rounded-md my-6 px-6  font-bold text-xl">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
