import React from "react";
import free from "../../img/free.png";
import salary from "../../img/salary.png";
import happiness from "../../img/happiness.png";
import money from "../../img/money.png";
import happy from "../../img/happy.png";

function WhySection() {
  return (
    <section className=" my-20 py-10 ">
      <h2 className="text-center font-extrabold md:text-2xl lg:text-3xl lg:mb-20">
        Why Use SpendWise
      </h2>
      <div className="flex justify-center rounded-full bg-indigo-100 p-10 flex-col gap-10 my-10 md:flex-row md:gap-5">
        <div className="flex px-8 gap-5 md:flex-col items-center">
          <div className="w-28 bg-indigo-100 h-28 rounded-full flex items-center justify-center">
            <img src={free} className=" object-cover " />
          </div>
          <div>
            <h3 className="font-bold md:text-center lg:text-2xl">It's free</h3>
            <p className="md:text-center lg:text-lg">
              This website is absolutely free 
            </p>
          </div>
        </div>
        <div className="flex px-8 gap-5 md:flex-col items-center">
          <div className="w-28 bg-indigo-100 h-28 rounded-full flex items-center justify-center">
            <img src={money} className=" object-cover" />
          </div>
          <div>
            <h3 className="font-bold md:text-center lg:text-2xl">
              Build Your Budget
            </h3>
            <p className="md:text-center lg:text-lg">
              Add your accounts and expenses
            </p>
          </div>
        </div>
        <div className="flex px-8 gap-5 md:flex-col items-center">
          <div className="w-28 bg-indigo-100 h-28 rounded-full flex items-center justify-center">
            <img src={happy} className=" object-cover" />
          </div>
          <div>
            <h3 className="font-bold md:text-center lg:text-2xl">
              Take a load off
            </h3>
            <p className="md:text-center lg:text-lg">
              Feel confident in your financial life
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhySection;
