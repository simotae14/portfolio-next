import React from "react";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact, FaAngular } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import omnifoodImg from "@/public/omnifood.png";
import patatapCloneImg from "@/public/patatap-clone.png";
import simplePortfolioImg from "@/public/simple-portfolio.png";
import vescoImg from "@/public/vesco.png";
import vuePortfolioImg from "@/public/vue-portfolio.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Web Developer",
    location: "Milan, Italy",
    description:
      "Created three web apps and relative APIs for the internal workflow of the company using Groovy, Grails, AngularJS and MongoDB.",
    icon: React.createElement(FaAngular),
    date: "2014 - 2017",
  },
  {
    title: "Front-End Developer",
    location: "Milan, Italy",
    description:
      "I developed the italian version of leovegas website, initially using Backbone.js and after using React and GraphQL.",
    icon: React.createElement(FaReact),
    date: "2017 - 2019",
  },
  {
    title: "Front-End Developer",
    location: "Milan, Italy",
    description:
      "I developed the website automobile.it, using Next.js and React.",
    icon: React.createElement(SiNextdotjs),
    date: "2019 - 2022",
  },
  {
    title: "Front-End Developer",
    location: "Bergamo, Italy - Full Remote",
    description:
      "I'm now a front-end developer working at Strapi. I am part of the squad responsible for the Content, using React and TypeScript.",
    icon: React.createElement(BiLogoTypescript),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Omnifood",
    description:
      "Simple landing page for a fictional Delivery site.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: omnifoodImg,
    link: "https://simotae14.github.io/OmnifoodTae/",
  },
  {
    title: "Patatap Clone",
    description:
      "Clone of Patatap using Paper.js and Howler.js.",
    tags: ["Paper.js", "Howler.js"],
    imageUrl: patatapCloneImg,
    link: "https://simotae14.github.io/MyPatatap/index.html",
  },
  {
    title: "Simple Portfolio",
    description:
      "A simple responsive portfolio page with HTML, CSS and JS.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: simplePortfolioImg,
    link: "https://simotae14.github.io/PortfolioOnePage/",
  },
  {
    title: "Vesco",
    description:
      "A simple modern responsive landing page.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: vescoImg,
    link: "https://simotae14.github.io/Vesco/",
  },
  {
    title: "Vue Portfolio",
    description:
      "Beautiful SEO-Ready Websites project with Vue 2.",
    tags: ["Vue", "Sass"],
    imageUrl: vuePortfolioImg,
    link: "https://startae14-vue-portfolio.surge.sh/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Redux",
  "Next.js",
  "Node.js",
  "Deno.js",
  "Git",
  "GraphQL",
  "MongoDB",
  "Python",
  "Django",
  "Tailwind",
  "Express",
  "PostgreSQL",
  "Framer Motion",
] as const;