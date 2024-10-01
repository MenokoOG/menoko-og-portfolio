import React from "react";
import FakeTerminalWindow from "../components/about/FakeTerminalWindow";
import Prompt from "../components/about/Prompt";
import { skills } from "../../lib/constants";

// Define the type for the items in skills
type SkillItem = {
  name: string;
  icon: React.ComponentType | null;
};

const SkillList = ({ title, items }: { title: string; items: SkillItem[] }) => (
  <>
    <li className="text-primary font-semibold">{title}/</li>
    {items.map((item, index) => (
      <li key={index} className="flex items-center space-x-2">
        {item.icon && (
          <span className="text-2xl">{React.createElement(item.icon)}</span>
        )}
        <span>{item.name}</span>
      </li>
    ))}
  </>
);

const About = () => {
  return (
    <div className="space-y-10 my-10 break-words">
      {/* general bio */}
      <FakeTerminalWindow>
        <Prompt content="cd aboutLawrence/" />
        <Prompt directory="/aboutLawrence" branch content="cat README.md" />
        <p>
          Hello there! I&apos;m Lawrence Jefferson, aka Menoko OG - Original
          Geek!, a dev from Washington state, specializing in{" "}
          <b>
            Full Stack (front end, back end, and everything in between) Web
            Development in JavaScript and Python
          </b>
          . I&apos;ve been working as a developer on and off for about 10 years
          now, and I&apos;m currently focused on learning Progressive Web Apps
          (PWA).
        </p>
        <p>
          Outside of my coding life, I live in Clarkston, WA with a wonderful
          view of the Snake River and Hells Canyon Recreation area. I love the
          outdoors, I&apos;m a huge fan of hiking, camping, and collecting
          driftwood. I also enjoy reading, watching movies, and spending time
          with my family and cat Loki.
        </p>
      </FakeTerminalWindow>

      {/* skills & tools */}
      <FakeTerminalWindow>
        <Prompt content="cd skillsAndTools/Proficient" />
        <Prompt directory="/skillsAndTools/Proficient" branch content="ls" />
        <div className="flex justify-start flex-wrap md:justify-between">
          <ul>
            <SkillList title="TheObvious" items={skills.theObvious} />
            <SkillList title="ToolsOfTheTrade" items={skills.toolsOfTheTrade} />
          </ul>
          <ul className="md:text-right">
            <SkillList
              title="LibrariesAndFrameworks"
              items={skills.librariesFrameworks}
            />
          </ul>
        </div>
      </FakeTerminalWindow>

      {/* hobbies / interests */}
      <FakeTerminalWindow>
        <Prompt content="cd HobbiesAndInterests/" />
        <Prompt directory="/HobbiesAndInterests" branch content="ls" />
        <ul>
          <li>📖 reading</li>
          <li>🎬 movies</li>
          <li>🏞️ hiking and camping</li>
          <li>🌊 collecting driftwood</li>
          <li>🐱 spending time with my cat</li>
          <li>☕ coffee</li>
        </ul>
      </FakeTerminalWindow>
    </div>
  );
};

export default About;
