import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import Image from "next/image";

const ProfilePicture = () => {
  return (
    <Image
      src="/l_jefferson.png"
      alt="Profile picture of Lawrence Jefferson"
      className="bg-gradient-to-br from-blue-600 via-teal-500 to-gray-700 rounded-full w-[200px] md:w-[150px] p-2"
      width={200} // Reduced width
      height={200} // Reduced height
    />
  );
};

const BulletPoints = () => {
  return (
    <ul className="space-y-1 text-xl text-center md:text-left">
      <li>🌎 based in Clarkston, WA</li>
      <li>
        <Link href="/services">💼 Menoko OG - Original Geek !</Link>
      </li>
      <li>
        <Link href="/contact">📧 let&apos;s get in touch!</Link>
      </li>
      {/* <li>
        📝download my{" "}
        <a
          className="link link-primary"
          href="/lawrencejeffersonresume.pdf"
          download="lawrencejeffersonresume"
        >
          resume
        </a>
      </li> */}
    </ul>
  );
};

const WavingHand = () => {
  return <span className="animate-wave inline-block">🤚🏻</span>;
};

const socials = [
  {
    icon: <FaGithub />,
    href: "https://github.com/MenokoOG",
  },
  {
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/lawrence-jefferson-ii-46497075/",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20">
      {/* picture of me */}
      <ProfilePicture />
      {/* little bio */}
      <div>
        <div className="text-center md:text-left mb-4">
          <h1 className="text-5xl">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-tl from-blue-600 via-teal-500 to-gray-700  text-transparent bg-clip-text font-bold">
              Lawrence
            </span>
            <WavingHand />
          </h1>
          <h2 className="text-3xl">
            I&apos;m a full stack Javascript & Python developer.
          </h2>
        </div>
        <BulletPoints />
        {/* socials */}
        <ul className="flex justify-center text-3xl gap-10 mt-4">
          {socials.map((social, index) => (
            <li
              key={index}
              className="hover:scale-125 hover:transition-all ease-in-out"
            >
              <Link href={social.href} target="_blank">
                {social.icon}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
