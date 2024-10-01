import FakeTerminalWindow from "../components/about/FakeTerminalWindow";
import Prompt from "../components/about/Prompt";
import { skills } from "../../lib/constants";

const SkillList = ({ title, items }: { title: string; items: string[] }) => (
  <>
    <li className="text-primary font-semibold">{title}/</li>
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </>
);

const About = () => {
  return (
    <div className="space-y-10 my-10 break-words">
      {/* general bio */}
      <FakeTerminalWindow>
        <Prompt content="cd aboutLawrence/" />
        <Prompt
          directory="/aboutLawrence"
          branch={true}
          content="cat README.md"
        />
        <p>
          Hello there! I'm Lawrence Jefferson, aka Menoko OG - Original Geek! ,
          a dev from Washington state, specializing in{" "}
          <b>
            Full Stack (front end, back end, and everything in between) Web
            Development in JavaScript and Python
          </b>
          . I've been working as a developer on and off for about 10 years now,
          and I'm currently focused on learning Progressive Web Apps (PWA).
        </p>
        <p>
          Outside of my coding life, I live in Clarkston, WA with a wonderful
          view of the Snake River and Hells Canyon Recreation area. I love the
          outdoors, I'm a huge fan of hiking, camping, and collecting driftwood.
          I also enjoy reading, watching movies, and spending time with my
          family and cat Loki.
        </p>
      </FakeTerminalWindow>

      {/* skills & tools */}
      <FakeTerminalWindow>
        <Prompt content="cd skillsAndTools/Proficient" />
        <Prompt
          directory="/skillsAndTools/Proficient"
          branch={true}
          content="ls"
        />
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
        <Prompt directory="/HobbiesAndInterests" branch={true} content="ls" />
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
