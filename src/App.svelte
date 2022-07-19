<script>
  let backgroundColor = "#ffffff";
  let primaryColor = "#000000";
  let secondaryColor = "#333333";
  let otherColor = "#6a6a6a";
  let mode = "Day";
  let rootElement;

  function toggleMode() {
    console.log("Hello");
    if (mode == "Day") {
      mode = "Night";
      backgroundColor = "#15202B";
      primaryColor = "#ffffff";
      secondaryColor = "#fbfcf8";
      otherColor = "#fafafa";
    } else {
      mode = "Day";
      backgroundColor = "#ffffff";
      primaryColor = "#000000";
      secondaryColor = "#333333";
      otherColor = "#6a6a6a";
    }
  }

  $: rootElement &&
    rootElement.style.setProperty("--container-background", backgroundColor);

  $: rootElement &&
    rootElement.style.setProperty("--primary-text", primaryColor);

  $: rootElement &&
    rootElement.style.setProperty("--secondary-text", secondaryColor);

  $: rootElement && rootElement.style.setProperty("--other-text", otherColor);

  import { LottiePlayer } from "@lottiefiles/svelte-lottie-player";
</script>

<main bind:this={rootElement}>
  <div class="Header">
    <span class="sign">Nikhil Bishnoi</span>
    <div on:click={toggleMode}>
      {#if mode == "Day"}
        <img src="./fonts/moon.png" alt="icon" />
      {:else}
        <img src="./fonts/sun.png" alt="icon" />
      {/if}
    </div>
  </div>
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
          <span class="Description"
            >| Co-founder and CTO | <a
              href="https://play.google.com/store/apps/details?id=com.uddan.taiyarikarlo&hl=en_IN&gl=US"
              >Link</a
            ></span
          >
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
          application to <span class="bolddd">Flutter</span>.
        </li>
        <li class="item">
          Used third-party APIs like <span class="bolddd">Razorpay</span> and
          <span class="bolddd">Cashfree</span>
          for payments, <span class="bolddd">Raygun</span>
          for error reporting, <span class="bolddd">JW Player</span> for video
          streaming, <span class="bolddd">99sms</span> for messages and OTP
          verification and <span class="bolddd">Shiprocket</span> for shipping books.
        </li>
        <li class="item">
          The application has more than <span class="bolddd"
            >2,50,000 downloads</span
          >
          with <span class="bolddd">65,000</span> monthly active users and
          <span class="bolddd">4.6 rating</span>
          on google play store.
        </li>
        <li class="item">
          Recorded more than <span class="bolddd">130,000 USD</span> revenue in
          our first year with <span class="bolddd">34%</span> profit margin.
        </li>
      </div>
      <div class="SubSectionDiv">
        <row>
          <span class="SubSection">Human Science Research Group (HSRG)</span>
          <span class="Description"> | Undergraduate Researcher</span>
          <span class="Location">June 2021 - Present | IIIT Hyderabad</span>
          <li class="item">
            Working under <span class="bolddd">Dr Radhika Krishnan</span> as an
            undergraduate researcher for my ongoing thesis for Master of Science
            in <span class="bolddd">Computational Linguistics</span>.
          </li>
          <li class="item">
            Performing <span class="bolddd">sentiment analysis</span> of user posts
            on environmental topics on different social media platform.
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
          Scraped <span class="bolddd">45,000+</span> questions from different
          websites in vernacular languages using
          <span class="bolddd">Selenium</span>
          and <span class="bolddd">BS4</span> in
          <span class="bolddd">Python</span> and then built
          <span class="bolddd">telegram bot</span> using
          <span class="bolddd">Node Js</span>
          and <span class="bolddd">Firebase cloud functions</span> to conduct
          quizes. This helped us gain <span class="bolddd">50,000</span> subscribers
          on telegram channel.
        </span>
      </div>

      <div class="SubSectionDiv">
        <row>
          <span class="SubSection">Brick Breaker Game</span>
        </row>
        <span class="Location"> Python </span>
        <span class="item">
          Built a terminal based arcade game inspired by the classical brick
          breaker game using various <span class="bolddd">OOPs concepts</span>.
          Added additional power ups and levels with the help of an extensible
          design and <span class="bolddd">reusable code</span>
        </span>
      </div>

      <div class="SubSectionDiv">
        <row>
          <span class="SubSection">Linux Shell</span>
        </row>
        <span class="Location">C Language</span>
        <span class="item">
          Implemented a fully functional Linux shell in <span class="bolddd"
            >C</span
          > that supports redirection, piping, signal handling, background and foreground
          process execution.
        </span>
      </div>
      <div class="SubSectionDiv">
        <row>
          <span class="SubSection">Job Portal</span>
        </row>
        <span class="Location">MERN</span>
        <span class="item">
          Built a full stack job search platform using <span class="bolddd"
            >MERN stack</span
          >. Used <span class="bolddd">Passport.js</span> and
          <span class="bolddd">bcrypt</span> for authentication,
          <span class="bolddd">MongoDB</span> atlas for database hosting.</span
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
          donations. Used <span class="bolddd">Google Maps API</span> for finding
          nearby donors.</span
        >
      </div>
    </span>
  </div>

  <div class="SectionDiv">
    <span class="Section">Skills</span>
    <span class="SectionInnerDiv">
      <div class="SubSectionDiv">
        <row>
          <span class="SubSection">Programming Languages </span>
        </row>
        <span class="item"
          >C &bull C++ &bull Javascript &bull Shell &bull Python &bull Dart
          &bull HTML5 &bull CSS</span
        >
      </div>

      <div class="SubSectionDiv">
        <row>
          <span class="SubSection">Frameworks and Libraries</span>
        </row>
        <span class="item"
          >Node.js &bull ReactJs &bull React Native &bull Flutter &bull Django
        </span>
      </div>

      <div class="SubSectionDiv">
        <row>
          <span class="SubSection">Others</span>
        </row>
        <span class="item">
          AWS &bull Firebase &bull Hasura &bull Supabase &bull MySQL &bull
          SQLite &bull MongoDB
        </span>
      </div>
    </span>
  </div>

  <div class="SectionDiv">
    <span class="Section">Courses</span>
    <span class="SectionInnerDiv">
      <div class="SubSectionDiv">
        <row>
          <span class="SubSection">Undergraduate</span>
        </row>
        <span class="item">Data Structures and Algorithms</span>
        <span class="item">Operating Systems and Networks</span>
        <span class="item">Computational Linguistics</span>
        <span class="item">Machine, Data and Learning</span>
        <span class="item">Natural Language Processing</span>
        <span class="item">Design and Analysis of Software Systems</span>
        <span class="item">Probability and Statistics</span>
        <span class="item">Discrete Structures</span>
        <span class="item">Introduction to Software systems</span>
      </div>
    </span>
  </div>
  <div class="SectionDiv">
    <span class="Section">Activities</span>
    <span class="SectionInnerDiv">
      <div class="SubSectionDiv">
        <row>
          <span class="SubSection">Achievements</span>
        </row>
        <span class="item"
          ><span class="bolddd">AIR 101</span> out of
          <span class="bolddd">160,000</span> in Undergraduate entrance exam by IIIT
          Hyderabad</span
        >
        <span class="item"
          ><span class="bolddd">AIR 6218</span> out of
          <span class="bolddd">1.1 Million</span> students in JEE Mains</span
        >
        <span class="item"
          >Recieved best <span class="bolddd">Meme award</span> by college Humor
          Club
        </span>
      </div>
      <div class="SubSectionDiv">
        <row>
          <span class="SubSection">Position of Responsiblities</span>
        </row>
        <span class="item"> College Humor club Founder </span>
        <span class="item"> Elected Member of Student's parliament </span>
        <span class="item"> Campus life Committee Coordinator </span>
        <span class="item"> Alumni Cell Coordinator </span>
        <span class="item"> Felicity Marketing Head </span>
      </div>
    </span>
  </div>
  <div class="footer">
    <span class="item">
      Made with ❤︎ by Nikhil Bishnoi. Inspired by Deedy's resume template in
      latex. Feel free to use <a
        href="https://github.com/bishboi/Deedy-Resume-Website.git"
        >this template.</a
      >
    </span>
  </div>
</main>

<style>
  @font-face {
    font-family: Lato-Hai;
    src: url(./fonts/lato/Lato-Hai.ttf);
  }
  @font-face {
    font-family: Lato-Lig;
    src: url(./fonts/lato/Lato-Lig.ttf);
  }
  @font-face {
    font-family: Lato-Bol;
    src: url(./fonts/lato/Lato-Bol.ttf);
  }
  @font-face {
    font-family: Lato-Reg;
    src: url(./fonts/lato/Lato-Reg.ttf);
  }
  @font-face {
    font-family: Raleway-Medium;
    src: url(./fonts/raleway/Raleway-Medium.otf);
  }

  @font-face {
    font-family: TheScientist;
    src: url(./fonts/the-scientist/TheScientist.ttf);
  }
  :root {
    --container-background: inherit;
    --primary-text: inherit;
    --secondary-text: inherit;
    --other-text: inherit;
  }

  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
    background-color: var(--container-background);
  }

  .Header {
    color: var(--primary-text);
    max-width: 1100px;
    margin: auto;
    display: flex;
    font-family: "Lato-Hai";
    margin-bottom: 100px;
    justify-content: space-between;
  }

  .sign {
    color: var(--primary-text);

    font-family: "TheScientist";
    font-size: 2em;
  }

  .NameDiv {
    max-width: 1000px;
    margin: auto;
  }
  .FirstName {
    color: var(--primary-text);
    font-family: "Lato-Hai";
    font-size: 4em;
    font-weight: 100;
  }

  .BoldName {
    color: var(--primary-text);
    font-family: "Lato-Lig";
    font-size: 4em;
    font-weight: 100;
  }

  .MainDescription {
    color: var(--primary-text);
    font-family: "Lato-Hai";
    font-size: 1.5em;
    font-weight: 100;
    margin: auto;
    max-width: 500px;
  }

  .ContentDiv {
    max-width: 1000px;
    margin: auto;
    display: flex;
    flex-wrap: wrap-reverse;
    justify-content: space-evenly;
  }

  .SectionDiv {
    max-width: 1000px;
    margin: auto;
    display: flex;
    margin-bottom: 50px;
    justify-content: start;
  }

  .SectionInnerDiv {
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    flex-grow: 1;
  }

  .Section {
    transform: rotate(180deg);
    writing-mode: vertical-rl;
    text-transform: uppercase;
    font-family: "Lato-Hai";
    font-size: 3em;
    color: var(--primary-text);
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
    color: var(--primary-text);
    font-family: "Lato-Bol";
    font-size: 1.5em;
    text-transform: uppercase;
  }
  .Description {
    font-family: "Raleway-Medium";
    font-size: 1.25em;
    text-transform: uppercase;

    color: var(--secondary-text);
  }
  .Location {
    color: var(--other-text);
    font-family: "Raleway-Medium";
    font-size: 1.25em;
  }

  .item {
    color: var(--primary-text);
    font-family: "Lato-Lig";
  }
  .boldd {
    color: var(--primary-text);

    font-family: "Lato-Lig";
  }

  .bolddd {
    color: var(--primary-text);
    font-family: "Lato-Reg";
  }
  .footer {
    margin-top: 75px;
    margin-bottom: 25px;
    font-size: 1.3em;
  }
  @media (min-width: 240px) {
    main {
      max-width: none;
    }
  }
</style>
