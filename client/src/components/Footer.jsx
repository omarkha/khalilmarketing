import React from "react";
import facebook from "../media/facebook.png";
import twitter from "../media/twitter.png";
import instagram from "../media/instagram.png";
import linkedin from "../media/linkedin.png";
import alisonCertificate from "../media/alison-certificate.png";
import alisonCertificate2 from "../media/alison-certificate-2.png";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";

const Footer = () => {
  return (
    <footer>
      <hr />
      <Fade bottom>
        <div className="container">
          <div className="footercontent">
            <div className="links">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/portfolio">Portfolio</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/">Resume</Link>
                </li>
                <li>
                  <Link to="/about">About Me</Link>
                </li>
              </ul>
            </div>
            <div className="middle">
              <h3>Award Winning & Certified Copywriter.</h3>
              <img src={alisonCertificate} alt="AWAI logo" />
              <img src={alisonCertificate2} alt="AWAI logo" />
            </div>
            <div className="socialmedia">
              <Link
                className="facebook"
                to="https://www.facebook.com/profile.php?id=100092253552291"
                style={{ backgroundImage: `url(${facebook})` }}
              ></Link>
              <Link
                to="https://twitter.com/omarkhalil34v"
                className="twitter"
                style={{ backgroundImage: `url(${twitter})` }}
              ></Link>
              <Link
                to="https://www.instagram.com/omarkhalil34v/"
                className="instagram"
                style={{ backgroundImage: `url(${instagram})` }}
              ></Link>
              <Link
                to="https://www.linkedin.com/in/omar-khalil-34v/"
                className="linkedin"
                style={{ backgroundImage: `url(${linkedin})` }}
              ></Link>
            </div>
          </div>{" "}
          <div className="footer-contact-info">
            <p>
              Omar S. Khalil
              <br />
              New Paltz, NY 12561
              <br />
              omareldagestany@outlook.com
            </p>
          </div>
          <h5 className="mt-5">All Rights Reserved.</h5>
        </div>
      </Fade>
    </footer>
  );
};

export default Footer;
