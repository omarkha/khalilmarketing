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
      await axios
        .post(`${uri}/api/subscribers`, {
          email: email,
          firstname: fullname.split(" ")[fullname.split(" ").length - 1],
          lastname: fullname.split(" ")[0],
          fullname: fullname,
        })
        .then((res) => {
          console.log(res);
        });
    } catch (err) {
      console.log("error subscribing function: ", err);
    }
  };

  const setData = () => {
    setFormData({
      email: email,
      first_name: firstname,
      last_name: lastname,
      full_name: fullname,
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
                This Tech-Savvy Marketer is Certified to Engineer Your Business
                Into a Machine Producing Money For You While You Eat and Sleep
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
            <h1>Khalil's Marketing</h1>
          </div>
          <div>
            <Fade left>
              <br />
              <br />
              <h2 className="h2">
                Multiply Your Budget With Modern Marketing Methods, and Get
                Order Notifications Streaming To Your Account!
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
                  and marvel over! Now you’re ready to start a new business.
                  Let's Cash In. <br />
                  <br />
                  Now you're at the stage of trying to figure out how to get
                  those initial sales.
                  <br />
                  <br />
                  The main problems you're facing now are an unfruitful web
                  presence, lack of time, and LACK OF FUNDS.
                  <br />
                  <br />
                  There's a secret to solving all of these worrisome problems,
                  once and for all, which can be described in just one word:
                  Copywriter.
                  <br />
                  <br />
                  Just like an engineer fueling up one of those sci-fi looking
                  fighter jets that are ready for battle, a trained copywriter
                  can help prepare your business, fuel it with revenue and
                  launch your business from the grounds up.
                  <br />
                  <br />
                  The other important secret here is to NOT just get ANY
                  copywriter to take care of your business before taking off.
                  Instead employ a properly trained one!
                  <br />
                  <br />
                  My name is Omar Khalil. I'm Well-Read, Trained and Certified
                  to get you all that you need for your business to compete..
                  From sales, leads, testimonials, surveys and more, I will take
                  care of all those things for you, so instead of exhasting your
                  energy ineffeciently, from this point on, you can comfortably
                  spend your time on perfecting your products. Make the market a
                  YES-fly Zone.
                </p>{" "}
              </article>
            </Fade>
            <br />
            <Fade left>
              <article>
                <p className="h1 text-dark">
                  <h3 className=" text-dark h1">
                    The Story of My First Marketing Experience
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
                  at 18 years old, my ambitions were higher than the horizon.
                  Therefore, I moved from my small, little town in upstate New
                  York to Colorado, to reach the stars.
                  <br />
                  <br />I got on the plane from New York to Colorado with just a
                  phone, my drivers license and a luggage bag containing my
                  clothes, aside from about $600.
                  <br />
                  <br /> So, as soon as I got there, I hammered away with
                  fulltime jobs to secure my stay.
                  <br />
                  <br />I was a driven young man with an abundance of energy and
                  a knack for adventure. Yet, my first job was not ideal for me
                  at the time. <br />
                  <br /> I worked as a Salesman for The Kirby Company selling
                  high-end Vacuum Cleaners but I did not have the sales
                  expertise necessary to secure a sufficient income geting paid
                  on commission only. So, after three weeks, I moved on, in
                  search of a job with a stable wage.
                  <br />
                  <br />
                  That's when I was hired at a marketing company called Black
                  Diamond Outreach, where I went canvassing on the field,
                  outside going from door-to-door with a tablet that had a map
                  and pinpoints of the locations I was assigned to survey.
                  <br />
                  <br />
                  As a communicative person, the one thing that made me about 10
                  times happier at work was the opportunity to interview about
                  100 people each day. I chatted up people while giving them
                  surveys about political issues, then collecting their names
                  and email addresses. That was very easy for me, and I enjoyed
                  it and excelled at it. Splendid.
                  <br />
                  <br />
                </p>
              </article>
            </Fade>
            <Fade right>
              <article>
                <h3 className=" text-dark h1">
                  My First 3 Awards as a Marketer
                </h3>
                <p className="h1 text-dark">
                  <img
                    src={award}
                    style={{ float: "left" }}
                    alt="survey picture"
                  />
                  When I started working I wanted to do my best and prove my
                  capabilities, and, indeed, I was Awarded Best Employee for 3
                  days in a row, in an office of over 30 people. On the fourth
                  day, I finally took my finger off the tablet and slowed down a
                  bit to let others get awarded as well and as to not demoralize
                  my colleagues. Because others need their smoothies too.
                  <br />
                  <br />
                  With my marketing experience and ability to interview people
                  effectively, I can provide you with testimonials, customized
                  surveys and qualified leads. In doing so, you close sales as
                  you put your finger on the pulse of your market, understand
                  your business better and have leads for followup marketing. By
                  having that better understanding of your business and market ,
                  you can, also, improve your product or service and get paid
                  better.
                  <br />
                  <br />
                  You can find more about me in the by clicking on 'about me' in
                  the navigation bar, up top.
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
            <Fade left>
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
            </Fade>
            <Fade bottom>
              <p className="h1 text-dark">
                <br />
                <h3 className=" h1 text-dark">
                  Taught and Certified with CPD (Continuing Professional
                  Development) Accreditation
                </h3>{" "}
                <a href="https://alison.com/user/pdf/4698/1" target="_blank">
                  <Bounce>
                    <div
                      className="certificate"
                      target="_blank"
                      id="alisoncertificate"
                      style={{
                        backgroundImage: `url(${alisoncertificate})`,
                        float: "left",
                        margin: "34px",
                      }}
                    ></div>
                  </Bounce>
                </a>{" "}
                <br />
                While I have read many books on Marketing and it’s great to read
                the best copywriting books of all-time, Knowing how to put this
                information to practice is the most important thing.
                <br />
                <br />
                As a copywriter I have completed over 4 courses on Copywriting
                and Marketing. And I am certified for partaking in Copywriting
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
                    <strong>
                      Basic Concepts and Techniques For Copywriting
                    </strong>{" "}
                    by Marcia Yudkin
                  </li>
                  <li>
                    <strong>Conversion Copywriting 101</strong> by Copyhackers
                  </li>
                  <li>
                    <strong>Advanced Copywriting Skills and Techniques</strong>{" "}
                    by Marcia Yudkin
                  </li>
                  <li>
                    <strong>Kopywriting Korse</strong> by Neville Medhora
                  </li>
                </ul>
              </p>
            </Fade>
            <br />
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
                    Optimize Your Business Marketing With a Tech Savvy Software
                    Developer
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
                  Technology is getting out of hands. So isn't it best to work
                  with a modern Copywriter who knows tech?
                  <br />
                  <br />
                  I started engineering software since 14 years old by
                  self-teaching. Then, I took Computer Science classes at New
                  Paltz High School, to learn even more about software
                  engineering.
                  <br />
                  <br />
                  In 2022, I’ve completed General Assembly’s Software
                  Engineering Bootcamp, and you're free to check out my{" "}
                  <a href="https://omarkhalil.netlify.app/" target="_blank">
                    portfolio website
                  </a>{" "}
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
                  Even this website is created by me!
                  <br />
                  <br />
                  When you work with such a tech savvy copywriter you can rest
                  easy knowing they understand the technical mechanics of your
                  online business to make marketing operations run smoother. As
                  well as helping you build a smarter, more effective marketing
                  campaign that matches the best in the industry.
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
                I have 100s of business ideas. I’ve written copy for many
                businesses of mine and I can write copy for just about any
                business idea.
                <br />
                <br /> Robert Kiyosaki suggested in ‘Rich Dad, Poor Dad,’ that
                working for experience leads to more monetary success than
                working for money. So when I can make a positive impact on the
                success of your business, I gain valuable experience. Thus,
                whatever your business is about, I will go aboce and beyond to
                provide you with as much money as possible.
              </Fade>
            </p>{" "}
            <br />
            <br />
            <Fade left>
              <p className="h1 text-dark">
                <h3 className="h1 subhead">Bilingual and Articulate</h3>
                <br />
                While I can read, write and speak English fluently, My native
                language is Arabic. Some people assume that non-native English
                speakers are not as capable than native speakers. Yet, research
                shows that being bilingual comes with some exlusive strengths.{" "}
                <br />
                <br />
                Studies have shown that bilingual individuals outperform
                monolinguals in problem solving and perceptual focusing. With
                more tools for self-expression and unique capabilities, I can
                write one-of-a-kind copy that grabs MORE attention, inspires
                MORE interest, builds MORE desire and gets MORE prospects to
                take ACTION.
              </p>
            </Fade>
            <br />
          </div>
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
