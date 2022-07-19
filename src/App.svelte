<script>
  import { LottiePlayer } from "@lottiefiles/svelte-lottie-player";
</script>

<main>
  <div class="NameDiv">
    <span class="FirstName">Hello, I am Nikhil </span>
    <span class="BoldName">Bishnoi</span>
  </div>
  <div class="ContentDiv">
    <span class="MainDescription">
      Hi 👋🏽 I am <span class="boldd">Nikhil</span>, I am a passionate
      <span class="boldd">developer</span>
      and undergraduate <span class="boldd">researcher</span> in
      <span class="boldd">IIIT Hyderabad</span>. I am currently in 4th year of
      <span class="boldd">Computational Linguistics</span> Dual degree program. I
      like learning by implementing and building meaningful projects. I have a keen
      interest in the art of comedy and I am the founder of IIIT's Humour club.
    </span>

    <div>
      <LottiePlayer
        src="https://assets4.lottiefiles.com/private_files/lf30_WdTEui.json"
        autoplay={true}
        loop={true}
        renderer="svg"
        background="transparent"
        height={350}
        width={350}
      />
    </div>
  </div>
  <div class="SectionDiv">
    <span class="Section">Experiance</span>
    <span class="SectionInnerDiv">
      <div class="SubSectionDiv">
        <row>
          <span class="SubSection">Taiyari Karlo </span>
          <span class="Description">| Co-founder and CTO | Link</span>
        </row>
        <span class="Location"
          >Feb 2021 to July 2022 | Hyderabad, Telangana</span
        >
        <li class="item">
          <span class="bolddd">Taiyari Karlo</span> is an
          <span class="bolddd">Ed-Tech</span> platform for Government Jobs recruitment
          exam preparation.
        </li>
        <li class="item">
          Worked as a sole developer and built Taiyari Karlo <span
            class="bolddd">Mobile application</span
          >
          from scratch in <span class="bolddd">React Native</span> and
          <span class="bolddd">Firebase</span>
          and admin website in <span class="bolddd">ReactJs</span>
        </li>
        <li class="item">
          Later hired interns and led a that worked on switching the same
          application to Flutter.
        </li>
        <li class="item">
          Used third-party APIs like Razorpay and Cashfree for payments, Raygun
          for error reporting, JW Player for video streaming, 99sms for messages
          and OTP verification and Shiprocket for shipping books.
        </li>
        <li class="item">
          The application has more than 2,50,000 downloads with 65,000 monthly
          active users and 4.6 rating on google play store.
        </li>
        <li class="item">
          Recorded more than 130,000 USD revenue in our first year with 34%
          profit margin.
        </li>
      </div>
      <div class="SubSectionDiv">
        <row>
          <span class="SubSection">Human Science Research Group (HSRG)</span>
          <span class="Description"> | Undergraduate Researcher</span>
          <span class="Location">June 2021 - Present | IIIT Hyderabad</span>
          <li class="item">
            Working under Dr Radhika Krishnan as an undergraduate researcher for
            my ongoing thesis for Master of Science in Computational
            Linguistics.
          </li>
          <li class="item">
            Performing sentiment analysis of user posts on environmental topics
            on different social media platform.
          </li>
        </row>
      </div>
    </span>
  </div>
  <div class="SectionDiv">
    <span class="Section">Education</span>
    <span class="SectionInnerDiv">
      <div class="SubSectionDiv">
        <span class="SubSection">IIIT Hyderabad</span>
        <span class="Description">BTech in Computer Science</span>
        <span class="Description">MS in Computational Linguistics</span>
        <span class="Location">2019 to 2024 | Hyderabad, Telangana</span>
      </div>
      <div class="SubSectionDiv">
        <span class="SubSection">Shiksha High School</span>
        <span class="Description">10th to 12th Standard CBSE</span>
        <span class="Location">2016 to 2018 | Bikaner, Rajasthan</span>
      </div>
    </span>
  </div>
  <div class="SectionDiv">
    <span class="Section">Projects</span>
    <span class="SectionInnerDiv">
      <div class="SubSectionDiv">
        <row>
          <span class="SubSection">Telegram Bot</span>
          <span class="Description">| Taiyari Karlo</span>
        </row>
        <span class="Location">Selenium, Beautiful Soup , Python , NodeJS</span>
        <span class="item">
          Scraped 45,000+ questions from different websites in vernacular
          languages using Selenium and BS4 in Python and then built telegram bot
          using Node Js and Firebase cloud functions to conduct quizes. This
          helped us gain 50,000 subscribers on telegram channel.
        </span>
      </div>

      <div class="SubSectionDiv">
        <row>
          <span class="SubSection">Brick Breaker Game</span>
        </row>
        <span class="Location"> Python </span>
        <span class="item">
          Built a terminal based arcade game inspired by the classical brick
          breaker game using various OOPs concepts. Added additional power ups
          and levels with the help of an extensible design and reusable code
        </span>
      </div>

      <div class="SubSectionDiv">
        <row>
          <span class="SubSection">Linux Shell</span>
        </row>
        <span class="Location">C Language</span>
        <span class="item">
          Implemented a fully functional Linux shell in C that supports
          redirection, piping, signal handling, background and foreground
          process execution.
        </span>
      </div>
      <div class="SubSectionDiv">
        <row>
          <span class="SubSection">Job Portal</span>
        </row>
        <span class="Location">MERN</span>
        <span class="item">
          Built a full stack job search platform using MERN stack. Used
          Passport.js and bcrypt for authentication, MongoDB atlas for database
          hosting.</span
        >
      </div>
      <div class="SubSectionDiv">
        <row>
          <span class="SubSection">Blood Donation App</span>
        </row>
        <span class="Location">Flutter and Firebase</span>
        <span class="item">
          Built a mobile application platform for blood donors and blood seekers
          to connect and implemented a reward system based on number of
          donations. Used Google Maps API for finding nearby donors.</span
        >
      </div>
    </span>
  </div>
