import React from "react";

const PortfolioExperience = () => {
  return (
    <div className=" rounded-box  mx-2 grid flex-shrink-0 place-items-center   p-4 py-8 md:place-items-stretch xl:mx-0 ">
      <h3 className="mb-5 text-3xl font-bold">Skills I am learning</h3>{" "}
      <div className="flex items-center p-1">
        <span className="text-base-content/70 w-48 text-xs">HTML</span>{" "}
        <progress
          max="100"
          value="80"
          className="progress progress-success"
        ></progress>
      </div>
      <div className="flex items-center p-1">
        <span className="text-base-content/70 w-48 text-xs">CSS</span>{" "}
        <progress
          max="100"
          value="80"
          className="progress progress-primary"
        ></progress>
      </div>
      <div className="flex items-center p-1">
        <span className="text-base-content/70 w-48 text-xs">JAVASCRIPT</span>{" "}
        <progress
          max="100"
          value="60"
          className="progress progress-secondary"
        ></progress>
      </div>{" "}
      <div className="flex items-center p-1">
        <span className="text-base-content/70 w-48 text-xs">REACT</span>{" "}
        <progress
          max="100"
          value="50"
          className="progress progress-accent"
        ></progress>
      </div>
      <div className="flex items-center p-1">
        <span className="text-base-content/70 w-48 text-xs">NODE JS</span>{" "}
        <progress
          max="100"
          value="35"
          className="progress progress-warning"
        ></progress>
      </div>
    </div>
  );
};

export default PortfolioExperience;
