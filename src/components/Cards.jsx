import React from "react";
import single from "../assets/single.png";
import double from "../assets/double.png";
import triple from "../assets/triple.png";

const Cards = () => {
  return <div className="bg-white text-black">
    <div className="max-w-[1240px] mx-auto py-24 px-9">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 max-md:gap-16">

            <div className="relative text-center py-10 px-6 rounded shadow-xl">
                <img className="absolute left-[50%] top-[-40px] translate-x-[-50%] max-w-[80px]" src={single} alt="/" />
                <h3 className="font-bold text-2xl">Single User</h3>
                <p className="text-4xl my-6 font-bold">$149</p>
                <ul className="flex flex-col">
                    <li className="border-b border-gray-200 py-2 font-bold">500 GB Storage</li>
                    <li className="border-b border-gray-200 py-2 font-bold">1 User Allowed</li>
                    <li className="border-b border-gray-200 py-2 font-bold">Send up to 2GB</li>
                </ul>
                <button className="bg-primary py-3 px-9 rounded mt-6 font-bold">Start Trail</button>
            </div>
            
            <div className="relative text-center py-10 px-6 rounded shadow-xl bg-gray-100">
                <img className="absolute left-[50%] top-[-40px] translate-x-[-50%] max-w-[80px]" src={double} alt="/" />
                <h3 className="font-bold text-2xl">Partnership</h3>
                <p className="text-4xl my-6 font-bold">$199</p>
                <ul className="flex flex-col">
                    <li className="border-b border-gray-200 py-2 font-bold">1 TB Storage</li>
                    <li className="border-b border-gray-200 py-2 font-bold">3 Users Allowed</li>
                    <li className="border-b border-gray-200 py-2 font-bold">Send up to 10GB</li>
                </ul>
                <button className="bg-primary py-3 px-9 rounded mt-6 font-bold">Start Trail</button>
            </div>
            
            <div className="relative text-center py-10 px-6 rounded shadow-xl">
                <img className="absolute left-[50%] top-[-40px] translate-x-[-50%] max-w-[80px]" src={triple} alt="/" />
                <h3 className="font-bold text-2xl">Group Account</h3>
                <p className="text-4xl my-6 font-bold">$299</p>
                <ul className="flex flex-col">
                    <li className="border-b border-gray-200 py-2 font-bold">5 TB Storage</li>
                    <li className="border-b border-gray-200 py-2 font-bold">10 User Allowed</li>
                    <li className="border-b border-gray-200 py-2 font-bold">Send up to 20GB</li>
                </ul>
                <button className="bg-primary py-3 px-9 rounded mt-6 font-bold">Start Trail</button>
            </div>

        </div>
    </div>
  </div>;
};

export default Cards;
