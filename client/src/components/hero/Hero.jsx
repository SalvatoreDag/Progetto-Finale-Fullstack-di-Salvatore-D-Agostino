import React from "react";
import Lottie from "lottie-react";
import animation from "../../img/personal-finance.json";
import { NavLink } from "react-router-dom";


function Hero() {
  return (
    <section className="bg-indigo-200  ">
      <div className="h-[70vh] p-5 flex flex-col justify-center md:h-[80vh]  lg:flex-row lg:items-center">
        <div className="flex flex-col justify-center gap-10 lg:w-1/2 lg:p-10">
          <div>
            <h1 className="mt-12 text-center uppercase text-2xl font-extrabold text-gray-800 md:text-3xl lg:text-5xl lg:text-start">
              Your financial companion, just a tap away!
            </h1>
          </div>
          <NavLink
                to="/dashboard"
                className="bg-indigo-600 flex items-center justify-center hover:bg-indigo-900 transition duration-150 ease-in-out text-white font-bold py-2 px-4 rounded-3xl w-40 h-14 mx-auto lg:mx-0"
              >
                <span>Start Saving</span>
              </NavLink>
        </div>
        <div className="lg:w-1/2">
          <Lottie animationData={animation} className="h-80 md:h-96 lg:h-max" />
        </div>
      </div>
      {/* waves */}
      <div className="-mt-16 lg:-mt-28">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,160L80,144C160,128,320,96,480,101.3C640,107,800,149,960,165.3C1120,181,1280,171,1360,165.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}

export default Hero;
