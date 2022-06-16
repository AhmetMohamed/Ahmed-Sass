import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full py-20 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-2">
          <h1 className="md:text-4xl sm:text-3xl text-2 xl font-bold py-2">
            Want tips & tricks to optimize your flow?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row justify-between items-center w-full">
            <input
              type="text"
              placeholder="Enter your email"
              className="p-3 w-full rounded-md text-black"
            />
            <button className="bg-[#00df9a] w-[200px] rounded-md my-6 py-3 px-6 md:ml-4 mx-auto font-bold ">
              Notify Me
            </button>
          </div>
          <p>
            {" "}
            We care bout the protection of your data. Read our{" "}
            <span className="text-[#00df9a]">Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
