import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import {
  FaReact,
  FaLaptop,
  FaStackOverflow,
  FaDocker,
  FaGithub,
  FaGitSquare,
} from "react-icons/fa";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { LuGraduationCap } from "react-icons/lu";
import { BsHddNetwork } from "react-icons/bs";
import { LiaFigma } from "react-icons/lia";
import {
  BiLogoTypescript,
  BiLogoRedux,
  BiLogoPostgresql,
  BiChip,
} from "react-icons/bi";
import { GiRotaryPhone } from "react-icons/gi";
import { TbBrandNextjs, TbBrandVercel } from "react-icons/tb";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiGraphql,
  SiFirebase,
  SiApollographql,
  SiPowerbi,
  SiPowershell,
  SiWarp,
} from "react-icons/si";
import { RxFramerLogo } from "react-icons/rx";
import { VscVscode } from "react-icons/vsc";

// import dbrepl from "@/public/dockermongo.png"
// import linearhashing from "@/public/linearhashing.png";
// import quantumvox from "@/public/quantum-vox.png";
// import calvin from "@/public/project-calvin.png";''

export const links = [
  {
    name: "Home",
    hash: "#home",
  },

  {
    name: "Solution",
    hash: "#solution",
  },

  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Technology",
    hash: "#technology",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Traffic Management System",
    description:
      "Monitor and enforce traffic regulations with AI-powered detection for wrong-way driving, illegal parking, seatbelt violations, mobile phone usage, and lane infractions.",
    tags: ["Red Light Monitoring", "No Helmet","Speed Detection", "Triple Riding Detection"],
    imageUrl:
      "https://utfs.io/a/9upxg1g8p4/9pigm30TxnkI7wAZZqfxwUC6dhQRkjvOBK1TlDGoZnMzF49N",
    href: "#technology",
  },
  {
    title: "Security & Surveillance",
    description:
      'Enhance safety with AI-driven monitoring for perimeter breaches, loitering, abandoned objects, crowd behavior, PPE compliance, and smoke or gas detection alerts.',
    tags: ["Crowd Analysis", "Facial Recognition", "Gun Detection", "Fire Detection"],
    imageUrl:
      "https://utfs.io/a/9upxg1g8p4/9pigm30TxnkIikbFmpcNQa0B7qMTYXvn2exs8zgEPDZu1OJC",
    href: "#technology",
  },
  {
    title: "Document AI",
    description:
      'Streamline verification with AI-powered scanning that extracts data from passports, licenses, and IDs for fast, secure, and compliant identity authentication.',
    tags: ["Identity Verification", "Data Extraction", "AI Scanning", "Go Paperless"],
    imageUrl:
      "https://utfs.io/a/9upxg1g8p4/9pigm30TxnkILlyzF3Aa1JZzV3WhQDsiugkAI0TGYjd8BrbK",
    href: "#technology",
  },
] as const;

import { MdOutlineTraffic, MdSpeed, MdOutlineQrCodeScanner } from "react-icons/md";
import { PiMotorcycleFill } from "react-icons/pi";
import { BsPersonVcard } from "react-icons/bs";
import { FaHelmetSafety } from "react-icons/fa6";
import { IoCarSportSharp } from "react-icons/io5";
import { BsPeopleFill } from "react-icons/bs";
import { GiCctvCamera, GiRifle } from "react-icons/gi";
import { FaMehBlank } from "react-icons/fa";
import { FaFire } from "react-icons/fa";

export const trafficManagementData = [
  {
    title: "Red Light Detection",
    icon: React.createElement(MdOutlineTraffic),
    description: "Identify and record red light violations with verifiable image and video evidence for traffic enforcement.",
  },
  {
    title: "Speed Detection",
    icon: React.createElement(MdSpeed),
    description: "Monitor vehicle speed in real time and detect speeding violations using AI-based analytics.",
  },
  {
    title: "No Helmet Detection",
    icon: React.createElement(FaHelmetSafety),
    description: "Ensure road safety by automatically detecting riders without helmets, complete with visual evidence.",
  },
  {
    title: "Triple Riding Detection",
    icon: React.createElement(PiMotorcycleFill),
    description: "Detect and document multiple riders on a single motorcycle to enhance compliance with traffic safety rules.",
  },
  {
    title: "ALPR/ANPR",
    icon: React.createElement(BsPersonVcard),
    description: "Automatically capture and recognize license plates to support effective law enforcement and automated monitoring.",
  },
] as const;

export const securitySurveillanceData = [
  {
    title: "Vehicle Entry/Exit Automation",
    icon: React.createElement(IoCarSportSharp),
    description: "Automate vehicle access control for smoother entry and exit management within secured areas.",
  },
  {
    title: "People Counting",
    icon: React.createElement(BsPeopleFill),
    description: "Gain actionable insights with AI-powered crowd analytics to measure and manage people flow efficiently.",
  },
  {
    title: "Intrusion Detection",
    icon: React.createElement(GiCctvCamera),
    description: "Detect unauthorized entries and trigger instant alerts to enhance premises security.",
  },
  {
    title: "Facial Recognition",
    icon: React.createElement(FaMehBlank),
    description: "Enable fast and reliable identity verification for access control and security monitoring.",
  },
  {
    title: "Gun Detection",
    icon: React.createElement(GiRifle),
    description: "Proactively identify potential threats by detecting firearms before incidents occur.",
  },
  {
    title: "Fire Detection",
    icon: React.createElement(FaFire),
    description: "Detect early signs of fire and alert first responders to prevent loss and ensure safety.",
  },
] as const;
