import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDisplay } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import Image from "next/image";

type Project = {
  id: number;
  title: string;
  img: string;
  description: string;
  stacks: string[];
  live: string;
  gitHub: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Vast AI Gang Dashboard Application",
    img: "/mockups/vastaigang.png",
    description:
      "As part of an Agile team working with Vast AI Gang LLC and V School, I contributed to developing a dashboard application for hosts renting out their machines on Vast AI. My responsibilities included creating features, refactoring code, and ensuring seamless integration between the frontend and backend. The application provided a user-friendly interface for monitoring machine metrics, configuring notification settings, and generating reports. The project is a private repository of Vast AI Gang LLC.",
    stacks: [
      "HTML",
      "Tailwind CSS",
      "React.js",
      "JavaScript",
      "TypeScript",
      "Redux",
      "NxDev Monorepo",
      "Nest.js",
      "Firebase",
      "Chart.js",
      "React-chartjs-2",
      "Axios",
      "Tailwind UI",
    ],
    live: "",
    gitHub: "",
  },
  {
    id: 2,
    title: "Python & React App",
    img: "/mockups/python-scfi.png",
    description:
      "The backend is built with FastAPI and MongoDB Atlas, while the frontend uses React, Vite, TypeScript, and Tailwind CSS. Welcome to the Sci-Fi Themed CRUD Application! This app lets you manage characters in a sci-fi universe. You can create, read, update, and delete characters. Note: Sorry !!! This takes about two minutes to spin up on free tier of render deployment.",
    stacks: [
      "HTML",
      "Tailwind CSS",
      "React.js",
      "TypeScript",
      "MongoDB Atlas",
      "Python FastAPI",
      "Vite",
    ],
    live: "https://sci-fi-app-frontend.onrender.com",
    gitHub: "https://github.com/MenokoOG/sci-fi-app",
  },
  {
    id: 3,
    title: "LuxGirl OG - Original Geek! Website",
    img: "/mockups/Screenshot 2024-06-01 132640.png",
    description:
      "Portfolio website for a digital artist LuxGirl OG - Original Geek!, showcasing her works. The project also uses a custom function to populate and import images to the gallery automatically from an image directory where the images are stored. The website is fully responsive and interactive, built with the latest in web technology, and is fully responsive.",
    stacks: ["HTML", "Tailwind CSS", "JavaScript", "React", "Firebase", "Vite"],
    live: "https://luxgirlog.netlify.app/",
    gitHub: "https://github.com/MenokoOG/luxgirl-portfolio",
  },
  {
    id: 4,
    title: "Grocery List App",
    img: "/mockups/grocery.png",
    description:
      "Grocery list application I developed for my daughter. It has full CRUD operations and is an alternative to a full stack application with programmed back-end by leveraging Firebase. It is fully responsive and interactive.",
    stacks: [
      "HTML",
      "Tailwind CSS",
      "JavaScript",
      "Firebase",
      "Vite",
      "React",
      "Material-UI",
    ],
    live: "",
    gitHub: "https://github.com/MenokoOG/luxgirl-grocery-app",
  },
  {
    id: 5,
    title: "MERN Stack Helper 2.0",
    img: "/mockups/Screenshot 2024-03-27 163015.png",
    description:
      "This application is a full stack application with authentication. It uses HTML, CSS, JavaScript, MongoDB, Express.js, React + Vite, and Node.js. This application demonstrates complex routing, multiple theme options, and user-specific CRUD operations with custom API. MERN Stack Helper, our primary aim is to support fellow students in their journey through the Full Stack Web Development course.",
    stacks: [
      "Node.js",
      "Express.js",
      "JavaScript",
      "MongoDB",
      "Mongoose",
      "Bcrypt",
      "JWT",
      "Vite",
      "Morgan",
      "React",
      "Axios",
      "react-router-dom",
    ],
    live: "https://mern-stack-helper-2-0.onrender.com",
    gitHub: "https://github.com/MenokoOG/mern_stack_help_2",
  },
  {
    id: 6,
    title: "FizzBuzz React",
    img: "/mockups/fizzBuzz.png",
    description:
      "This is a fun and interactive FizzBuzz game built with React and Tailwind CSS. The application allows users to select a range using a slider or input a number directly to generate the FizzBuzz sequence. The cards representing the sequence are styled with cool effects and animations to make the experience more engaging. I am in process of adding more features to this project and making it mobile first.",
    stacks: ["React.js", "Tailwind CSS", "JavaScript", "Vite"],
    live: "https://fizzbuzzreact.netlify.app/",
    gitHub: "https://github.com/MenokoOG/fizzbuzz-react",
  },
  {
    id: 7,
    title: "JavaScript Back-end and Python Front-end",
    img: "/mockups/random_dog.png",
    description:
      "This is a simple project that combines a JavaScript backend using Express and a Python frontend using Flask. It fetches random dog images from the Dog CEO API and displays them with a nice Tailwind CSS style.",
    stacks: ["Node.js", "Express.js", "CSS", "HTML", "Python Flask"],
    live: "",
    gitHub: "https://github.com/MenokoOG/js-py",
  },
  {
    id: 8,
    title: "My 2010-2013 Web Projects",
    img: "/mockups/Screenshot 2024-03-17 115744.png",
    description:
      "Web projects I developed between 2010 and 2013. The projects are a mix of HTML, CSS, JavaScript, and Adobe Master Collections. They include a personal portfolio, my old military blog site, a news site, a couple one page landing sites, and a website for a motor cycle club. The projects are fully responsive and interactive.",
    stacks: [
      "HTML",
      "CSS",
      "JavaScript",
      "Adobe Master Collection",
      "Dreamweaver",
      "Photoshop",
      "Illustrator",
    ],
    live: "https://menokoog.github.io/Past-Web-Projects-for-Clients/",
    gitHub: "https://github.com/MenokoOG/Past-Web-Projects-for-Clients",
  },
  {
    id: 9,
    title: "ToDo App in Nx Dev Monorepo",
    img: "/mockups/nx_todo.png",
    description:
      "Full Stack todo CRUD app built in Nx Dev monorepo, Nest.js, React, Typescript, and MongoDB.",
    stacks: [
      "React",
      "HTML",
      "Tailwind CSS",
      "Typescript",
      "Nest.js",
      "MongoDB",
    ],
    live: "",
    gitHub: "https://github.com/MenokoOG/todo-app",
  },
];

