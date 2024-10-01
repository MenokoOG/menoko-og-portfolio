"use client";
import { useEffect, useState } from "react";
import MoonIcon from "./icons/MoonIcon";
import SunIcon from "./icons/SunIcon";
import { useTheme } from "next-themes";

const DarkModeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Ensure that the theme is only applied after the component has mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  // Toggle the theme between light and dark
  const onChangeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Prevent rendering theme-dependent elements until mounted
  if (!mounted) return null;

  return (
    <label className="btn btn-ghost swap swap-rotate">
      <input
        type="checkbox"
        className="theme-controller"
        onChange={onChangeTheme}
        checked={theme === "dark"}
      />
      <SunIcon className="swap-on" />
      <MoonIcon className="swap-off" />
    </label>
  );
};

export default DarkModeToggle;
