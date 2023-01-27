import React from "react";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiFillTwitterSquare,
  AiFillGithub,
  AiFillGoogleSquare,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="text-gray-400">
      <div className="max-w-[1240px] mx-auto py-16 lg:px-9">
        <div className="grid grid-cols-6 gap-5 max-lg:px-9 max-lg:gap-10">
          <div className="max-lg:col-span-6 lg:col-span-2">
            <h2 className="text-2xl text-primary font-bold">REACT.</h2>
            <p className="my-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. In odit
              commodi natus assumenda quos a consequatur atque numquam maiores
              pariatur.
            </p>
            <div className="flex gap-6">
              <AiFillFacebook size={30} />
              <AiOutlineInstagram size={30} />
              <AiFillTwitterSquare size={30} />
              <AiFillGithub size={30} />
              <AiFillGoogleSquare size={30} />
            </div>
          </div>
          <div className="lg:col-span-1 md:col-span-2 sm:col-span-3 max-sm:col-span-6">
            <h4 className="text-xl font-bold mb-4">Solutions</h4>
            <ul className="flex flex-col gap-2">
              <li>Analytics</li>
              <li>Marketing</li>
              <li>Commerce</li>
              <li>Insights</li>
            </ul>
          </div>
          <div className="lg:col-span-1 md:col-span-2 sm:col-span-3 max-sm:col-span-6">
            <h4 className="text-xl font-bold mb-4">Support</h4>
            <ul className="flex flex-col gap-2">
              <li>Pricing</li>
              <li>Documentation</li>
              <li>Guides</li>
              <li>API Status</li>
            </ul>
          </div>
          <div className="lg:col-span-1 md:col-span-2 sm:col-span-3 max-sm:col-span-6">
            <h4 className="text-xl font-bold mb-4">Company</h4>
            <ul className="flex flex-col gap-2">
              <li>About</li>
              <li>Blog</li>
              <li>Jobs</li>
              <li>Press</li>
              <li>Partners</li>
            </ul>
          </div>
          <div className="lg:col-span-1 md:col-span-2 sm:col-span-3 max-sm:col-span-6">
            <h4 className="text-xl font-bold mb-4">Legal</h4>
            <ul className="flex flex-col gap-2">
              <li>Claim</li>
              <li>Privacy Policy</li>
              <li>Terms</li>
            </ul>
          </div>
        </div>
        <p className="max-lg:mt-9 max-lg:px-9">
          This is demo template with ReactJS. &copy; 2023 All rights reversed.
          Made By
          <a href="https://kriskata.com" className="pl-2 text-primary">Kristian Kostadinov</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
