import amazon from "./assets/amazon.svg";
import spit from "./assets/spit.png";
import quidich from "./assets/quidich.jpg";
import squark from "./assets/squark.jpeg";
import lynx from "./assets/lynx.png";
import portfolio from "./assets/portfolio.png";
import itms from "./assets/itms.png";
import bscan from "./assets/bscan.jpeg";
import issueTracker from "./assets/issue-tracker.png";

export const techStack = [
  { name: "Python", color: "blue", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg"},
  { name: "Java", color: "orange", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg"},
  { name: "C", color: "gold", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"},
  { name: "C++", color: "red", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"},
  { name: "Javascript", color: "purple", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"},
  { name: "Typescript", color: "green", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"},
  { name: "Ruby", color: "crimson", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-plain-wordmark.svg"},
  { name: "Dart", color: "steel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg"},
  { name: "HTML", color: "pink", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"},
  { name: "CSS", color: "rebecca", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"},
  { name: "R", color: "blue", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg"},
  { name: "MATLAB", color: "orange", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg"},
  { name: "C#", color: "gold", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"},
  { name: "Gradle", color: "red", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gradle/gradle-plain.svg"},
  { name: "Jquery", color: "purple", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original-wordmark.svg"},
  { name: "MySQL", color: "crimson", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"},
  { name: "SQLite", color: "steel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg"},
  { name: "PostgreSQL", color: "pink", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg"},
  { name: "MongoDB", color: "rebecca", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"},
  { name: "Latex", color: "blue", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/latex/latex-original.svg"},
  { name: "Markdown", color: "orange", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg"},
  { name: "AWS", color: "gold", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg"},
  { name: "GCP", color: "red", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original-wordmark.svg"},
  { name: "MaterialUI", color: "purple", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"},
  { name: "Firebase", color: "green", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg"},
  { name: "Numpy", color: "crimson", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg"},
  { name: "Pandas", color: "steel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original-wordmark.svg"},
  { name: "Microsoft SQL Server", color: "pink", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain-wordmark.svg"},
  { name: "Tensorflow", color: "rebecca", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg"},
  { name: "Pytorch", color: "blue", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg"},
  { name: "OpenCV", color: "orange", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original-wordmark.svg"},
  { name: "ExpressJS", color: "gold", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"},
  { name: "NodeJS", color: "red", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"},
  { name: "React", color: "purple", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"},
  { name: "NextJS", color: "green", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"},
  { name: "GraphQL", color: "crimson", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain-wordmark.svg"},
  { name: "AngularJS", color: "steel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"},
  { name: "Mocha", color: "pink", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg"},
  { name: "Spring", color: "rebecca", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original-wordmark.svg"},
  { name: "Django", color: "blue", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg"},
  { name: "Flask", color: "orange", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg"},
  { name: "Flutter", color: "gold", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"},
  { name: "ESLint", color: "red", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg"},
  { name: "Android", color: "purple", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original-wordmark.svg"},
  { name: "NestJS", color: "green", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg"},
  { name: "GitHub", color:"crimson", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" },
  { name: "GitLab", color:"steel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original-wordmark.svg" },
  { name: "Bootstrap", color: "blue", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg"},
  { name: "OracleSQL", color: "orange", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg"},
  { name: "Linux", color: "gold", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"},
  { name: "npm", color: "red", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"},
  { name: "putty", color: "purple", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/putty/putty-original.svg"},
  { name: "Raspberrypi", color: "green", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg"},
  { name: "Redux", color: "crimson", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"},
  { name: "Salesforce", color: "steel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg"},
  { name: "ssh", color: "pink", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ssh/ssh-original.svg"},
  { name: "Blender", color: "rebecca", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg"},
  { name: "Arduino", color: "blue", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original-wordmark.svg"},
  { name: "Postman", color: "orange", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"},
  { name: "Tailwind CSS", color: "gold", icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"},
  { name: "Heroku", color:"red", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain.svg" },
  { name: "Netlify", color: "purple", icon: "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg"},


  // { name: "", color: "blue", icon: ""},
  // { name: "", color: "orange", icon: ""},
  // { name: "", color: "gold", icon: ""},
  // { name: "", color: "red", icon: ""},
  // { name: "", color: "purple", icon: ""},
  // { name: "", color: "green", icon: ""},
  // { name: "", color: "crimson", icon: ""},
  // { name: "", color: "steel", icon: ""},
  // { name: "", color: "pink", icon: ""},
  // { name: "", color: "rebecca", icon: ""},
]


export const contactLinks = [
  { name: 'Github', url: 'https://img.icons8.com/doodle/40/000000/github--v1.png', link :'https://github.com/YashK1299'},
  { name: 'LinkedIn', url: 'https://img.icons8.com/doodle/40/000000/linkedin--v2.png', link: 'https://www.linkedin.com/in/yash-kothari1'},
  { name: 'Mail', url: 'https://img.icons8.com/doodle/48/null/apple-mail.png', link: 'mailto:kothariwork@gmail.com'},
  { name: 'Instagram', url: 'https://img.icons8.com/doodle/40/000000/instagram-new--v2.png', link: 'https://ig.me/m/yashk_' },
]


export const gigs = [
  {
    name: 'Intelligent Traffic Management System',
    desc: `A project as an attempt to manage traffic in a city using modern Computer Vision, 
    IoT and Machine Learning Technologies, and Traffic Engineering. Leveraging the power of 
    open source technologies like OpenCV, Yolo, Tkinter, Python, etc.`,
    img: itms,
    link: "https://github.com/YashK1299/Intelligent_Traffic_Management_System",
  },
  {
    name: 'My Personal Website',
    desc: `A website built leveraging my non existent creative skills along with my coding 
    skills to showcase my work so that I can confidently call my self a Software Developer.`,
    img: portfolio,
    link: "https://github.com/YashK1299/portfolio",
  },
  {
    name: 'BScan',
    desc: `Graphic design is a craft where professionals create visual
    content to communicate messages. By applying visual hierarchy and
    page layout techniques, designers use typography and pictures to
    meet users' specific needs and focus on the logic of displaying
    elements in interactive designs, to optimize the user experience.`,
    img: bscan,
    link: "https://github.com/YashK1299/BScan",
  },
  {
    name: 'Issue Tracker',
    desc: `This is a full-stack web application that allows users to track and manage issues. 
    It is built using the MERN stack and features user authentication and authorization, CRUD operations, 
    and a RESTful API. It also employs various design patterns, such as container/presentation 
    components, and uses Redux for state management.`,
    img: issueTracker,
    link: "https://github.com/YashK1299/tracker-ui",
  },
]


export const work = [
  {
    name: 'Lynx',
    title: 'Tech Lead',
    desc: `Leading the tech team of a social platform to help groups of people connect 
    and have fun together. It is a platform where people can
    create groups and invite their friends to join them.`,
    img: lynx,
    time: "Jan 2023 – Present",
  },
  {
    name: 'Amazon',
    title: 'Software Dev Engineer',
    desc: `I worked as a Software Dev Engineer in the Supply Chain Optimization 
    Technologies. My work involved the development of AWS CDK-based infra, 
    creating CDK packages and CI/CD pipelines using monocdk and cdk-lib, which greatly 
    improved infrastructure provisioning and deployment efficiency.`,
    img: amazon,
    time: "Sept 2022 – Mar 2023",
  },
  {
    name: 'Google',
    title: 'Software Engineering Intern',
    desc: `I interned with the Google Maps team as a Software Engineering Intern,
    contributing a new POI-Hotels feature for Android Google Maps Mobile (aGMM), 
    providing users with insights based on their current location.`,
    img: "https://img.icons8.com/plasticine/100/null/google-maps.png",
    time: "June 2022 – Sept 2022",
  },
  {
    name: 'Squark/Northeastern University',
    title: 'Graduate Research Assistant',
    desc: `My work at Squak.ai as a Graduate Research Assistant aimed at creating an AutoML 
    pipeline that can process any structured timeseries dataset with no/minimal human intervention,
    using algorithms designed by the team and developing APIs to make the pipeline accessible using
    their web app.`,
    img: squark,
    time: "June 2021 – May 2022",
  },
  {
    name: 'Northeastern University',
    title: 'Master of Science in Computer Science Student',
    desc: `My education at NEU gave me the much needed confidence in my Computer Science skills and 
    helped me develop a strong foundation in the field. It helped open up a lot of opportunities for 
    me and make me capable enough to take advantage these opportunities. Here I have taken up courses like:
    Algorithms, DBMS, Web Dev(MERN Stack), Program Design Paradigm, Foundations of Software Engineering`,
    img: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Northeastern_Huskies_.svg",
    time: "Jan 2021 – May 2022",
  },
  {
    name: 'Quidich Innovation Labs',
    title: 'Python Developer Intern',
    desc: `Graphic design is a craft where professionals create visual
    content to communicate messages. By applying visual hierarchy and
    page layout techniques, designers use typography and pictures to
    meet users' specific needs and focus on the logic of displaying
    elements in interactive designs, to optimize the user experience.`,
    img: quidich,
    time: "June 2019 – July 2019",
  },
  {
    name: 'Sardar Patel Institute of Technology',
    title: `Bachelor's of Engineering in Electronics and Telecommunications`,
    desc: `My education at SPIT set my strong base as an Engineer and helped me develop a strong foundation in the field.
    It introduced me to the C programming Language that I used to develop my first ever project, a simple hand cricket game.
    This project further motivated me to teach myself Java and Python, which I further used to develop my other projects.
    Here I have taken up courses like: Structured Programming Approach (C), Object Oriented Design (Java), Data-Structures, 
    ML and AI, Cloud computing`,
    img: spit,
    time: "August 2016 – Sept 2020",
  },
]
