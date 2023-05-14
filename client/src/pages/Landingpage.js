import React, { useState } from "react";
import survey from "../media/survey2.jpg";
import gem from "../media/gem.jpg";
import beethoven from "../media/Beethoven.jpg";
import omar from "../media/mypicture6.jpg";
import problem from "../media/thecatch.gif";
import alison from "../media/alison.avif";
import bootcamp from "../media/bootcamp.png";
import coding from "../media/coding.jpg";
import banner from "../media/bg3.jpg";
import books from "../media/books.jpg";
import award from "../media/award.png";
import scrolldown from "../media/scrolldown.gif";
import alisoncertificate from "../media/alison-certificate.png";
import alisoncertificate2 from "../media/alison-certificate-2.png";
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
                This <u>Secretive word</u> Whips Up Sales For You Within Days
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
                After generating a money-making business idea, you quit beating
                around the books, and you got to work. Now you got an awesome
                product that you can't help but sit back, look at, and marvel
                over! Finally, it's time to launch, get paid, and celebrate.
                Right? <br />
                <br />
                When you learn what this keyword means, the answer becomes
                'absolutely, YES.'
                <br />
                <br />
                Which secretive keyword I'm talking about? Ok. Your 'Yes' answer
                to financial success sits Within the word 'Copywriter'. This
                word solves all the obstacles you face as a new business owner,
                such as the unfruitful online presence, lack of time, and
                shortage of funds.
                <br />
                <br />
                As soon as I learned the meaning of this particular word, I
                quickly realized that I got the key to reaching financial
                abundance. <br />
                <br />
                <br />
                <br />
              </Fade>
              <Fade right>
                <h4 className="text-primary">
                  What This Copywriter Does For You
                </h4>
                <br />
                <img src={beethoven} style={{ float: "right" }} />
                Like a Musical Composer a Copywriter orchestrates moving
                melodies that are struck by each paragraph casting a buying
                spell on your ideal customers. Specifically speaking, he
                composes attention-grabbing, interest-evoking, desire-building,
                action-prompting, and persuasive written material.
                <br />
                <br />
                When copywriters persuade prospects, they run to the drawers,
                grab their wallets and enthusiastically give you their credit
                card information with a big smile on their face.
                <br />
                <br />
                <br />
                By promsing the prospect the medicine to their pain, a more
                comfortable life or an enjoyable experience along with the most
                appealing benefits, delivered with creativity and precision, you
                move them past the buying threshhold.
                <br />
                <br />
                Soon after they experience the beneficial results your product
                is designed to deliver, they become more than glad to give you
                heart-warming testimonials which you utilize for more sales and
                to further develop your product for maximum profitability.
                <br />
                <br />
                This might seem like wishful thinking. But the reality is that
                this operation drives 100s of billions of dollars every year.
                <br />
                <br />
                landing pages, sales pages, newsletters, emails, pamphlets, web
                content, blogs, and more, This professional effectively writes
                it all.
                <br />
                <br />
                Within days, this Copywriter, this marketing guru starts
                channeling market assets into your business, accumulating wealth
                for you as you achieve total financial freedom within a few
                months to one year.
                <br />
                <br />
                <br />
                <br />
              </Fade>
              <h4 className="text-primary">
                But You Must Overcome This One Challenge
              </h4>
              <br />
              <img
                src={problem}
                alt="problem image"
                style={{ float: "left" }}
              />
              <br />
              <br />
              By hiring a decent copywriter, with proper marketing game, and
              who's familiar with technology, you avoid a marketing mess.
              <br />
              <br />
              But, novices who are not up to snuff make up 95% of copywriters,
              and a good copywriter may cost more than your entire marketing
              budget.
              <br />
              <br />
              I have a way for you to find one of those 5% copywriters at a cost
              you can afford. <br />
              <br />
              A rare breed of competent copywriters exist who don't obsess over
              immediate money. They work toward releasing your products' fullest
              potential, as long as your product is profitable. Afterall, if
              they're so confident of their abilities, I'm sure they could
              figure out this type of payment plan. <br />
              <br />
              When you flex your generosity muscles, the obstacle of copywriter
              scarcity goes out the window and you can live your dreams.
              <br />
              <br />
              Let me introduce to you...
              <br />
              <br />
              <br />
              <br />
              <Fade bottom>
                <h4 className="text-success">
                  <u>
                    A Copywriter Who Offers You Better Services For Less Money
                  </u>
                </h4>
                <br />
                <br />
                <div
                  id="omar-picture"
                  alt="Omar Khalil's picture"
                  style={{ backgroundImage: `url(${omar})`, float: "right" }}
                >
                  <h2 className="text-light">Omar S. Khalil</h2>
                </div>
                <br />
                <br />
                My name is Omar S. Khalil. I'm experienced and certified to help
                your business survive through the adversity of its starting
                phase and help you have a prosperous future.
                <br />
                <br />
                In the past 5 years, I studied over 15 books, took 4 courses on
                the art and science of copywriting, and I aquired 2 CPD
                certificates. I possess the capability to write promotional copy
                that converts readers into clients for any type of business, and
                I aim to win you qualified leads, those crucial initial sales
                and continuously market your business to earn you money month
                after month.
                <br />
                <br /> I make my money by receiving a fairly small percentage of
                your profits with a negotiable/flexible payment plan. <br />
                <br />
                As I constantly tweak and optimize your marketing, you spend
                your time tweaking and optimizing your products or services.{" "}
                <br />
                <br /> Within months of working with me, you begin reaching your
                ambitions in life and live the life you always wanted and
                dreamed about.
                <br />
                <br />
              </Fade>
            </p>{" "}
          </article>

          {/* <Fade left>
            <article>
              <p className="h1 text-dark">
                <h3 className=" text-dark h1">My First Marketing Experience</h3>
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
          </Fade> */}

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
                  Writing Copy As a Non-Native English Speaker
                </h3>
                <br />
                While my native language is, if you couldn't guess, the Arabic
                language, I think this won't deter you and for good reasons.
                <br />
                <br />
                Science aside, I personally think it's true that natives usually
                have a deeper understanding of the English language, but
                research shows that being bilingual comes with some exclusive
                strengths that can offer you unique and desirable benefits. But
                first, is it really true that native English speakers are better
                writers than bilinguals?
                <br />
                <br />
                Below I provide scientific studies that show that bilingual
                individuals are actually at an advantage in regards to the field
                of Copywriting. Yalla, Habibi.
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
                  Bialystok and Craik, 2010)."
                  <br />
                  <a
                    href="https://www.frontiersin.org/articles/10.3389/fpsyg.2011.00273/full"
                    target="_blank"
                  >
                    More Info
                  </a>
                </div>
                Knowing the correct words to use and their correct arrangement
                is what distinguishes an excellent copywriter from an average
                writer.
                <br />
                <br />
                With access to different mindsets and perceptions and more tools
                for self-expression, I am freer in my thinking and more flexible
                in explaining things. <br />
                <br />
                Besides everything else, those are more reasons why I can write
                a one-of-a-kind marketing piece that grabs more attention,
                inspires more interest, builds more desire, and gets more
                prospects to take action for your business.
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
                typewriter crafting marketing material. Now companies are
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
                My ambitions reached farther than the horizon, when I was 18
                years old. Therefore, I moved from my small, little town in
                upstate New York to Colorado Springs, to pursue my dreams and
                make my impact on the world.
                <br />
                <br />
                I began working as a Salesman, for my first job in Colorado. The
                Kirby Company tasked me with selling costly Vacuum Cleaners. But
                I didn't possess the sales skills to secure a sufficient income
                whilst getting paid on commission. So, in order to secure my
                stay in Colorado, I moved on, after three weeks, in search for a
                job with a stable wage.
                <br />
                <br /> That's when I struck gold.
                <br />
                <br />
                I applied for and received an interview at Black Diamond
                Outreach; a Marketing company. During the interview, I was
                sitting down, talking to the hiring managers, and I promised
                them that I'd do great. Afterall, I learned a few lessons from
                my salesman job. So as soon as I began working I wanted to do my
                best and prove my capabilities. And, I was surprised, myself.
                <br />
                <br />
                There, I went canvassing on the field, with a tablet that showed
                a map pinpointing the locations of a list of people I was
                assigned to survey.
                <br />
                <br />
                I knocked on their doors, introduced myself, and chatted with
                them while surveying them about political issues, collecting
                their names, emails and answers. Each day, I interviewed up to
                around 85 people face to face. <br />
                <br />
                There were over 30 people working with me, in the office I
                worked at, in downtown Colorado Springs. We got on the field on
                the first day and I put my social ability to its peak. I
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
                With my <strong>people skills</strong> and ability to
                effectively interview people, I provide you with:
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
                is another reason why, whatever your budget is, I offer you
                flexible payment plans.
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
                a PHD and 25 years of professional experience named Marcia
                Yudkin.
              </p>{" "}
              <a
                href="https://alison.com/certification/check/$2y$10$GLFOq0Gxvd7iQ5DxsSmfF.1x53HQGRUn0GADtnKDQicZM6m1md7xa"
                target="_blank"
              >
                <Bounce>
                  <img
                    className="certificate"
                    target="_blank"
                    id="alisoncertificate"
                    src={alisoncertificate}
                  />
                </Bounce>
              </a>{" "}
              <a
                href="https://alison.com/certification/check/$2y$10$.Bg0yhZy0.1qnqC88WKTv.fCQsDbIJIwHO.bOO1DfxFSuAVzDTQM."
                target="_blank"
              >
                <Bounce>
                  <img
                    className="certificate"
                    target="_blank"
                    id="alisoncertificate"
                    src={alisoncertificate2}
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
                  response. That helps me understand what your business is about
                  and helps you pitch your business idea.
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
