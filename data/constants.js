export const Bio = {
  name: "Narayana Swamy",
  roles: [
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Programmer",
  ],
  description:
    "I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",
  github: "https://github.com/NaniTadala",
  resume:
    "https://drive.google.com/file/d/1ffZrcMcn8UatXGIaautbbqpV7ADNaETA/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/narayana-swamy-tadala-3a233b19b/",
  twitter: "https://twitter.com/nani_tadala",
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "ReactJS",
        image:
          "/skills/react-2.svg",
      },
      {
        name: "NextJS",
        image:
          "/skills/next-js.svg",
      },
      {
        name: "HTML",
        image: "/skills/html.svg",
      },
      {
        name: "CSS",
        image:
          "/skills/css-3.svg",
      },
      {
        name: "JavaScript",
        image:
          "/skills/javascript.svg",
      },
      {
        name: "Tailwind CSS",
        image:
          "/skills/tailwind-css-2.svg",
      },

    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "NodeJS",
        image: "/skills/nodejs-icon.svg",
      },
      {
        name: "ExpressJS",
        image: "/skills/expressjs.svg"
      },
      {
        name: "MongoDB",
        image: "/skills/mongodb-icon.svg"
      },

    ],
  },
  {
    title: "Other",
    skills: [
      {
        name: "TypeScript",
        image: "/skills/typescript.svg",
      },
      {
        name: "Git",
        image: "/skills/git-icon.svg"
      },
      {
        name: "Github",
        image: "/skills/github-icon-1.svg"
      },
      {
        name: "Postman",
        image: "/skills/postman.svg"
      },
      {
        name: "VS Code",
        image: "/skills/visual-studio-code-1.svg"
      },

    ],
  }
];

export const projectsTab = [
  {
    id: "all",
    label: "All",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    id: "frontend",
    label: "Frontend",
    content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    id: "backend",
    label: "Backend",
    content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }
];


export const projectsCard = [
  {
    id: 1,
    title: "Promptverse",
    date: "Jun 2023 - Jul 2023",
    description:
      "Trackify is a web application designed to streamline task management and enhance productivity in the workplace. It provides a user-friendly interface for employers to keep track of their employees' daily work activities and empowers employees to log their tasks efficiently.",
    image:
      "/promptverse.png",
    tags: [
      "NextJS",
      "ReactJS",
      "Eslint",
      "Uploadthing",
      "MongoDb",
      "formik",
      "JoyUI",
      "NextAuth",
    ],
    category: "web app",
    github: "https://github.com/rishavchanda/Trackify",
    webapp: "https://trackify.duckdns.org",
  },
  {
    id: 2,
    title: "Course Selling App",
    date: "Apr 2023 - May 2023",
    description:
      "Developed a full-stack web application that allows users to search for, play, and pause their favorite podcasts on demand and create podcasts. Implemented user authentication using Google Auth and Jwt Auth, made responsive user interface with React JS that provides users with a seamless experience across all devices. Practiced agile methodologies to optimize team efficiency and communication.",
    image:
      "/learnup.png",
    tags: ["React Js", "MongoDb", "Node Js", "Express Js", "Recoil"],
    category: "web app",
    github: "https://github.com/rishavchanda/Podstream",
    webapp: "https://podstream.netlify.app/",
    member: [
      {
        name: "Rishav Chanda",
        img: "https://avatars.githubusercontent.com/u/64485885?v=4",
        linkedin: "https://www.linkedin.com/in/rishav-chanda-b89a791b3/",
        github: "https://github.com/rishavchanda/",
      },
      {
        name: "Upasana Chaudhuri",
        img: "https://avatars.githubusercontent.com/u/100614635?v=4",
        linkedin: "https://www.linkedin.com/in/upasana-chaudhuri-2a2bb5231/",
        github: "https://github.com/upasana0710",
      },
    ],
  },
]

export const educationDetails = [
  {
    id: 1,
    image: "/aditya.png",
    college: "Aditya Engineering College",
    course: "Bachelor of Technology, Civil Engineering",
    timeline: "2020 - 2023",
    grade: "8.62",
    desc: `I have dome my Bachelors in
    Civil Engineering at Aditya Engineering College,
    Surampalem. 
    I have an overall CGPA of 8.62. I have taken
    courses in Data Structures, Algorithms,
    Object-Oriented Programming, Database
    Management Systems, Operating Systems, and
    Computer Networks, among others. I am also a
    member of the 100x devs club, where I am learning and
    working on exciting projects with a team of
    talented developers.`
  },
  {
    id: 2,
    image: "/apt.webp",
    college: "Andhra Polytechnic",
    course: "Diploma, Civil Engineering",
    timeline: "2017 - 2020",
    grade: "80%",
    desc: `I completed my diploma at Andhra Polytechnic, Kakinada, where I studied Civil Engineering.`
  },
  {
    id: 3,
    image: "/littlebuds.png",
    college: "Little Buds School",
    course: "10th Standard",
    timeline: "2017",
    grade: "9.5",
    desc: `I completed my class 10 education at Little Buds School, Kakinada, where I studied my 10th standard.`
  }
]