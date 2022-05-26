import React from "react";
import "./Myportfolio.css";
import image from "../../images/sifat.jpeg";

const Myportfolio = () => {
  return (
    <div className="flex justify-center items-center mb-5 mt-5">
      <div class="card portfolio">
        <figure>
          <img className="portfolioimg" src={image} alt="me!" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">
            Welcome to Mohammad Monirul Hoque's Portfolio!
          </h2>
          <p>
            I am Mohammad Monirul Hoque. I am an upcoming computar science
            engineer who is passionate about Web Developing.I am not less than a
            hardworking and a team member type of person who always try to
            complete given any task or project with my sincerety,hardworking
            ability and learning habbit.
          </p>
          <p>
            Education: <b>Computer Science and Enginnering(Running)</b>
          </p>
          <h4>
            List of Technologies i have developed my skills with:
            <br />
            <b>
              HTML,CSS,Bootstrap,Tailwind
              CSS,Javascript,React,Firebase,Node,Express,Mongodb.
            </b>
          </h4>
          <div class="card-actions">
            <a href="https://money-mender.web.app">
              <button class="btn btn-accent text-white">
                My Money Mender app!
              </button>
            </a>
            <a href=" https://artistic-photography.netlify.app/">
              <button class="btn btn-accent text-white">
                Artistic photography
              </button>
            </a>
            <a href=" https://mobile-warehouse-99d6e.web.app/">
              <button
                class="btn btn-accent text-white
"
              >
                My Project Warehouse app!
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myportfolio;
