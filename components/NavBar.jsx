"use client";

import React, { useState } from "react";
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
      <div className=" md:flex md:items-center justify-between">
        {/* below div contains our Logo which is our name */}
        <div className="">
          <div>
            <div className="md:py-5 md:block">
              <h2 className="text-2xl font-bold">Abdul Rahim</h2>
            </div>
            <div className="md:hidden">
              <button>
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>

        {/* below div contains home about projects and theme toggle button*/}
        <div className=" md:flex md:space-x-6">
          {navItems.map((items, index) => {
            return <a key={index}>{items.label}</a>;
          })}

          {currentTheme === "dark" ? (
            <button
              onClick={() => setTheme("light")}
              className="bg-slate-100 p-2 rounded-xl"
            >
              <RiSunLine size={20} color="black" />
            </button>
          ) : (
            <button
              onClick={() => setTheme("dark")}
              className="bg-slate-100 p-2 rounded-xl"
            >
              <RiMoonFill size={20} />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default NavBar;
