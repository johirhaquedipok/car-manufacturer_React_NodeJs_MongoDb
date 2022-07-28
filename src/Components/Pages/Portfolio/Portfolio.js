import React from "react";
import PortfolioExperience from "./PortfolioExperience";
import PortFolioExtra from "./PortFolioExtra";
import PortfolioHero from "./PortfolioHero";
import PortfolioImage from "./PortfolioImage";
import PortfolioImage2 from "./PortfolioImage2";
import PortfolioImage3 from "./PortfolioImage3";
import PortfolioInfo from "./PortfolioInfo";

const Portfolio = () => {
  return (
    <div>
      <PortfolioHero />
      <div className="grid  md:grid-cols-2  gap-4">
        <PortfolioInfo />
        <PortfolioExperience />
      </div>
      <div className="hero-content px-4 text-center md:px-0 from-primary to-accent text-primary-content min-h-screen bg-gradient-to-br">
        <div className="min-h-screen ">
          <div className="text-center">
            <h2 className="mt-20 md:mt-32 mb-2 text-4xl font-extrabold md:text-6xl">
              Some Exercises
            </h2>
            <h3 className="mb-5 text-3xl font-bold">
              More excercises are going to be added
            </h3>
          </div>
          <div className="grid  md:grid-cols-2 lg:grid-cols-3  gap-4 ">
            <PortfolioImage />
            <PortfolioImage2 />
            <PortfolioImage3 />
          </div>
        </div>
      </div>
      <PortFolioExtra />
    </div>
  );
};

export default Portfolio;
