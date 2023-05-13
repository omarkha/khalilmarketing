import React, { useState } from "react";
import survey from "../media/survey2.jpg";
import gem from "../media/gem.jpg";
import beethoven from "../media/Beethoven.jpg";
import omar from "../media/mypicture6.jpg";
import problem from "../media/problem.jpg";
import alison from "../media/alison.avif";
import bootcamp from "../media/bootcamp.png";
import coding from "../media/coding.jpg";
import banner from "../media/bg3.jpg";
import books from "../media/books.jpg";
import award from "../media/award.png";
import scrolldown from "../media/scrolldown.gif";
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
          <div id="container" className="container">
            <div className="landingpage-headline">
              <h2 className="headline h1">
                How This <u>One Secret Word</u> Can Make You 10x Richer
              </h2>{" "}
              <br />
              <br />
            </div>
            <div className="scrolldown">
              <h3>Scroll Down</h3>
              <div
                id="scrolldown"
                style={{ backgroundImage: `url(${scrolldown})` }}
              />
            </div>
          </div>
        </div>
      </Fade>
      <div id="mobile-container" className="landingpage-container">
        <section className="copy">
          <br />
          <br />

          <br />
          <br />
          <br />
          <br />
          <Fade left>
            <h2 className="h2">
              After Learning This Secret Marketing Word, You Can Profitably
              Launch Your Startup Business And Receive a Stream of Orders
              Shortly After
            </h2>
          </Fade>
          <div className="landingpage-logo">
            <div style={{ backgroundImage: `url(${logo})` }}></div>
            <h1>
              <span className="techra">Khalil Marketing</span> <br />
            </h1>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <article>
            <p className="h1 text-dark">
              <Fade left>
                <img src={gem} style={{ float: "left" }} />
                <br />
                <br />
                Your mind produced a profitable business idea, and you stopped
                beating around the books.
                <br />
                <br /> After working hard, you created an awesome product that
                you can't help but sit back, look at, and marvel over. Now it's
                time to start, get paid, and celebrate. Right? <br />
                <br />
                The answer is 'absolutely, YES.' as soon as you learn about this
                keyword.
                <br />
                <br />
                This secretive keyword I'm talking about is the word
                'Copywriter.' It covers a type of professional who can remove
                all the obstacles you face as a new business owner. Such as an
                unfruitful online presence, lack of time, and shortage of funds.
                <br />
                <br />
                <br />
                <br />
              </Fade>
              <Fade right>
                <h4 className="text-primary">What Does The Word Mean?</h4>
                <br />
                <img src={beethoven} style={{ float: "right" }} />
                When I learned the meaning of this particular word, I knew I
                struck gold and I got the key to reaching my ambitious goals.{" "}
                <br />
                <br />A copywriter is like a Musical Composer. But instead, he
                composes attention-grabbing, interest-evoking, desire-building,
                action-prompting, and persuasive written paragraphs. The
                emotionally moving melodies that are struck by each paragraph
                cast a buying spell on your ideal customers.
                <br />
                <br />
                When the prospect is persuaded, they will run, grab their wallet
                and give you their credit card information with a big smile on
                their face.
                <br />
                <br />
                The promise of a unique experience and the right benefits,
                combined with precise delivery, moves their buying needle to
                your side.
                <br />
                <br />
                After they experience the beneficial results of your product,
                they will give you heart-warming testimonials and you can
                utilize their feedback for more sales and for improving your
                product.
                <br />
                <br />
                In no time, the copywriting guru starts channeling money from
                the market pool into your bank account, then you can accumulate
                wealth and achieve total financial freedom within a few months
                to two years.
                <br />
                <br />
                <br />
                <br />
              </Fade>
              <h4 className="text-primary">
                But There's Just One Challenging Obstacle
              </h4>
              <img
                src={problem}
                alt="problem image"
                style={{ float: "left" }}
              />
              <br />
              <br />
              The bad news is that 95% of copywriters are novices who are not up
              to snuff, and a good copywriter may cost more than you could
              afford.
              <br />
              <br />
              But, if you don't want a marketing mess, it's best to hire a
              properly trained copywriter who has a good marketing game, who
              understands the technological aspect of marketing, and who can
              convert prospects into satisfied, paying clients.
              <br />
              <br />
              The size of your budget doesn't matter to me, the only thing that
              matters is that you have created a profitable product.
              <br />
              <br />
              <br />
              <br />
              <Fade bottom>
                <h4 className="text-success">
                  <u>Let Me Solve That Problem For You</u>
                </h4>
                <br />
                Hi There, My name is Omar S. Khalil and I've studied the art and
                science of copywriting for over 5 years.{" "}
                <div
                  id="omar-picture"
                  alt="Omar Khalil's picture"
                  style={{ backgroundImage: `url(${omar})`, float: "right" }}
                >
                  <h2 className="text-light">Omar S. Khalil</h2>
                </div>
                As an experienced Copywriter from a small town in upstate New
                York, I'm qualified, certified and ready to help your business
                survive through the adversity of its starting phase and have a
                prosperous future.
                <br />
                <br />I can write converting marketing copy for any type of
                business. I'm confident and pumped to win you qualified leads,
                win you those important initial sales and provide you with the
                continuous marketing you need to earn money year after year.
                <br />
                <br /> With a bit of hard work and patience, you'll eventually
                begin living the life you've been dreaming about and working
                hard to achieve.
                <br />
                <br /> I continue tweaking and perfecting your marketing, so
                instead of being overwhelmed and exhausted by a field of study
                that takes years to master, you can comfortably spend your time
                tweaking and perfecting your products.
                <br />
                <br />
              </Fade>
            </p>{" "}
          </article>

          <Fade left>
            <article>
              <p className="h1 text-dark">
                <h3 className=" text-dark h1">
                  The Story of a Young Bulldozer
                </h3>
                <img
                  src={survey}
                  style={{ float: "left" }}
                  alt="survey picture"
                />
                <br />
                Like most young kids, I enjoyed looking up at the stars. Yet, as
                I grew up and became an adult, I decided to reach for them.
                <br />
                <br /> At 18 years old, my ambitions were higher than the
                horizon. Therefore, I moved from my small, little town in
                upstate New York to Colorado Springs, to pursue my dreams and
                make my impact on the world.
                <br />
                <br />
                I got on the plane, with just a phone, my driver's license, and
                a luggage bag containing my clothes, aside from about $600. I
                didn't have a short-term plan but I had a direction and a
                destination in mind.
                <br />
                <br /> As soon as I got to a motel, I figured that I needed to
                secure my stay, so within a few days, I started to hammer away
                with full-time jobs.
                <br />
                <br />
                <h4 className="text-success">And My Journey Began</h4>
                <br />
                With an abundance of energy and a knack for adventure, I was
                very confident. I guess a bit too confident as my first job was
                not ideal for me at the time.
                <br />
                <br />I was a Salesman, for my first job, working for The Kirby
                Company selling expensive, high-end Vacuum Cleaners. But I
                lacked the sales expertise necessary to secure a sufficient
                income while getting paid on commission. So, I moved on, after
                three weeks, in search of a job with a stable wage.
                <br />
                <br />
                That's when I struck gold. I applied for and got hired at a
                marketing company called Black Diamond Outreach. There, I went
                canvassing on the field, with a tablet that showed a map
                pinpointing the locations of a list of people I was assigned to
                survey.
                <br />
                <br />
                I knocked on their doors, introduced myself, and chatted with
                them while surveying them about political issues, collectng
                their names and their emails. Each day, I interviewed up to
                around 85 people face to face. <br />
                <br />
                As a communicative person, that was an easy job for me, I
                enjoyed surveying people and excelled at it.
                <br />
                <br />
              </p>
            </article>
          </Fade>
          <Fade right>
            <article>
              <h3 className=" text-dark h1">My First 3 Marketing Awards</h3>
              <p className="h1 text-dark">
                <img
                  src={award}
                  style={{ float: "right" }}
                  alt="survey picture"
                />
                <br />
                <br />
                I'm sitting down, talking to the hiring managers for my
                interview, and I promised them that I'd do great. I learned a
                few lessons from my salesman job. So as soon as I began working
                I wanted to do my best and prove my capabilities. I was
                surprised, myself.
                <br />
                <br /> There were over 30 people working with me, in the office
                I worked at, in downtown Colorado Springs. We got on the field
                on the first day and I put the speaking to the peak. I
                outperformed all of my coworkers by collecting the most data.
                Not only for just one day but I was Awarded For Being The Best
                Employee on my first three days.
                <br />
                <br />
                I could've kept going. But, as happy as I was to achieve that, I
                realized that I had pretty much secured the job and I didn't
                want to hog the spotlight. So on the fourth day, I finally took
                my finger off the tablet and slowed down a bit so as to let
                others get awarded as well at the end of the day and as to not
                demoralize my colleagues. They also need free smoothies.
                <br />
                <br />
                With my people skills and ability to effectively interview
                people, I can provide you with:
                <br />
                <br />
                <ul>
                  <li>
                    <strong>testimonials.</strong> So you build more trust with
                    prospects and close more sales.
                  </li>
                  <li>
                    <strong>customized surveys.</strong> So you put your finger
                    on the pulse of your market, understand your business
                    better, and improve your products.
                  </li>
                  <li>
                    <strong>qualified leads.</strong> So you have a larger list
                    of qualified prospects for follow-up marketing campaigns.
                  </li>
                </ul>
              </p>
            </article>
          </Fade>

          <Bounce bottom>
            <div className="testimonial text-light">
              “My experience with Omar in my work as a restaurant owner has been
              full of achievement. He was very helpful in my marketing efforts
              where he took professional pictures of the food and the
              restaurant. I’ve noticed that Omar helps the business owner reach
              his/her customers in an excellent way and easily.“
              <br />
              <span className="text-warning">
                {" "}
                - Amal A. Maseer, New Paltz, NY. Owner of Amals Cuisine.
              </span>
            </div>{" "}
          </Bounce>
          <article>
            <Fade left>
              <p className="h1 text-dark">
                <h3 className="h1 subhead">
                  Writing Copy In English As a Non-Native English Speaker
                </h3>
                <br />
                Knowing the correct words to use and their correct arrangement
                is what distinguishes an excellent copywriter from an average
                Joe.
                <br />
                <br />
                While my native language is.. if you couldn't guess... Arabic, I
                think this shouldn't deter you. Some people might assume that
                non-native English speakers are not as capable as native
                speakers. They're not always wrong. Although, while it's true
                that natives usually have a deeper understanding of the English
                language, research shows that being bilingual comes with some
                exclusive strengths.
                <br />
                <br />
                Scientific studies show that bilingual individual are actually
                at an advantage in regards to Copywriting.
                <br />
                <br />
                <div className="quote">
                  "Increasing evidence suggests that speaking more than one
                  language does not only improve one’s verbal skills but also
                  more general, non-linguistic cognitive abilities. For
                  instance, bilingual individuals have been demonstrated to
                  outperform monolinguals in problem solving (Bain, 1975),
                  perceptual focusing (Duncan and De Avila, 1979), and the Simon
                  task (e.g., Bialystok et al., 2004; for a general review, see
                  Bialystok and Craik, 2010)."{" "}
                </div>
                With access to different mindsets and perceptions, and more
                tools for self-expression, I am actually freer in my thinking
                and I am more flexible in explaining things. Those are more
                reasons why I can write a one-of-a-kind marketing piece that
                grabs MORE attention, inspires MORE interest, builds MORE
                desire, and gets MORE prospects to take ACTION.
              </p>
            </Fade>
            <br />
          </article>
          <article>
            <br />
            <br />
            <Fade bottom>
              <p className="h1 text-dark">
                <h3 className=" text-dark h1">Well-Read On Copywriting</h3>{" "}
                <br />
                Most copywriters fail because they lack dedication, knowledge
                and passion. In the past 5 years,{" "}
                <u>
                  <strong>I’ve read</strong> about <strong>49 books.</strong>
                </u>{" "}
                several of those books were on <strong>Marketing</strong> in
                general and others were mostly self-help books, and out of those
                49 books I've read, about{" "}
                <strong>15 of them were on Copywriting</strong>.
                <br />
                <br />
                <Bounce>
                  <img src={books} alt="image of some books I've read" />
                </Bounce>
                <h5 className="text-muted">Some books I've read</h5>
                <br />
                <br />
                You can expect me to apply my knowledge of the following best
                marketing books of all time, in writing your copy:
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
                    <strong>The Adweek Copywriting Handbook </strong>by Joseph
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
                    <strong>Breakthrough Advertising</strong> by Eugene Schwartz
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
                Modern technology has infiltrated the field of marketing. A
                couple of decades ago, It was just a copywriter with a
                typewriter crafting marketing materials. Now companies are
                utilizing software developers to engineer software that
                optimizes their marketing campaigns. Luckily, I'm not new to
                coding either.
                <br />
                <br />
                <br />
                before I knew what marketing even meant, I loved technology and
                software development in particular. At the age of 14, I taught
                myself programming through online courses. I, then, enrolled in
                Computer Science classes in High School to further develop my
                skills. And a few years after graduating High School and In May
                of 2022, I became a true full-stack software engineer upon
                completing General Assembly's $15,000 Software Engineering
                Bootcamp.
                <br />
                <br />
                <Bounce>
                  <img src={bootcamp} alt="Coding bootcamp image" />
                </Bounce>
                <br /> Feel free to check out my
                <a href="https://omarkhalil.netlify.app/" target="_blank">
                  software development portfolio website
                </a>
                <br />
                <br />
              </Zoom>

              <Fade bottom>
                <br />
                <h4>Entrepreneurial and Marketing Software Solutions</h4>
                <br />
                As a Full-Stack Software Engineer, I can develop the Client Side
                and Server Side of your website. So I know how to design the
                layout, graphics, and interface of the application. As well as
                developing the behind-the-screen functionality such as setting
                up and managing databases. That means, in the case you need that
                extra help, I can even develop your web application.
                <br />
                <br />
                This website was, in fact, fully designed and developed by me
                personally. I don't usually rely on other developers for my own
                entrepreneurial projects. But I do have a network of engineers
                that I can turn to if I ever need to.
                <br />
                <br />
                As a marketing professional who understands the technical
                mechanics of your online business, You can feel comfortable
                knowing you're getting reliable business solutions. I can help
                you build smarter, more effective marketing campaigns that match
                the best in your industry.
              </Fade>
            </p>
          </article>
          <br />
          <article>
            <p className="h1 text-dark">
              <Fade left>
                <h3 className=" text-dark h1 ">The Entrepreneurial Mindset</h3>{" "}
              </Fade>
              <Fade bottom>
                <br />
                For a true entrepreneur, it isn't uncommon to have 100s of
                life-improving, profitable business ideas. In itself, that's a
                rare skill. I’ve written copy for many businesses of mine and I
                can write copy for just about any business idea. When you add my
                software capabilities with those skills, you've got a recipe for
                wealth.
                <br />
                <br /> Robert Kiyosaki accurately suggested in ‘Rich Dad, Poor
                Dad,’ that working for experience leads to more monetary success
                than working for money. That's why I'd like to work with an
                entrepreneurially-spirited individual who's got a good and
                profitable product or service. My success is your success. This
                is why, whatever your budget is, I offer you flexible payment
                plans.
              </Fade>
            </p>{" "}
            <br />
            <br />
          </article>

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
            <article>
              <p className="h1 text-dark">
                <br />
                <h3 className=" h1 text-dark">
                  Taught and Certified with CPD (Continuing Professional
                  Development) Accreditation
                </h3>{" "}
                <br />
                While I have read many of the all-time best books on Copywriting
                and have extensive knowledge about this particular field,
                Knowing how to put this information to practice is the most
                important thing.
                <br />
                <br />
                I have completed several courses in Copywriting and Marketing.
                <br />
                <br />
                The courses that I’ve currently completed are:
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
                <br />
                I've also completed two CPD accredited copywriting courses
                during this year and I'm properly certified by a copywriter with
                25 years of professional experience named Marcia Yudkin.
              </p>{" "}
              <a href="https://alison.com/user/pdf/4698/1" target="_blank">
                <Bounce>
                  <img
                    className="certificate"
                    target="_blank"
                    id="alisoncertificate"
                    src={alisoncertificate}
                  />
                </Bounce>
              </a>{" "}
            </article>
          </Fade>
          <br />
          <br />
          <div>
            <Link to="/portfolio">
              <h5 className="h3 bg-warning py-2 px-5">
                {" "}
                Click Here to Check Out My Copywriting Portfolio
              </h5>
            </Link>
          </div>
          <br />
          <article>
            <div id="offer">
              <Bounce>
                <h3 className="subhead h1 text-success  ">
                  I Have A Special Offer That Suits Anyone's Circumstances
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
                  <br /> if you want marketing copy that converts prospects into
                  customers, enter your name and email address to set up an
                  appointment with me ASAP.
                  <br />
                  <br />
                  After submitting your name and email address, you'll
                  immediately receive 'The 5-Questions Email' via an automated
                  response. That helps me understand what your business is
                  about.
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
                      You can schedule the first consultation
                      <br /> with me, discussing a plan of action, <br />
                      <strong>Absolutely FREE</strong>
                      <br />
                      <br />I usually charge{" "}
                      <s className="text-danger">$19.99</s> but if you act now
                      you pay <u className="text-success">$0.</u> <br />
                      no credit card is required.
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
                  <br /> Then we can start to build a mutually beneficial
                  business relationship.
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
          </article>
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
                  means I can deliver reliable marketing copy.
                </li>
                <li>
                  <AiFillCheckCircle
                    color="yellowgreen"
                    className="checkmark"
                  />
                  <strong>Surveys.</strong> Experienced in Public Opinion
                  Gathering I provide valuable market insights helping you
                  navigate your industry with sharpness.
                </li>
                <li>
                  <AiFillCheckCircle
                    color="yellowgreen"
                    className="checkmark"
                  />
                  <strong>Expertise.</strong> With my thorough knowledge of
                  marketing, you get a never-ending stream of ideas to improve
                  business.
                </li>
                <li>
                  <AiFillCheckCircle
                    color="yellowgreen"
                    className="checkmark"
                  />
                  <strong>Modern Marketing.</strong> My knowledge and expertise
                  in Software Development give you an edge in modern marketing.
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
                  <strong>Negotiable Pricing.</strong> At the beginning of
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