const Portfolio = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold text-center mb-10 text-blue-600 dark:text-white">
        Featured Works
      </h1>
      <div className="flex flex-wrap justify-center">
        {projects.map((project) => (
          <div key={project.id} className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8">
            <div className="card bg-base-100 shadow-xl">
              <figure>
                <Image
                  src={project.img}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-blue-600  dark:text-blue-400">
                  {project.title}
                </h2>
                <p>{project.description}</p>
                <div className="flex flex-wrap mb-4">
                  {project.stacks.map((stack, index) => (
                    <span key={index} className="badge badge-outline mr-2 mb-2">
                      {stack}
                    </span>
                  ))}
                </div>
                <div className="card-actions justify-between">
                  {project.live ? (
                    <Link
                      href={project.live}
                      target="_blank"
                      className="btn bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg flex items-center space-x-2"
                    >
                      <FontAwesomeIcon icon={faDisplay} /> Live
                    </Link>
                  ) : (
                    <span className="btn bg-gray-400 text-white py-2 px-4 rounded-lg cursor-not-allowed">
                      Live Unavailable
                    </span>
                  )}
                  {project.gitHub ? (
                    <Link
                      href={project.gitHub}
                      target="_blank"
                      className="btn bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg flex items-center space-x-2"
                    >
                      <FontAwesomeIcon icon={faGithub} /> Code
                    </Link>
                  ) : (
                    <span className="btn bg-gray-400 text-white py-2 px-4 rounded-lg cursor-not-allowed">
                      GitHub Unavailable
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