</main>

<style>
  @font-face {
    font-family: Lato-Hai;
    src: url(/fonts/lato/Lato-Hai.ttf);
  }
  @font-face {
    font-family: Lato-Lig;
    src: url(/fonts/lato/Lato-Lig.ttf);
  }
  @font-face {
    font-family: Lato-Bol;
    src: url(/fonts/lato/Lato-Bol.ttf);
  }
  @font-face {
    font-family: Lato-Reg;
    src: url(/fonts/lato/Lato-Reg.ttf);
  }
  @font-face {
    font-family: Raleway-Medium;
    src: url(/fonts/raleway/Raleway-Medium.otf);
  }

  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  .FirstName {
    color: #000000;
    font-family: "Lato-Hai";
    font-size: 4em;
    font-weight: 100;
  }

  .BoldName {
    color: #000000;
    font-family: "Lato-Lig";
    font-size: 4em;
    font-weight: 100;
  }

  .MainDescription {
    color: #000000;
    font-family: "Lato-Hai";
    font-size: 1.5em;
    font-weight: 100;
    margin: auto;
    max-width: 500px;
    border: 3px solid #ffffff;
  }
  .NameDiv {
    max-width: 1000px;
    margin: auto;
    border: 3px solid #ffffff;
  }

  .ContentDiv {
    max-width: 1000px;
    margin: auto;
    border: 3px solid #ffffff;
    display: flex;
    flex-wrap: wrap-reverse;
    justify-content: space-evenly;
  }

  .SectionDiv {
    max-width: 1000px;
    margin: auto;
    border: 3px solid #ffffff;
    display: flex;
    margin-bottom: 50px;
    justify-content: start;
  }

  .SectionInnerDiv {
    border: 3px solid #ffffff;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    flex-grow: 1;
  }

  .Section {
    transform: rotate(180deg);
    writing-mode: vertical-rl;

    font-family: "Lato-Hai";
    font-size: 3em;
    margin-right: 25px;
  }

  .SubSectionDiv {
    flex-direction: column;
    display: flex;
    align-items: flex-start;
    text-align: left;
    flex-grow: 1;
    padding: 20px;
  }

  .SubSection {
    font-family: "Lato-Bol";
    font-size: 1.5em;
    text-transform: uppercase;
  }
  .Description {
    font-family: "Raleway-Medium";
    font-size: 1.25em;
    text-transform: uppercase;

    color: #333333;
  }
  .Location {
    color: #6a6a6a;
    font-family: "Raleway-Medium";
    font-size: 1.25em;
  }

  .item {
    font-family: "Lato-Lig";
  }
  .boldd {
    font-family: "Lato-Lig";
  }

  .bolddd {
    font-family: "Lato-Reg";
  }
  @media (min-width: 240px) {
    main {
      max-width: none;
    }
  }
</style>
