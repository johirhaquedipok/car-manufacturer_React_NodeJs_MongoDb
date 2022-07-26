import React from "react";

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1 md:flex md:items-center md:justify-center md:p-10 lg:p-20">
          <img
            src="https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
            className="w-full rounded-lg shadow-2xl"
            alt=""
          />
        </div>
        <div className="flex-col md:gap-10 mt-7 lg:gap-18">
          <h1 className="text-5xl font-bold">Latest Product!</h1>
          <p className="py-6">
            The more advanced technology and far more better experience. Embrace
            our new technology.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
