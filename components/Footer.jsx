import React from "react";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineYoutube,
} from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0"></hr>

      <div className="mx-auto  p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between">
        <div className="flex flex-row items-center justify-center space-x-1 text-neutral-500 dark:text-neutral-100">
          © 2023 Abdul Rahim<a href="/" className="hover:underline"></a>
        </div>

        <div className="flex flex-row items-center justify-center space-x-2 mb-1 pt-1 md:pt-0">
          <a
            href="https://github.com/Abdul-Rahimm"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineGithub
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}
            />
          </a>

          <a
            href="https://www.linkedin.com/in/abdul-rahim-7801ab231/"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineLinkedin
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}
            />
          </a>

          <a
            href="https://leetcode.com/u/abdulxraheem/"
            rel="noreferrer"
            target="_blank"
          >
            <SiLeetcode
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={27}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
