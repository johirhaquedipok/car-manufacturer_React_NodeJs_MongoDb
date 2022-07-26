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
      <PortFolioExtra />
    </div>
  );
};

export default Portfolio;
