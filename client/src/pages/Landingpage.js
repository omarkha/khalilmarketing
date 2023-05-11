import React, { useState } from "react";
import survey from "../media/survey.jpg";
import gem from "../media/gem.jpg";
import alison from "../media/alison.avif";
import bootcamp from "../media/bootcamp.png";
import coding from "../media/coding.jpg";
import banner from "../media/bg3.jpg";
import books from "../media/books.jpg";
import award from "../media/award.png";
import alisoncertificate from "../media/alison-certificate.png";
import { AiFillCheckCircle } from "react-icons/ai";
import logo from "../media/logo.png";
import { Link } from "react-router-dom";
import { Bounce, Fade, Flip, Zoom } from "react-reveal";
import axios from "axios";

const Landingpage = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [splitnames, setSplitnames] = useState([]);
  const [formData, setFormData] = useState({});
  const uri =
    process.env.NODE_ENV === "development"
      ? `http://localhost:4444`
      : "https://techramarketing.onrender.com";

  const subscribe = async (e) => {
    e.preventDefault();

    setData();

    try {
      await axios.post(`${uri}/api/subscribers`, formData).then((res) => {
        console.log(res);
      });
    } catch (err) {
      console.log("error subscribing function: ", err);
    }
  };

  const setData = () => {
    setFormData({
      email: email,
      firstname: fullname.split(" ")[fullname.split(" ").length - 1],
      lastname: fullname.split(" ")[0],
      fullname: fullname,
    });
    console.log(formData);
  };

  return (
    <div className="landingpage">
      <Fade>
        <div
          id="landingpage-banner"
          style={{ backgroundImage: `url(${banner})` }}
        >
          <div className="container">
            <div className="landingpage-logo">
              <h2 className="headline h1">
                Got a New Business? Put Your Budget To Its Fullest Potential
                With 'The Password to Success' and Get Order Notifications
                Streaming To Your Bank!
              </h2>{" "}
              <br />
              <br />
              <h3>..Scroll Down for More..</h3>
            </div>
          </div>
        </div>
      </Fade>
      <div className="container">
        <section className="copy">
          <br />
          <br />
          <div className="landingpage-logo">
            <div style={{ backgroundImage: `url(${logo})` }}></div>
            <h1>
              <span className="techra">Techra</span> <br />
              Marketing Solutions
            </h1>
          </div>
          <div>
            <Fade left>
              <br />
              <br />
              <h2 className="h2">
                One Word Can Turn Your Brand-New Business Into a Modern,
                Programmed Machine That Produces Money for You While You Eat,
                Sleep and Relax
              </h2>
            </Fade>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Fade left>
              <article>
                <p className="h1 text-dark">
                  <img src={gem} style={{ float: "left" }} />
                  You stopped beating around the books, you’ve got your magical
                  idea, and not only that but you also worked hard and created a
                  product or service which you can't help but sit back, look at
                  and marvel over! Now you’re ready to start out, launch your
                  business, and cash in, Right? <br />
                  <br />
                  Here's where 'The Password to Success' comes in.
                  <br />
                  <br />
                  New business owners usually struggle against competition with
                  unfruitful web presence, lack of time, and shortage of funds.
                  <br />
                  <br />
                  There's a secret to solving all of these disruptive problems,
                  shortcut your journey and capture a big slice of the market.{" "}
                  <br />
                  <br />
                  That secret word I talked about is... 'copywriter'
                  <br />
                  <br />
                  It's someone who uses the right words to persuade prospects to
                  buy from you and convert them into satisfied clients.
                  <br />
                  <br />
                  Like an engineer fueling up a sci-fi looking fighter jet for
                  battle, a trained copywriter helps prepare your business, pour
                  revenue in its engine of operations and launch it from the
                  grounds up.
                  <br />
                  <br />
                  The crucial part of the secret here, is to not employ just any
                  copywriter you can find, but someone who's properly trained,
                  knows their craft and can convert prospects into satisfied
                  clients.
                  <br />
                  <br />
                  Allow me to introduce myself.
                  <br />
                  <br />
                  I'm Omar Khalil, I currently live in New York. I'm an
                  entrepreneur myself, a software developer and a copywriter
                  who's trained, certified and experienced to get businesses of
                  all sizes competing and winning prospects.
                  <br />
                  <br /> To help you reach your desired sales, I can write
                  marketing copy for your business, get you qualified leads,
                  close those crucial sales, survey your market, get you
                  testimonials, advertise for you and make sure your clients are
                  happy, so instead of exhausting your energy on tedious and
                  time-consuming marketing tasks, you can comfortably spend your
                  time on perfecting your products.
                </p>{" "}
              </article>
            </Fade>
            <br />
            <Fade left>
              <article>
                <p className="h1 text-dark">
                  <h3 className=" text-dark h1">
                    The Story of My First Marketing Job
                  </h3>
                  <img
                    src={survey}
                    style={{ float: "left" }}
                    alt="survey picture"
                  />
                  <br />
                  Like most kids, my ambitions were big. But when I grew up, I
                  didn't lose my drive. <br />
                  <br />
                  my ambitions were higher than the horizon, at 18 years old.
                  Therefore, I moved from my small, little town in upstate New
                  York to Colorado, to make my impact on the world.
                  <br />
                  <br />
                  I got on the plane, with just a phone, my drivers license and
                  a luggage bag containing my clothes, aside from about $600. I
                  didn't have a short-term plan but I had a direction and a
                  destination in mind.
                  <br />
                  <br /> As soon as I got to a motel, I needed to secure my
                  stay, so right away, I hammered away with fulltime jobs.
                  <br />
                  <br />
                  With an abundance of energy and a knack for adventure I was
                  very confident. I guess a bit too confident as my first job
                  was not ideal for me at the time.
                  <br />
                  <br /> I worked as a Salesman for The Kirby Company selling
                  expensive, high-end Vacuum Cleaners. But I lacked the sales
                  expertise necessary to secure a sufficient income getting paid
                  on commission. So, I moved on, after three weeks, in search of
                  a job with a stable wage.
                  <br />
                  <br />
                  That's when I struck gold. I was hired at a marketing company
                  called Black Diamond Outreach, where I went canvassing on the
                  field, with a tablet that showed a map pinpointing the
                  locations of a list of people I was assigned to survey.
                  <br />
                  <br />
                  I knocked on their doors, introduced myself and chatted with
                  them while giving them surveys about political issues, then I
                  collected their names and emails. Each day, I interviewed up
                  to around 85 people face to face. <br />
                  <br />
                  As a communicative person, that job was easy for me, I enjoyed
                  it and excelled at it.
                  <br />
                  <br />
                </p>
              </article>
            </Fade>
            <Fade right>
              <article>
                <h3 className=" text-dark h1">
                  My First 3 Awards as a Marketing Professional
                </h3>
                <p className="h1 text-dark">
                  <img
                    src={award}
                    style={{ float: "left" }}
                    alt="survey picture"
                  />
                  <br />
                  <br />
                  I promised the hiring manager that I'd do great, so as soon as
                  I began working I wanted to do my best and prove my
                  capabilities. I surprised even myself. In an office of over 30
                  people in a building in downtown Colorado Springs, I
                  outperformed all of my coworkers by collecting the most data
                  and for the first three days in a row, I was Awarded Best
                  Employee.
                  <br />
                  <br />
                  As happy as I was to achieve that, I realized that I pretty
                  much secured the job. So on the fourth day, I finally took my
                  finger off the tablet and slowed down a bit as to let others
                  get awarded as well at the end of the day and as to not
                  demoralize my colleagues. They, also, need a free smoothie.
                  <br />
                  <br />
                  With my marketing experience, people skills and ability to
                  effectively interview people, I can provide you with:
                  <br />
                  <br />
                  <ul>
                    <li>
                      <strong>testimonials.</strong> So you can close more sales
                      and build more trust with prospects.
                    </li>
                    <li>
                      <strong>customized surveys.</strong> So you put your
                      finger on the pulse of your market, can understand your
                      business better and improve your products.
                    </li>
                    <li>
                      <strong>qualified leads.</strong> So you have a larger
                      list of qualified prospects for followup marketing
                      campaigns.
                    </li>
                  </ul>
                </p>
              </article>
            </Fade>
            <br />
            <Bounce bottom>
              <div className="quote text-light">
                “My experience with Omar in my work as a restaurant owner has
                been full of achievement. He was very helpful in my marketing
                efforts where he took professional pictures of the food and the
                restaurant. I’ve noticed that Omar helps the business owner
                reach his/her customers in an excellent way and easily.“
                <br />
                <span className="text-muted">
                  {" "}
                  - Amal A. Maseer, New Paltz, NY. Owner of Amals Cusine.
                </span>
              </div>{" "}
            </Bounce>
            <article>
              <br />
              <br />
              <Fade bottom>
                <p className="h1 text-dark">
                  <h3 className=" text-dark h1">Well-Read On Copywriting</h3>{" "}
                  <br />
                  Most copywriters fail because they lack dedication, knowledge
                  and passion. In the past 4 years{" "}
                  <u>
                    <strong>I’ve read</strong> about <strong>49 books.</strong>
                  </u>{" "}
                  About <strong>15 books on Copywriting</strong>, some others
                  were about <strong>Marketing</strong> in general and others
                  were mostly self-help books.
                  <br />
                  <br />
                  <Bounce>
                    <img src={books} alt="image of some books I've read" />
                  </Bounce>
                  <h5 className="text-muted">Some books I've read</h5>
                  <br />
                  <br />
                  You can expect me to apply my knowledge of the following
                  all-time best marketing books in writing your copy:
                  <br />
                  <br />
                  <ul>
                    <li>
                      <strong>Influence</strong> by Robert Cialdini
                    </li>
                    <li>
                      <strong>Tested Advertising Methods</strong> by John Caples
                    </li>
                    <li>
                      <strong>The Adweek Copywrting Handbook </strong>by Joseph
                      Sugarman
                    </li>
                    <li>
                      <strong>The Ultimate Sales Letter</strong> by Dan Kennedy
                    </li>
                    <li>
                      <strong>Scientific Advertising by</strong> Claude Hopkins
                    </li>
                    <li>
                      <strong>Cashvertising</strong> by Drew Whitman
                    </li>
                    <li>
                      <strong>Save The Cat</strong> by Blake Snyder
                    </li>
                    <li>
                      <strong>Breakthrough Advertising</strong> by Eugene
                      Schwartz
                    </li>
                    <li>
                      <strong>and more.</strong>
                    </li>
                  </ul>
                </p>
              </Fade>
            </article>
            <article>
              <p className="h1 text-dark">
                <Fade left>
                  <br />
                  <br />
                  <h3 className=" text-dark h1 ">
                    Optimize Your Marketing With Software Technology
                  </h3>
                  <img
                    src={coding}
                    style={{ float: "left" }}
                    alt="Coding bootcamp image"
                  />
                </Fade>
                <Zoom>
                  <br />
                  <br />
                  Modern technology has infiltrated the field of marketing. It
                  used to be just a copywriter with a typewriter writing
                  marketing materials. Now companies are utilizing software
                  developers to engineer software that optimizes their marketing
                  campaigns. But I'm not new to software development either.
                  <br />
                  <br />I have extensive knowledge and practice. I didn't stop
                  after I taught myself software engineering at 14 years old by
                  self-teaching. To learn even more about software engineering,
                  I, Then, took Computer Science classes at New Paltz High
                  School. And In 2022, I’ve completed General Assembly’s
                  Software Engineering Bootcamp.
                  <br /> You're free to check out my
                  <a href="https://omarkhalil.netlify.app/" target="_blank">
                    software development portfolio website
                  </a>
                  for software applications I’ve developed.
                  <br />
                  <br />
                  I orient my software development learning around
                  entrepreneurship and I'm consistently learning new
                  technologies and development techniques, practicing my skills
                  and improving my software development abilities.
                  <br />
                  <br />
                </Zoom>
                <Bounce>
                  <img src={bootcamp} alt="Coding bootcamp image" />
                </Bounce>
                <Fade bottom>
                  <br />
                  <br />
                  Being a Full Stack Software Engineer, I can develop for the
                  Client-Side and Server-Side of a website. I know how to design
                  the websites layout, graphics and client-side of the
                  application as well as the behind the scenes functionality of
                  the website. And I can also create databases and much more.
                  <br />
                  <br />
                  I don't rely on other developers for my own entrepreneurial
                  project. Even this website has been fully designed and
                  developed by me personally.
                  <br />
                  <br />
                  When you work with a tech savvy copywriter you can rest easy
                  knowing they understand the technical mechanics of your online
                  business to make marketing operations run smoother. As well as
                  helping you build a smarter, more effective marketing campaign
                  that matches the best in the industry.
                </Fade>
              </p>
            </article>
            <br />
            <p className="h1 text-dark">
              <Fade left>
                <h3 className=" text-dark h1 ">
                  Entrepreneurially Intelligent
                </h3>{" "}
              </Fade>
              <Fade bottom>
                <br />
                I have 100s of business ideas running through my mind per month.
                I’ve written copy for many businesses of mine and I can write
                copy for just about any business idea.
                <br />
                <br /> Robert Kiyosaki suggested in ‘Rich Dad, Poor Dad,’ that
                working for experience leads to more monetary success than
                working for money. So to make a positive impact on the success
                of your business makes me gain valuable experience. Thus,
                whatever your business is about, I will go above and beyond to
                provide you with as much results as possible. The only deals I
                make are win-win deals and I like to win bigly.
              </Fade>
            </p>{" "}
            <br />
            <br />
            <Fade left>
              <p className="h1 text-dark">
                <h3 className="h1 subhead">
                  Bilingual, Coherent and Articulate
                </h3>
                <br />
                Knowing the correct words to use and their correct arrangement
                is what distinguishes an excellent copywriter from an average
                one.
                <br />
                <br />
                While I can read, write and speak English fluently, My native
                language is, if you couldn't guess, Arabic. While some people
                assume that non-native English speakers are not as capable than
                native speakers, research shows that being bilingual comes with
                some exlusive strengths. <br />
                <br />
                Studies have shown that bilingual individuals outperform
                monolinguals in problem solving and perceptual focusing. With
                more tools for self-expression and unique capabilities, I can
                write one-of-a-kind marketing piece that grabs MORE attention,
                inspires MORE interest, builds MORE desire and gets MORE
                prospects to take ACTION.
              </p>
            </Fade>
            <br />
          </div>
          {/* <Fade left>
              <p className="h1 text-dark">
                <h3 className=" text-dark h1 ">
                  As an Ambivert, I Can Work In Teams, Alone or One-on-One
                </h3>{" "}
                <br />
                From when I was a salesman driving in a van with a team of
                salespeople for The Kirby Company demonstrating and selling
                high-end Vacuum Cleaners in Colorado Springs, to collaborating
                on software engineering projects via Slack with fellow software
                developers more recently, I've been in several situations where
                I worked, on a regular basis, in a team environment and
                collaborated with other people. I enjoy benefiting from the
                expertise of my colleagues. <br />
                <br />
                I am social and love networking with people. I'm easy-going,
                funny, yet professional and can properly communicate and have
                excellent people skills. Like the Good Guy Greg of copywriting,
                I treat every business acquaintance as a human being. I
                genuinely want your business to succeed and reach its fullest
                potential. Your success matter to me.
                <br />
                <br />
                You enjoy your business operations more working with someone
                who's got a vast amount of social experience, a peaceful
                mindset, and a friendly attitude.
                <br />
                <br />
              </p>
            </Fade> */}
          <Fade bottom>
            <p className="h1 text-dark">
              <br />
              <h3 className=" h1 text-dark">
                Taught and Certified with CPD (Continuing Professional
                Development) Accreditation
              </h3>{" "}
              <a href="https://alison.com/user/pdf/4698/1" target="_blank">
                <Bounce>
                  <img
                    className="certificate"
                    target="_blank"
                    id="alisoncertificate"
                    src={alisoncertificate}
                    style={{
                      float: "left",
                      margin: "34px",
                    }}
                  />
                </Bounce>
              </a>{" "}
              <br />
              While I have read many books on Marketing and it’s great to read
              the best copywriting books of all-time, Knowing how to put this
              information to practice is the most important thing.
              <br />
              <br />
              As a copywriter I have completed over 4 courses on Copywriting and
              Marketing. And I am certified for partaking in Copywriting
              courses.
              <br />
              <br />
              <br />
              <br />
              The courses that I’ve currently have completed are:
              <br />
              <br />
              <ul>
                <li>
                  <strong>Basic Concepts and Techniques For Copywriting</strong>{" "}
                  by Marcia Yudkin
                </li>
                <li>
                  <strong>Conversion Copywriting 101</strong> by Copyhackers
                </li>
                <li>
                  <strong>Advanced Copywriting Skills and Techniques</strong> by
                  Marcia Yudkin
                </li>
                <li>
                  <strong>Kopywriting Korse</strong> by Neville Medhora
                </li>
              </ul>
            </p>
          </Fade>
          <br />
          <br />
          <div>
            <Link className="h3 bg-warning py-2 px-5" to="/portfolio">
              Click Here to Check Out My Copywriting Portfolio
            </Link>
          </div>
          <br />
          <div id="offer">
            <Bounce>
              <h3 className="subhead h1 text-success  ">
                I Have A Special Offer That Suits Anyones Circumstances
              </h3>
            </Bounce>
            <br />
            <Fade bottom>
              <p className="h1 text-dark">
                New startup businesses are taking advantage of my low-cost
                services.
                <br />
                <br />
                I work with all kinds of budgets. The most important thing is
                that you have an interesting product or service. If not we can
                still make money.
                <br />
                <br /> if you want copy that converts prospect into customers,
                enter your name and email address to set up an appointment with
                me ASAP.
                <br />
                <br />
                After submitting your name and email address, you'll immediately
                receive 'The 5-Questions Email' via an automated response. That
                helps me understand what your business is about.
                <br />
                <br />
                Send me an email back with your answers and I'll discuss with
                you what we can do to get you sales fast. <br />
              </p>
            </Fade>
            <br />

            <div>
              {" "}
              <Fade>
                <div id="specialoffer">
                  <h5 className="subhead h4 text-dark">
                    Sign up before <u>June, 1st 2023</u>
                    <br />
                    You can schedule the first consultaton
                    <br /> with me, discussing a plan of action, <br />
                    <strong>Absolutely FREE</strong>
                    <br />
                    <br />I usually charge <s className="text-danger">
                      $19.99
                    </s>{" "}
                    but if you act now you pay{" "}
                    <u className="text-success">$0.</u> <br />
                    no credit card required.
                  </h5>
                </div>
              </Fade>
              <Zoom>
                <h6 className=" text-dark h5 p-5">
                  <strong>
                    What YOU Need To Do To Start Converting Prospects ASAP{" "}
                  </strong>{" "}
                </h6>
                Take Your First Step by answering a few questions about your
                business idea.
                <br /> Then we can start to build a mutually beneficial business
                relationship.
                <br />
                Fill Out This Form and Click on the Submit Button, Now.
              </Zoom>
              <br />
              <br />
            </div>
            <Bounce>
              <form>
                <h5 className="subhead h5 text-warning">
                  Act Fast before My schedule is fully booked.
                  <br />
                  Start with the 'The 5-Questions Email'
                </h5>
                <input
                  type="text"
                  value={fullname}
                  onChange={(e) => {
                    setFullname(e.target.value);
                  }}
                  placeholder="Your Full Name"
                />
                <input
                  type="text"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="Your Email Address"
                />
                <button
                  type="submit"
                  onClick={(e) => {
                    subscribe(e);
                  }}
                  className="button-2"
                >
                  Send Questionnaire
                </button>
                <h8 className=" h6 text-muted">
                  Your privacy is fully protected.
                </h8>
              </form>
            </Bounce>
            <br />
            <br />
          </div>
          <Fade bottom>
            <div className="benefits">
              <h3 className="text-dark">
                What do you get when working with me?
              </h3>
              <ul>
                <li>
                  <AiFillCheckCircle
                    color="yellowgreen"
                    className="checkmark"
                  />
                  <strong>Certifications.</strong> Having multiple certificates
                  guarantees you reliable copy
                </li>
                <li>
                  <AiFillCheckCircle
                    color="yellowgreen"
                    className="checkmark"
                  />
                  <strong>Surveys.</strong> Experienced in Public Opinion
                  Gathering I provide valueable market insights helping you
                  navigate your industry with sharpness.
                </li>
                <li>
                  <AiFillCheckCircle
                    color="yellowgreen"
                    className="checkmark"
                  />
                  <strong>Expertise.</strong> With thorough knowledge about
                  marketing you get a never-ending stream of ideas to improve
                  business.
                </li>
                <li>
                  <AiFillCheckCircle
                    color="yellowgreen"
                    className="checkmark"
                  />
                  <strong>Modern Marketing.</strong> My knowledge and expertise
                  in Software Development gives you an edge in modern maketing
                </li>
                <li>
                  <AiFillCheckCircle
                    color="yellowgreen"
                    className="checkmark"
                  />
                  <strong>Highly Motivated.</strong> A Copywriter who's driven
                  by the desire to improve by providing tangible results for you
                </li>
                <li>
                  <AiFillCheckCircle
                    color="yellowgreen"
                    className="checkmark"
                  />
                  <strong>Negotiable Pricing.</strong> In the beginning of
                  business every dollar counts. That's why you get to work with
                  someone who understands your needs.{" "}
                </li>
              </ul>
            </div>
          </Fade>
        </section>
      </div>
    </div>
  );
};

export default Landingpage;
