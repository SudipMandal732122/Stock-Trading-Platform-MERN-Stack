import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5" id="supportWraper">
        <h5>Support Portal</h5>
        <a href="" className="text-white">
          Track Tickets
        </a>
      </div>
      <div className="row pb-5  m-3" style={{paddingLeft:"11.1rem"}}>
        <div className="col-lg-6 pe-5">
          <h2 className="fs-4">Search for an answer or browse help topics to create a ticket</h2>

          <input
            type="text" className="p-3 border border-none rounded-2 my-3 " style={{width:"100%"}}
            placeholder="Eg. how do I activate F&O, why is my order getting rejected.."
          />
          <br />
          <a href="" className="text-white me-3">
            Track account opening
          </a>
          <a href="" className="text-white me-3">
            Track segment activation
          </a>
          <a href="" className="text-white me-3">
            Intraday margins
          </a>
          <a href="" className="text-white">
            Kite user manual
          </a>
        </div>
        <div className="col-lg-6 ps-5">
          <h2 className="fs-4">Featured</h2>
          <ol>
            <li>
              <a href="" className="text-white">
                Current Takeovers and Delisting - January 2024
              </a>
            </li>
            <li className="mt-3">
              <a href="" className="text-white">
                Latest Intraday leverages - MIS & CO
              </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
