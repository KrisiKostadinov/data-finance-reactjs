import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="w-full h-[80vh] text-white">
      <div className="w-full h-full max-w-[600px] max-sm:px-6 mx-auto text-center flex flex-col justify-center items-center">
        <p className="text-primary font-bold">GROWING WITH DATA ANALITICS</p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold my-6">
          Grow with data.
        </h1>
        <div className="flex items-center">
          <p className="md:text-3xl sm:text-2xl text-xl font-bold text-gray-500">
            Fast, flexible financing for
          </p>
          <Typed
            strings={["BTB", "BTC", "SaaS"]}
            typeSpeed={140}
            backSpeed={120}
            loop
            className="md:text-3xl sm:text-2xl text-xl font-bold ml-2"
          />
        </div>
        <p className="text-gray-500 text-xl my-3">
          Monitor your data analitics to increase revenue for BTB, BTC & SASS
          platforms.
        </p>
        <button className="bg-primary text-black font-bold md:text-xl md:py-3 py-2 md:px-10 px-6 rounded shadow-md my-3">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
