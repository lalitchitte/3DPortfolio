import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  sql,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  react,
  git,
  net,
  sqlserver,
  company,
  intern,
  carrent,
  jobit,
  tripguide,
  blog,
  threejs,
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
    title: "React Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: ".NET Backend Developer",
    icon: backend,
  },
  {
    title: "Blazor Developer",
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "React Native",
    icon: react,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "MySQL",
    icon: sql,
  },
  {
    name: ".NET",
    icon: net,
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
    name: "SQL Server",
    icon: sqlserver,
  },
];

const experiences = [
  {
    title: "Web Developer Intern",
    company_name: "Arthadisha Consultancy Pvt. Ltd.",
    icon: intern,
    iconBg: "#FFF",
    date: "Feb 2023 - July 2023",
    points: [
      "Developing and maintaining web applications using HTML, CSS, Javascript, Angular and other technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Wind Hans Technologies",
    icon: company,
    iconBg: "#FFF",
    date: "Aug 2023 - Aug 2024",
    points: [
      "Developing and maintaining mobile applications using React Native and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing buttery smooth UI and ensuring multi-device compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: ".NET Developer",
    company_name: "Wind Hans Technologies",
    icon: company,
    iconBg: "#FFF",
    date: "Sep 2024 - Current",
    points: [
      "Developing and maintaining web applications using blazor framework and other .NET technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Rooms 91 Hotel App",
    description:
      "Mobile-based application that allows users to search, book, and manage hotel rooms from various hotel managements, providing a convenient and efficient solution for customers needs.",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/lalitchitte/room91-lalit",
  },
  {
    name: "Coaching App",
    description:
      "Mobile application that enables users to search various online courses. users can buy that courses and watch the course videos anytime.",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/lalitchitte/santoshgare",
  },
  {
    name: "SRGaushala App",
    description:
      "A gaushala web application where user can see their services, blogs, events, manage integrated gallery and members. it is cross browser compitability application.",
    tags: [
      {
        name: "blazor",
        color: "blue-text-gradient",
      },
      {
        name: ".net",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "restapi",
        color: "orange-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://srgfoundations.com",
  },
  {
    name: "Blazing Blog App",
    description:
      "A cross browser blog application where user can see the popular and latest blogs with detailed view.",
    tags: [
      {
        name: "blazor-server",
        color: "blue-text-gradient",
      },
      {
        name: ".net",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: blog,
    source_code_link: "https://github.com/lalitchitte/BlazingBlog",
  },
];

export { services, technologies, experiences, testimonials, projects };
