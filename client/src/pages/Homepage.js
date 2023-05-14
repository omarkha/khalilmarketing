import React from "react";
import mypicture from "../media/mypicture6.jpg";
import introbg from "../media/bg3.jpg";

import { Link } from "react-router-dom";
import { Fade } from "react-reveal";
const Homepage = () => {
  return (
    <div className="homepage">
      <Fade>
        <div
          className="home-intro-wrapper"
          style={{ backgroundImage: `url(${introbg})` }}
        >
          <div className="container">
            <section className="intro">
              <div className="leftside">
                <div
                  className="mypicture"
                  style={{ backgroundImage: `url(${mypicture})` }}
                ></div>
                <div>
                  <h1 className="myname">
                    <span className="">Omar S. Khalil</span>
                    <br />
                    <span className="text-light">
                      Copywriter, Software Developer and Entrepreneur
                    </span>
                  </h1>
                </div>
              </div>
              <div className="myinfo">
                <h2 className="display-3 text-light   mb-5">
                  Get Sales For Your Startup Business Within <br />a Few Days
                  <br />
                </h2>
                <Link to="/landingpage" id="homeintrobtn" className="button-3">
                  Start Making Money
                </Link>
              </div>
            </section>
          </div>
        </div>
      </Fade>{" "}
      <div className="container">
        <section className="homepage-info py-5">
          <br />
          <br />
          <br />
          <br />
          <Fade left>
            <div>
              <h3 className="text-primary subhead">
                We Provide You The Marketing You Need For Your Business to
                Compete
              </h3>

              <p className="h5 text-dark">
                By writing anything from landing-page copy, to home page copy,
                to sales letters and more, <br />
                <strong>Khalil's Marketing</strong> got you covered.
              </p>
            </div>{" "}
          </Fade>
          <br />
          <br /> <br />
          <br />
          <Fade right>
            <div>
              <h3 className="text-primary subhead">Low Budget? No Problem!</h3>

              <p className="h5 text-dark">
                As a new startup ourselves, we take into consideration the needs
                and circumstances of all of our clients.
              </p>
            </div>{" "}
          </Fade>
          <br />
          <br />
          <br />
          <br />
          <Fade left>
            <div>
              <h3 className="text-primary subhead">
                Unfamiliar With Marketing?
              </h3>

              <p className="h5 text-dark">
                We will walk with you step by step to not only get sales but to
                understand how, why and what makes it happen.
              </p>
            </div>{" "}
          </Fade>
          <br />
          <br />
          <br />
          <br />
          <p>Click on the button below to...</p>
          <Link to="/landingpage" className="button-3">
            Start Making Money
          </Link>
          <br />
          <br />
          <br />
          <br />
          <Link to="/services" className="button-1 mx-2">
            Our Services
          </Link>
          <Link to="/about" className="button-1 mx-2">
            About Khalil
          </Link>
          <Link to="/portfolio" className="button-1 mx-2">
            My Portfolio
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Homepage;
