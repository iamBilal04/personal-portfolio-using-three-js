import {
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    threejs,
    CPP,
    python,
    HSC,
    MU,
    Tofo,
    skifree,
    image_not_found
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "UI/UX Designer",
      icon: figma,
    },
    {
      title: "Bug bounty Hunter",
      icon: mongodb,
    },
    {
      title: "Cyber Security Researcher",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "CPP",
      icon: CPP,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "python",
      icon: python,
    },
  ];
  
  const experiences = [
    {
      title: "Maharashtra State Board of Secondary Education",
      company_name: "SSC",
      icon: HSC,
      iconBg: "#E6DEDD",
      date: "June 2018 -  March 2019",
      points: [
        "Passed out with distinction marks i.e 79% in my High School from Maharashtra State Board of Secondary Education"
      ],
    },
    { 
      title: "Maharashtra State Board of Higher Education",
      company_name: "HSC",
      icon: HSC,
      iconBg: "#383E56",
      date: "May 2019 - March 2021",
      points: [
        "During my junior college, I passed my first year with distinction",
        "Passed out with distinction marks i.e 82% in my Junior College from Maharashtra State Board of Higher Education"
      ],
    },
    {
      title: "Bachelor of Engineering",
      company_name: "BE",
      icon: MU,
      iconBg: "#E6DEDD",
      date: "Dec 2021 - 2025",
      points: [
        "I have completed my computer engineering from Mumbai University",
        "I am currently in my final year and have completed my 6th semester with a CGPA of 8.5",
      ],
    },
  ];
    
  const projects = [
    {
      name: "Todo List",
      description:
        "Web-based Todo List with editable task",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: Tofo,
      source_code_link: "https://github.com/iamBilal04/Aesthetic-Todo-List-using-React",
    },
    {
      name: "Mini Ski-Free",
      description:
        "A simple Web Game called Ski Free from 1991 made in javaScript using Kaboom.JS",
      tags: [
        {
          name: "kaboom.js",
          color: "green-text-gradient",
        },
      ],
      image: skifree,
      source_code_link: "https://github.com/iamBilal04/Ski-free-using-kaboom.JS",
    },
    {
      name: "CSV file handling in C",
      description:
        "This project is just a basic CSV file handling with error logs. Since C doesn't have a inbuilt function to handle CSV files and I was learning about File pointers (this was in June of 2022) I saw this as a good opportunity to experiment with the file pointers.",
      tags: [
        {
          name: "CPP",
          color: "pink-text-gradient",
        },
      ],
      image: image_not_found,
      source_code_link: "https://github.com/iamBilal04/CSV-file-handling-in-C",
    },
  ];
  
  export { services, technologies, experiences, projects };