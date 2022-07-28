import React from "react";
import PortfolioExperience from "./PortfolioExperience";
import PortFolioExtra from "./PortFolioExtra";
import PortfolioHero from "./PortfolioHero";
import PortfolioInfo from "./PortfolioInfo";

const Portfolio = () => {
  return (
    <div>
      <PortfolioHero />
      <div className="grid  md:grid-cols-2  gap-4">
        <PortfolioInfo />
        <PortfolioExperience />
      </div>
      <div className="hero-content px-4 text-center md:px-0">
        <div>
          <div className="text-center">
            <h2 className="mt-20 md:mt-32 mb-2 text-4xl font-extrabold md:text-6xl">
              Visit Some My Samples
            </h2>
            <h3 className="mb-5 text-3xl font-bold">
              More excercises are going to be added
            </h3>
          </div>
          <div className="grid  md:grid-cols-2 lg:grid-cols-3  gap-4">
            <PortfolioExperience />
            <PortfolioExperience />
            <PortfolioExperience />
          </div>
        </div>
      </div>
      <PortFolioExtra />
    </div>
  );
};

export default Portfolio;
