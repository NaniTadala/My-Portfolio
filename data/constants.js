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
    "https://drive.google.com/file/d/1GTzZCybhAeQPKF1uJuK5IZPIj9AhosBK/view?usp=sharing",
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
    title: "Portfolio Website",
    date: "Oct 2023 - Oct 2023",
    description:
      "Explore my personal portfolio website to discover more about me, my skills, and my passion for creativity. This platform showcases a curated selection of my projects, giving you a glimpse into my journey as a web developer. You'll find information about my background, the technologies I work with, and links to my social profiles. This website is a reflection of my dedication to crafting digital experiences and sharing my work with the world.",
    image:
      "/portfolio.png",
    tags: [
      "NextJS",
      "ReactJS",
      "Typescript",
      "NextUI",
    ],
    category: "web app",
    github: "https://github.com/NaniTadala/My-Portfolio",
  },
  {
    id: 2,
    title: "Promptverse",
    date: "Sep 2023 - Oct 2023",
    description:
      "Promptverse is an innovative platform that empowers users to explore, create, and share prompt to generate captivating images by AI tools like midjourney. It's your canvas for artistic expression in the digital age! With Promptverse, you have the power to experiment and bring your artistic visions to life effortlessly. It provides a wide array of images of generative AI prompts, enabling you to seamlessly generate stunning, one-of-a-kind images with just a click.",
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
    github: "https://github.com/NaniTadala/Promptverse",
  },
  {
    id: 3,
    title: "Course Selling App",
    date: "Jul 2023 - Aug 2023",
    description:
      `Developed a full-stack web application "LearnUp" app, a platform with two clients __
      1️⃣ Admins can effortlessly log in or create a new account for access.
      They have the power to Create, Update, and Delete courses with ease.
      2️⃣ Users can also log in or create their accounts seamlessly.
      They can explore and purchase courses that align with their interests and goals.`,
    image:
      "/learnup.png",
    tags: ["React Js", "MongoDb", "Node Js", "Express Js", "Recoil"],
    category: "web app",
    github: "https://github.com/NaniTadala/Course-Selling-App-MERN",
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
    desc: `I have done my Bachelors in
    Civil Engineering at Aditya Engineering College,
    Surampalem. 
    I have an overall CGPA of 8.62. With my interest
    in tech I have learnt web development and want to
    pursue a career in it.`
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
