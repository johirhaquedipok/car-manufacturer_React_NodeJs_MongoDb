import React from "react";

const PortfolioImage = () => {
  return (
    <div className=" rounded-box  mx-2 grid flex-shrink-0 place-items-center   p-4 py-8 md:place-items-stretch xl:mx-0 ">
      <h3 className="mb-5 text-3xl font-bold">HTML & CSS Project</h3>{" "}
      <div className="flex-1 md:flex md:items-center md:justify-center ">
        <a href="https://johirhaquedipok.github.io/nexter-with-cssgrid-layout/">
          <img src="https://i.ibb.co/gydmvNR/nexter.png" alt="profile" />
        </a>
      </div>
    </div>
  );
};

export default PortfolioImage;
