import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "Collective Airline Index",
    description:
      "Compare and constrast your choices from different Airline options before booking your flight. Storage is built using self-developed Data structure: Hash-map based on 2D linked-list",
    image: "https://next-ecommerce-rahim.s3.amazonaws.com/1725967192163.png",
    github:
      "https://github.com/Abdul-Rahimm/Collective-Airline-Index---DS-project",
    link: "",
  },
  {
    name: "Journey @ Leetcode",
    description:
      "This repository gives a sneek peak into my passion for solving complex data structure and algorithms at Leetcode",
    image: "https://next-ecommerce-rahim.s3.amazonaws.com/1725967199128.png",
    github: "https://github.com/Abdul-Rahimm/LeetCode_2024",
    link: "",
  },
  {
    name: "Full Stack E-commerce Store",
    description:
      "This marks my first implementation of a Full Stack MERN app using industry best practices. Utilizes tools such as AWS S3, G-Auth etc",
    image: "https://next-ecommerce-rahim.s3.amazonaws.com/1725967204701.png",
    github: "https://github.com/Abdul-Rahimm/E-commerce-store",
    link: "",
  },
  {
    name: "Aora ",
    description:
      "Learned the Fundamentals of React-Native through this project. Utilized expo, nativewind, animatable and Appwrite",
    image: "https://next-ecommerce-rahim.s3.amazonaws.com/1725967169186.png",
    github: "https://github.com/Abdul-Rahimm/Learning-react-Native---JSM",
    link: "",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>

                      {project.link !== "" && (
                        <Link href={project.link} target="_blank">
                          <BsArrowUpRightSquare
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                          />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
