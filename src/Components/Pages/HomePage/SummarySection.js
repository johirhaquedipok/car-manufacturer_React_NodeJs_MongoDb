import React from "react";

const SummarySection = () => {
  return (
    <div className="g-base-200 flex flex-col items-center gap-20 py-20">
      <div className="stats stats-vertical md:stats-horizontal shadow">
        <div className="stat">
          <div className="stat-figure text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Total Buyers</div>
          <div className="stat-value text-primary">25.6K</div>
          <div className="stat-desc">21% more than last month</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Total Sales</div>
          <div className="stat-value text-secondary">2.6M</div>
          <div className="stat-desc">15% more than last month</div>
        </div>

        <div className="stat">
          <div className="stat-value">86%</div>
          <div className="stat-title">More product value</div>
          <div className="stat-desc text-secondary">
            31 product service added
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummarySection;
