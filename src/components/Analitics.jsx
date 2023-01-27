import React from "react";
import laptop from "../assets/laptop.jpg";

const Analitics = () => {
  return (
    <div className="bg-white text-black">
      <div className="max-w-[1024px] mx-auto py-24">
        <div className="grid md:grid-cols-2 grid-cols-1 items-center">
          <img className="md:max-w-[500px]" src={laptop} alt="/" />
          <div className="max-md:px-9 max-md:text-center">
            <p className="text-primary font-bold md:text-xl">
              DATA ANALITICS DASHBOARD
            </p>
            <h2 className="text-3xl font-bold my-2">Manage Data Analitics Centrally</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde
              repellendus, ullam ipsa qui sit veritatis velit a numquam
              consequatur laboriosam? Reprehenderit voluptate blanditiis quam
              illo, quidem quibusdam temporibus asperiores? Sit!
            </p>
            <button className="bg-black text-primary rounded shadow-md mt-4 md:py-3 py-2 md:px-14 px-9">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analitics;
