import React from "react";

const PortfolioHero = () => {
  return (
    <div className="hero-content w-full max-w-7xl flex-col justify-between gap-4 pb-40 lg:flex-row lg:items-end lg:gap-5 xl:gap-20">
      <div className="mb-2 py-4 text-center lg:py-10 lg:text-left">
        <h1 className="font-title mb-2 text-4xl font-extrabold sm:text-5xl lg:text-7xl">
          Welcome!
        </h1>
        <p className="font-title text-lg font-extrabold sm:text-2xl lg:text-3xl lg: py-2">
          I'm Johir Haque dipok. Learning programming language
        </p>
        <button className="btn btn-primary my-4">Get Started</button>
      </div>

      <div>
        <div className="flex-1 md:flex md:items-center md:justify-center ">
          <img
            src="https://avatars.githubusercontent.com/u/67517630?v=4"
            alt="johirhauqedipok"
          />
        </div>
      </div>
    </div>
  );
};

export default PortfolioHero;
