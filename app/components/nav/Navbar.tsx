import Link from "next/link";
import DarkModeToggle from "../DarkModeToggle";
import MobileNavDropdown from "./MobileNavDropdown";
import Image from "next/image";

const Logo = ({ className }: { className?: string }) => {
  return (
    <Image
      alt="logo"
      src="/pretty_man.png"
      width={80} // Example width, adjust as needed
      height={80} // Example height, adjust as needed
      className={`w-20 rounded-full ${className}`}
    />
  );
};

export const navLinks = [
  {
    label: "about",
    href: "/about",
    mobile: true,
  },
  {
    label: "services",
    href: "/services",
    mobile: true,
  },
  {
    label: "portfolio",
    href: "/portfolio",
    mobile: true,
  },
  {
    label: <Logo />,
    href: "/",
    mobile: false,
  },
  {
    label: "blog",
    href: "/blog",
    mobile: true,
  },
  {
    label: "contact",
    href: "/contact",
    mobile: true,
  },
];

const Navbar = () => {
  return (
    <nav className="navbar sticky top-0 bg-base-200 md:bg-base-100">
      <div className="w-full flex md:justify-center justify-between md:items-center md:gap-2">
        {/* desktop */}
        <ul className="menu menu-horizontal items-center gap-10 hidden md:flex">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
          <li>
            <DarkModeToggle />
          </li>
        </ul>
        {/* mobile */}
        <MobileNavDropdown />
        <Link href="/">
          <Logo className="md:hidden" />
        </Link>
        <div className="md:hidden">
          <DarkModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
