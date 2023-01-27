import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="text-white h-24">
      <div className="h-full max-w-[1024px] mx-auto flex justify-between items-center px-9">
        <div className="w-full h-full flex justify-between items-center px-2">
          <h1 className="text-3xl font-bold text-primary">REACT.</h1>
          <ul className="md:flex hidden">
            <li className="p-4">Home</li>
            <li className="p-4">Company</li>
            <li className="p-4">Resources</li>
            <li className="p-4">About</li>
            <li className="p-4">Contact</li>
          </ul>
        </div>

        <div className="md:hidden" onClick={handleNav}>
          {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
        </div>

        <div
          className={`h-full fixed top-0 left-0 w-[60%] px-4 md:hidden block bg-secondary border-r border-gray-900 transition-transform ${
            !nav ? " translate-x-[-100%]" : ""
          }`}
        >
          <h1 className="text-3xl font-bold text-primary my-6">REACT.</h1>
          <ul className="flex flex-col">
            <li className="p-4 border-b border-gray-500">Home</li>
            <li className="p-4 border-b border-gray-500">Company</li>
            <li className="p-4 border-b border-gray-500">Resources</li>
            <li className="p-4 border-b border-gray-500">About</li>
            <li className="p-4">Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
