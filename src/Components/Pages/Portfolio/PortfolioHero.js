import React from "react";

const PortfolioHero = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1 md:flex md:items-center md:justify-center md:p-10">
          <img
            src="https://avatars.githubusercontent.com/u/67517630?v=4"
            className="md:max-w-sm rounded-lg shadow-2xl"
            alt="johirhauqedipok"
          />
        </div>
        <div className="flex-col md:gap-10 mt-7 lg:gap-18">
          <h1 className="text-5xl font-bold">Welcome!</h1>
          <p className="py-6">
            I'm Johir Haque dipok. Learning programming language
          </p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioHero;
