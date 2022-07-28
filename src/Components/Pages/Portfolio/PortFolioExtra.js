import React from "react";

const PortFolioExtra = () => {
  return (
    <div className="hero-content px-4 text-center md:px-0">
      <div>
        <h2 className="mt-20 md:mt-32 mb-2 text-4xl font-extrabold md:text-6xl">
          Hungry to Learning
        </h2>
        <h3 className="mb-5 text-3xl font-bold">Js is my starting language</h3>
        <p className="mx-auto mb-5 w-full max-w-lg">
          I am still learning <br />
          with following starters like{" "}
          <span className="badge badge-outline badge-primary">html</span>
          <span className="badge badge-outline badge-primary">css</span>
          <span className="badge badge-outline badge-primary">js</span>
          <span className="badge badge-outline badge-primary">node</span>
          <span className="badge badge-outline badge-primary">mongodb</span>
        </p>
        <p className="mx-auto mt-20 w-full max-w-lg"></p>{" "}
        <div className="font-bold">You can visit my GitHub repositories</div>
        <div className="mt-6 mb-10 flex w-full justify-center">
          <a
            href="https://github.com/johirhaquedipok"
            className="btn btn-primary btn-sm md:btn-wide"
          >
            See All Git Hub Repositories
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortFolioExtra;
