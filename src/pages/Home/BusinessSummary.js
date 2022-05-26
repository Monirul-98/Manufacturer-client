import { faBagShopping, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const BusinessSummary = () => {
  return (
    <div className="my-10">
      <h2 className="text-4xl text-center">Why we are the best in business!</h2>
      <div className="w-full mx-auto stats shadow text-center">
        <div className="stat">
          <div className="stat-figure text-primary">
            <FontAwesomeIcon icon={faBagShopping}></FontAwesomeIcon>
          </div>
          <div className="stat-title">Total Customers</div>
          <div className="stat-value text-primary">10K</div>
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Page Views</div>
          <div className="stat-value text-secondary">10k</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
          </div>
          <div className="stat-value">85%</div>
          <div className="stat-title">Good reviews</div>
          <div className="stat-desc text-secondary">More to improve</div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
