import React from "react";
import linkedin from "../media/linkedin.png";
const Aboutpage = () => {
  return (
    <div className="aboutpage">
      <div className="container bg-light">
        <section className="about">
          <div className="aboutme">
            <h3 className=" text-dark">Hello There!</h3>
            <p className="text-dark">
              I'm Omar Khalil, a copywriter, software developer, entrepreneur
              and the business owner of Khalil's Marketing. I'm a typology nerd,
              martial arts enthusiast, soccer player, and a music production
              hobbyist. I have had some experience working in a marketing
              organization as well as a salesperson. Very Recently I've
              completed General Assembly's Software Engineering Bootcamp. Yet,
              instead of becoming a software developer I found it important for
              my entrepreneurial strategy to master copywriting, content writing
              and related fields.
              <br />
            </p>
          </div>
          <br />
          <br />
          <div>
            <h3>Connect with me via Linkedin</h3>
            <div
              id="linkedin"
              style={{ backgroundImage: `url(${linkedin})` }}
            ></div>
          </div>
          <br />
          <br />
          <div className="containtinfo">
            <h3 className=" text-dark">Contact Info</h3>
            <p className="text-dark">
              Cellphone Number is <strong>845 616 7364.</strong> <br />
              Email Address is <strong>
                {" "}
                omareldagestany@outlook.com
              </strong>{" "}
              <br />
              Physical Address is{" "}
              <strong> 902 Meadowbrook Cir., New Paltz, NY</strong>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Aboutpage;
