"use client";

import React, { useState } from "react";
import { Link } from "react-scroll/modules";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdClose, IoMdMenu } from "react-icons/io";

const navItems = [
  {
    label: "Home",
    page: "home",
  },
  {
    label: "About",
    page: "about",
  },
  {
    label: "Projects",
    page: "projects",
  },
];

const NavBar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  //is navbar web or mobile
  const [navbar, setNavbar] = useState(false);

  return (
    <header className="w-full mx-auto px-4 bg-white shadow fixed top-0 z-50 dark:bg-stone-900 dark:border-b dark:border-stone-600">
      <div className="bg-red-500 md:flex md:items-center justify-between">
        {/* below div contains our Logo which is our name */}
        <div className="bg-green-500">
          <div className="md:py-5 md:block">
            <h2 className="text-2xl font-bold">Abdul Rahim</h2>
          </div>
        </div>

        {/* below div contains home about and projects */}
        <div className="bg-blue-400 md:flex md:space-x-6">
          {navItems.map((items, index) => {
            return <a key={index}>{items.label}</a>;
          })}
        </div>
      </div>
    </header>
  );
};

export default NavBar;
