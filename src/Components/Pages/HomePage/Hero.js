import React from "react";

const Hero = () => {
  return (
    <div className="hero-content w-full max-w-7xl flex-col justify-between gap-4 pb-40 lg:flex-row lg:items-end lg:gap-5 xl:gap-20">
      <div className="mb-2 py-4 text-center lg:py-10 lg:text-left">
        <h1 className="font-title mb-2 text-4xl font-extrabold sm:text-5xl lg:text-7xl">
          Embrace the best technology.
        </h1>
        <h2 className="font-title text-lg font-extrabold sm:text-2xl lg:text-3xl lg:py-2">
          The more advanced technology and far more better experience. Embrace
          our new technology.
        </h2>
        <button className=" my-4 btn btn-primary">Get Started</button>
      </div>

      <div>
        <div className="flex-1 md:flex md:items-center md:justify-center ">
          <img
            src="https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
            className="w-full rounded-lg shadow-2xl"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
