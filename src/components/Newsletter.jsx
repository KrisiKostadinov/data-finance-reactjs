import React from "react";

const Newsletter = () => {
  return (
    <div className="text-white">
      <div className="max-w-[1240px] mx-auto py-16">
        <div className="grid md:grid-cols-5 px-9">
          <div className="md:col-span-3">
            <h2 className="md:text-3xl font-bold text-3xl mb-2">
              What tips & tricks to optimize your flow?
            </h2>
            <p>Sign up to out newsletter and stay up to date.</p>
          </div>
          <div className="md:col-span-2">
            <form className="max-md:mt-7">
              <div className="grid grid-cols-5 gap-5">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white text-black py-2 px-3 rounded col-span-3"
                />
                <button
                  type="submit"
                  className="bg-primary text-black rounded col-span-2"
                >
                  Notify me
                </button>
              </div>
              <p className="mt-2">
                We care bout the protection of your data. Read our{" "}
                <span className="text-primary">Privaly Policy</span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
