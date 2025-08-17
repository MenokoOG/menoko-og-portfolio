import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import Image from "next/image";

const ProfilePicture = () => (
  <Image
    src="/LJ-river-Hells-Canyon.jpg"
    alt="Profile picture of Lawrence Jefferson"
    className="bg-gradient-to-br from-blue-600 via-teal-500 to-gray-700 rounded-full w-[200px] md:w-[150px] p-2"
    width={200}
    height={200}
  />
);

const BulletPoints = () => (
  <ul className="space-y-1 text-xl text-center md:text-left">
    <li>🌎 Based in Clarkston, WA</li>
    <li>
      💼 Chief Technology Officer at{" "}
      <a
        href="https://gunkustom.com"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-blue-400"
      >
        GunKustom.com
      </a>
    </li>
    <li>
      🚀 Co-Creator of the server for{" "}
      <a
        href="https://powalert.com"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-blue-400"
      >
        Powalert.com
      </a>
    </li>
    <li>
      🛠️ <Link href="/services">M3n0koOg – Original Geek!</Link>
    </li>
    <li>
      📧 <Link href="/contact">Let’s get in touch!</Link>
    </li>
  </ul>
);

const WavingHand = () => <span className="animate-wave inline-block">🤚🏻</span>;

const socials = [
  { icon: <FaGithub />, href: "https://github.com/MenokoOG" },
  {
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/lawrence-jefferson-ii-46497075/",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 py-20">
      <ProfilePicture />

      <div>
        <div className="text-center md:text-left mb-4">
          <h1 className="text-5xl">
            Hi, I’m{" "}
            <span className="bg-gradient-to-tl from-blue-600 via-teal-500 to-gray-700 text-transparent bg-clip-text font-bold">
              Lawrence
            </span>
            <WavingHand />
          </h1>
          <h2 className="text-3xl mt-2">
            CTO of GunKustom.com &amp; Full-Stack JavaScript / Python Engineer
          </h2>
        </div>

        <BulletPoints />

        <ul className="flex justify-center md:justify-start text-3xl gap-8 mt-4">
          {socials.map((social, idx) => (
            <li key={idx} className="hover:scale-125 transition-transform">
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
