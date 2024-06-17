import React from "react";
import chart from "../../img/graphic.png";
import wallet from "../../img/wallet.png";
import lamp from "../../img/idea.png";
import forbes from "../../img/forbes.png";
import times from "../../img/the-new-york-times.png";
import usa from "../../img/usa-today.png";
import tech from "../../img/techcrunch.png";

function About() {
  return (
    <section className="py-5">
      <h2 className="text-center font-extrabold md:text-2xl lg:text-4xl lg:mb-20">
        Why Tracking Your Finances Matters
      </h2>
      <div className="px-7">
        <div className="flex flex-col gap-2 mt-10 md:flex-row md:px-28 md:gap-20">
          <img src={chart} className="w-20 mx-auto md:w-28 lg:w-32" />
          <div>
            <h3 className="text-center font-semibold md:text-start lg:text-2xl">
              Make informed money moves!
            </h3>
            <p className="text-center px-3 md:text-start md:px-0 lg:text-lg">
              Track your expenses to gain a deeper financial awareness. Identify
              spending habits, pinpoint areas of high expenditure, and optimize
              your money allocation.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-10 md:flex-row md:px-28 md:gap-20">
          <img
            src={wallet}
            className="w-20 mx-auto md:w-28 md:h-28 lg:w-32 lg:h-32"
            alt=""
          />
          <div>
            <h3 className="text-center font-semibold md:text-start lg:text-2xl">
              Realize Long-Term Success!
            </h3>
            <p className="text-center px-3 md:text-start md:px-0 lg:text-lg">
              Track your expenses accurately and compare them to your planned
              budget. This helps you avoid overspending and identify any
              unnecessary waste or expenses. Taking control of your spending
              puts you in a stronger financial position and helps you achieve
              long-term financial goals.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-10 md:flex-row md:px-28 md:gap-20">
          <img
            src={lamp}
            className="w-20 mx-auto md:w-28 md:h-28 lg:w-32 lg:h-32"
          />
          <div>
            <h3 className="text-center font-semibold md:text-start lg:text-2xl">
              Unlock financial wisdom!
            </h3>
            <p className="text-center px-3 md:px-0 md:text-start lg:text-lg">
              Keeping track of your expenses allows you to evaluate your past
              financial choices. You can analyze which expenses have been
              beneficial and which ones may have been unnecessary or not as
              useful.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
