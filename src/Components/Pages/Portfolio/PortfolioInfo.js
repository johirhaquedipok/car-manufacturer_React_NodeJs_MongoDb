import React from "react";

const PortfolioInfo = () => {
  return (
    <div className=" rounded-box  mx-2 grid  flex-shrink-0 place-items-center items-center  p-4 py-8  xl:mx-0 ">
      <div className="online ">
        <div className="mask mask-squircle bg-base-content h-24 w-24 bg-opacity-10 p-px">
          <img
            src="https://avatars.githubusercontent.com/u/67517630?v=4"
            width="94"
            height="94"
            alt="profile"
            className="mask mask-hexagon"
          />
        </div>
      </div>
      <div>
        <div className="dropdown w-full">
          <div className="text-center">
            <div className="text-lg font-extrabold">Johir Haque dipok</div>{" "}
            <div className="text-base-content/70 my-3 text-sm">
              Worked as a computer operator for 4 years
              <br />
              BA on English Literature
              <br />
              Now Learning programming Language
            </div>
          </div>{" "}
        </div>{" "}
        <div className="dropdown w-full mb-3">
          <div className="mt-2 text-center">
            <div className="badge ">Wed Design</div>{" "}
            <div className="badge ">Web Development</div>{" "}
            <div className="badge ">Programming</div>
          </div>
        </div>
      </div>
      <div className="dropdown dropdown-top">
        <div className="btn-group">
          <button className="btn btn-accent btn-sm">Repository</button>{" "}
          <button
            aria-label="button component"
            className="btn btn-accent btn-square btn-sm"
            href="https://github.com/johirhaquedipok"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="h-6 w-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioInfo;
