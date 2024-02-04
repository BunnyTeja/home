// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Sai Teja",
  middleName: "",
  lastName: "Paladi",
  message: "",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/BunnyTeja",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/sai-teja-paladi-52a062140/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/profile_pic.jpg"),
  imageSize: 375,
  message:
    "I'm Sai Teja Palad, a 2023 graduate from the University of South Carolina with a master's degree in Computer and Information Sciences. Passionate about application development, machine learning, and AI, I actively pursue my interests through projects, coursework, and problem-solving on platforms like LeetCode. My goal is to leverage my skills in software engineering to develop innovative solutions that make a positive impact. I'm eager to collaborate with like-minded professionals and stay updated on emerging technologies.",
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "BunnyTeja", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    {
      img: require("../editable-stuff/profile_pic.jpg"),
      label: "First slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      img: require("../editable-stuff/profile_pic.jpg"),
      label: "Second slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
  ],
  imageSize: {
    width: "615",
    height: "450",
  },
};


// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "SQL", value: 85 },
    { name: "Data Structures", value: 85 },
    { name: "C", value: 70 },
    { name: "Apex", value: 65 },
    { name: "JavaScript", value: 65 },
    { name: "HTML5/CSS3", value: 70 },
    { name: "React.js", value: 65 },
    { name: "Django", value: 70 },
    { name: "Flask", value: 60 },
  ],
  softSkills: [
    { name: "Git", value: 75 },
    { name: "Github", value: 80 },
    { name: "Apache Tomcat", value: 75 },
    { name: "FileZilla", value: 75 },
    { name: "GitHub Pages", value: 70 },
    { name: "RESTful API", value: 60 },
    { name: "Swagger API documentation", value: 75 },
    { name: "Postman", value: 70 },
    { name: "Jira", value: 70 },
    { name: "Agile", value: 75 },
    { name: "Tableau", value: 70 },
    { name: "Machine Learning", value: 40 },
    { name: "AI", value: 40 },
    
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering or Machine Learning opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "saiteja.khf63@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      div: "Artificial Intelligence Institute at University of South Carolina",
      role: 'Research Assistant',// Here Add Company Name
      companylogo: require('../assets/img/aiisc_logo.png'),
      date: 'Jan 2021 – Jun 2023',
    },
    {
      div: "Accenture, Client - Google ",
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/google_logo.png'),
      date: 'Jan 2020 – Jun 2021',
    },
    {
      div: "Accenture",
      role: 'Associate Software Engineer',
      companylogo: require('../assets/img/acc_logo.png'),
      date: 'Nov 2018 – Dec 2019',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
