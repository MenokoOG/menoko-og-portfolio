import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiMongodb,
  SiFirebase,
  SiTailwindcss,
  SiJest,
  SiRedux,
  SiDjango,
  SiFlask,
  SiFastapi,
  SiPostman,
} from "react-icons/si";

// Updated to remove JSX and use the icon variables directly
export const skills = {
  theObvious: [
    { name: "HTML", icon: FaHtml5 },
    { name: "CSS", icon: FaCss3Alt },
    { name: "JavaScript", icon: FaJs },
    { name: "Python", icon: FaPython },
    { name: "SQL", icon: null },
    { name: "MongoDB", icon: SiMongodb },
    { name: "Firebase", icon: SiFirebase },
    { name: "Design Systems", icon: null },
    { name: "Responsive Design", icon: null },
    { name: "SEO", icon: null },
    { name: "Adobe Creative Suite", icon: null },
    { name: "Figma", icon: null },
  ],
  librariesFrameworks: [
    { name: "React 18 & 19", icon: FaReact },
    { name: "NextJS", icon: null },
    { name: "Tailwind", icon: SiTailwindcss },
    { name: "Jest", icon: SiJest },
    { name: "Redux", icon: SiRedux },
    { name: "Django", icon: SiDjango },
    { name: "Flask", icon: SiFlask },
    { name: "FastAPI", icon: SiFastapi },
    { name: "Express", icon: FaNodeJs },
    { name: "NodeJS", icon: FaNodeJs },
  ],
  toolsOfTheTrade: [
    { name: "Git & Version Control", icon: FaGitAlt },
    { name: "Postman", icon: SiPostman },
    { name: "npm / yarn", icon: null },
    { name: "Vite", icon: null },
    { name: "VS Code", icon: null },
  ],
};
