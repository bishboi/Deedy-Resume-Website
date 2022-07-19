var ghpages = require("gh-pages");

ghpages.publish(
  "public", // path to public directory
  {
    branch: "gh-pages",
    repo: "https://github.com/bishboi/Deedy-Resume-Website.git", // Update to point to your repository
    user: {
      name: "Nikhil Bishnoi", // update to use your name
      email: "nikhilbish@gmail.com", // Update to use your email
    },
  },
  () => {
    console.log("Deploy Complete!");
  }
);
