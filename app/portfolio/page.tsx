// app/portfolio/page.tsx

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDisplay } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

interface Project {
  id: number;
  title: string;
  img: string;
  description: string;
  stacks: string[];
  live?: string;
  gitHub?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "GunKustom API",
    img: "/mockups/gunkustom.png",
    description:
      "As Co-Founder & CTO, I architected and built the GunKustom API—a modular, scalable, and secure backend for firearm customization. Features include part management, custom builds, and vendor integrations using NestJS, MongoDB, Passport.js, Google OAuth, JWT, and Swagger.",
    stacks: [
      "NestJS",
      "MongoDB",
      "Passport.js",
      "Google OAuth",
      "JWT",
      "Jest",
      "Swagger",
      "TypeScript",
      "Render",
    ],
    live: "https://gunkustom.com/",
    gitHub: "https://github.com/MenokoOG/gunkustom-api",
  },
  {
    id: 2,
    title: "Powalert",
    img: "/powalert.jpg",
    description:
      "I built and maintain the Powalert backend server powering https://powalert.com—a real-time monitoring and alert platform. The server aggregates data streams, applies threshold-based rules, and issues push notifications via SMS, email, and webhooks. Tech stack: Node.js, GraphQL, Redis pub/sub, MongoDB, TypeScript, Docker, and AWS Lambda for scalability.",
    stacks: [
      "Node.js",
      "GraphQL",
      "Redis",
      "MongoDB",
      "TypeScript",
      "Docker",
      "AWS Lambda",
      "Twilio",
      "Jest",
    ],
    live: "https://powalert.com",
    gitHub: "https://github.com/MenokoOG/powalert-backend",
  },
  {
    id: 3,
    title: "LuxGirl OG Portfolio",
    img: "/mockups/Screenshot 2024-06-01 132640.png",
    description:
      "Portfolio site for digital artist LuxGirl OG—built with React, Vite, Tailwind CSS, and Firebase/Firestore. Includes a dynamic gallery loader for effortless asset updates.",
    stacks: ["React", "Vite", "Tailwind CSS", "Firebase", "TypeScript"],
    live: "https://luxgirlog.netlify.app/",
    gitHub: "https://github.com/MenokoOG/luxgirl-portfolio",
  },
  {
    id: 4,
    title: "Grocery List App",
    img: "/mockups/grocery.png",
    description:
      "Responsive CRUD grocery app for a private client—built in React + Firebase with Material-UI components and real-time data sync.",
    stacks: ["React", "Firebase", "Material-UI", "Tailwind CSS", "TypeScript"],
    gitHub: "https://github.com/MenokoOG/luxgirl-grocery-app",
  },
];

const PortfolioPage: React.FC = () => {
  return (
    <main className="container mx-auto py-10">
      <h1 className="text-4xl font-bold text-center mb-6 text-blue-600 dark:text-white">
        Featured CTO Projects
      </h1>
      <p className="text-center text-lg mb-8">
        My core professional work as CTO of GunKustom and creator of Powalert.
      </p>

      <div className="flex flex-wrap justify-center gap-8">
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
                <h2 className="card-title text-blue-600 dark:text-blue-400">
                  {project.title}
                </h2>
                <p>{project.description}</p>
                <div className="flex flex-wrap mb-4">
                  {project.stacks.map((stack, idx) => (
                    <span key={idx} className="badge badge-outline mr-2 mb-2">
                      {stack}
                    </span>
                  ))}
                </div>
                <div className="card-actions justify-between">
                  {project.live ? (
                    <Link
                      href={project.live}
                      target="_blank"
                      className="btn bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded-lg flex items-center space-x-2"
                    >
                      <FontAwesomeIcon icon={faDisplay} />
                      <span>Live</span>
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
                      className="btn bg-green-600 hover:bg-green-700 py-2 px-4 rounded-lg flex items-center space-x-2"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                      <span>Code</span>
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
    </main>
  );
};

export default PortfolioPage;
