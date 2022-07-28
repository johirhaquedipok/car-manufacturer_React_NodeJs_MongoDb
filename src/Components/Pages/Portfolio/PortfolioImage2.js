import React from "react";

const PortfolioImage1 = () => {
  return (
    <div className=" rounded-box  mx-2 grid flex-shrink-0 place-items-center   p-4 py-8 md:place-items-stretch xl:mx-0 ">
      <h3 className="mb-5 text-3xl font-bold">Car Inventory REACT Project</h3>{" "}
      <div className="flex-1 md:flex md:items-center md:justify-center ">
        <a href="https://carinvento.web.app/">
          <img
            src="https://i.ibb.co/x2sRNLX/Car-Inventory.png"
            alt="Car-Inventory"
            border="0"
          />
        </a>
      </div>
    </div>
  );
};

export default PortfolioImage1;
