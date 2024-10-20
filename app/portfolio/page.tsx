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
    title: "1Kloc-Useful Apps in 1,000 lines of Code",
    img: "/mockups/working_on_1kloc.png",
    description:
      " I am creating and will be principle maintainer of the open source project 1Kloc. Welcome to the 1Kloc project! This is an open-source initiative to build useful apps under 1,000 lines of code. Explore, contribute, and showcase your coding skills! We are Under Construction and working on our Docs to get things going, so the docs link below is to our local dev server right now. Hopefully we will be deployed for tests and showcase within the week!!!",
    stacks: [
      "HTML",
      "Tailwind CSS",
      "JavaScript",
      "React",
      "React-Router-Dom",
      "Docusaurus",
      "Firebase",
      "Vite",
    ],
    live: "",
    gitHub: "https://github.com/1kloc-Useful-Apps-in-1-000-Lines",
  },
  {
    id: 2,
    title: "LuxGirl OG - Original Geek! Website",
    img: "/mockups/Screenshot 2024-06-01 132640.png",
    description:
      "Portfolio website for a digital artist LuxGirl OG - Original Geek!, showcasing her works. The project also uses a custom function to populate and import images to the gallery automatically from an image directory where the images are stored. The website is going through a redesign and will be updated soon.",
    stacks: ["HTML", "Tailwind CSS", "JavaScript", "React", "Firebase", "Vite"],
    live: "https://luxgirlog.netlify.app/",
    gitHub: "https://github.com/MenokoOG/luxgirl-portfolio",
  },
  {
    id: 3,
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
    id: 4,
    title: "MERN Stack Helper 2.0",
    img: "/mockups/Screenshot 2024-03-27 163015.png",
    description:
      "This application is a full stack application with authentication. It uses HTML, CSS, JavaScript, MongoDB, Express.js, React + Vite, and Node.js. My goal was to create a simple and easy-to-use application that helps developers quickly set up a MERN stack project with authentication. The application uses JWT for authentication and Bcrypt for password hashing.",
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
    id: 5,
    title: "My 2010-2013 Web Projects",
    img: "/mockups/Screenshot 2024-03-17 115744.png",
    description:
      "Web projects I developed between 2010 and 2013. The projects are a mix of HTML, CSS, JavaScript, and Adobe Master Collections. The projects were developed in Adobe Dreamweaver, Photoshop, and Illustrator. This was pre-React and pre-Node.js era so sites are not pretty or mobile first at all.They include a personal portfolio, my old military blog site, a news site, a couple one page landing sites, and a website for a motor cycle club. ",
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
    id: 6,
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
      "Nx Dev",
    ],
    live: "",
    gitHub: "https://github.com/MenokoOG/todo-app",
  },
];

const Portfolio = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold text-center mb-10 text-blue-600 dark:text-white">
        Featured Works{" "}
      </h1>
      <p className="text-sm">
        I am currently in process of revamping this page with more organization
        for my client projects, projects I have collaborated on, helped on, and
        then my mess around projects. I have a couple of projects here though
        for you to explore.
      </p>
      <br />

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
                      className="btn bg-blue-600 hover:bg-blue-700  py-2 px-4 rounded-lg flex items-center space-x-2"
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
                      className="btn bg-green-600 hover:bg-green-700  py-1 px-4 rounded-lg flex items-center space-x-2"
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
