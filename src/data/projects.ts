import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "TruRide Mobile Application",
    href: "/projects",
    tags: [
      "ReactNative",
      "TypeScript",
      "MongoDB",
      "Kotlin",
      "Firebase",
      "Nodejs",
      "Expressjs",
      "Figma",
    ],
    image: {
      LIGHT: "/images/projects/jsontreeLight.webp",
      DARK: "/images/projects/jsontreeDark.webp",
    },
  },
  {
    index: 1,
    title: "AI Enhance StudyGuide",
    href: "/projects",
    tags: [
      "HTML",
      "Tailwindcss",
      "Scss",
      "Vite",
      "React-router-dom",
      "Redux",
      "Flask Micro Framework",
    ],
    image: {
      LIGHT: "/images/projects/AIChat.png",
      DARK: "/images/projects/AIChat.png",
    },
  },
  {
    index: 2,
    title: "Bank Management System",
    href: "/projects",
    tags: ["APIs", "Python", "HTML", "Vercel", "Zustand", "React DND"],
    image: {
      LIGHT: "/images/projects/bank.png",
      DARK: "/images/projects/banksys.png",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "TruRide Mobile Application",
    favicon: "/images/projects/logos/jsontree.ico",
    imageUrl: [
      "/images/projects/jsontreeLight.webp",
      "/images/projects/jsontreeDark.webp",
    ],
    description:
      "It is a innovation from Rapido and Uber transport technologies.",
    sourceCodeHref: "https://github.com/BUMBAIYA/jsontre",
    liveWebsiteHref: "https://jsontree.vercel.ap",
  },
  {
    name: "Text Emotion Detection",
    favicon: "/images/projects/logos/kanban.ico",
    imageUrl: ["/images/projects/kanbanLight.webp"],
    description:
      "It is emotion capturer from given text, so that any AI ChatBots can understand the emotion in our prompt.",
    sourceCodeHref: "https://github.com/BUMBAIYA/kanba",
    liveWebsiteHref: "https://kannban-board.vercel.ap",
  },
  {
    name: "AI Chatbot",
    favicon: "/images/projects/logos/manygames.ico",
    imageUrl: ["/images/projects/manyGamesPuzzle.webp"],
    description:
      "AI Chatbot that can assist you in movie suggestions, games, and quizzes. It uses open source APIs to get data.",
    sourceCodeHref: "",
    liveWebsiteHref: "https://manygames.vercel.ap",
  },
  {
    name: "My portfolio",
    favicon: "/favicon.ico",
    imageUrl: [
      "/images/projects/portfolioDark.webp",
      "/images/projects/portfolioLight.webp",
    ],
    description:
      "My personal portfolio website made using Nextjs, tailwindcss and framer motion.",
    sourceCodeHref: "https://github.com/BUMBAIYA/amitchauhan-v2",
    liveWebsiteHref: siteMetadata.siteUrl,
  },
  {
    name: "Bank-Management-System",
    favicon: "/images/projects/logos/covidtracker.ico",
    imageUrl: ["/images/projects/bank.png", "/images/projects/image.png"],
    description:
      "BankSys is a Bank Management System web application. It is designed to manage the operations of a bank, including customer accounts, transactions, and financial reports. The application provides a user-friendly interface for managing bank operations and generating reports. It have different roles like Admin, Manager, Staff and Customer.",
    sourceCodeHref: "https://github.com/BUMBAIYA/CovidTracker",
    liveWebsiteHref: "https://bumbaiya.github.io/CovidTracker",
  },
  {
    name: "StudyGuide - AI Research Paper Summarizer",
    favicon: "/images/projects/logos/stockpredictor.ico",
    imageUrl: ["/images/projects/AIChat.png", "/images/projects/banksys.png"],
    description:
      "An Ai powered Chatbot that can assist you in getting the summary of any research paper. It uses open source APIs to get data.",
    sourceCodeHref: "https://github.com/Rohrschachh/Stock-Market-Predictor",
  },
];
