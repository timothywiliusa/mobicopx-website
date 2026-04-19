import React from "react";
import { CountryCodeOption } from "./types";
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
    tags: [
      "Red Light Monitoring",
      "No Helmet",
      "Speed Detection",
      "Triple Riding Detection",
    ],
    imageUrl:
      "https://utfs.io/a/9upxg1g8p4/9pigm30TxnkI7wAZZqfxwUC6dhQRkjvOBK1TlDGoZnMzF49N",
    href: "#technology",
  },
  {
    title: "Security & Surveillance",
    description:
      "Enhance safety with AI-driven monitoring for perimeter breaches, loitering, abandoned objects, crowd behavior, PPE compliance, and smoke or gas detection alerts.",
    tags: [
      "Crowd Analysis",
      "Facial Recognition",
      "Gun Detection",
      "Fire Detection",
    ],
    imageUrl:
      "https://utfs.io/a/9upxg1g8p4/9pigm30TxnkIikbFmpcNQa0B7qMTYXvn2exs8zgEPDZu1OJC",
    href: "#technology",
  },
  {
    title: "Document AI",
    description:
      "Streamline verification with AI-powered scanning that extracts data from passports, licenses, and IDs for fast, secure, and compliant identity authentication.",
    tags: [
      "Identity Verification",
      "Data Extraction",
      "AI Scanning",
      "Go Paperless",
    ],
    imageUrl:
      "https://utfs.io/a/9upxg1g8p4/9pigm30TxnkILlyzF3Aa1JZzV3WhQDsiugkAI0TGYjd8BrbK",
    href: "#technology",
  },
] as const;

import {
  MdOutlineTraffic,
  MdSpeed,
  MdOutlineQrCodeScanner,
} from "react-icons/md";
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
    description:
      "Identify and record red light violations with verifiable image and video evidence for traffic enforcement.",
  },
  {
    title: "Speed Detection",
    icon: React.createElement(MdSpeed),
    description:
      "Monitor vehicle speed in real time and detect speeding violations using AI-based analytics.",
  },
  {
    title: "No Helmet Detection",
    icon: React.createElement(FaHelmetSafety),
    description:
      "Ensure road safety by automatically detecting riders without helmets, complete with visual evidence.",
  },
  {
    title: "Triple Riding Detection",
    icon: React.createElement(PiMotorcycleFill),
    description:
      "Detect and document multiple riders on a single motorcycle to enhance compliance with traffic safety rules.",
  },
  {
    title: "ALPR/ANPR",
    icon: React.createElement(BsPersonVcard),
    description:
      "Automatically capture and recognize license plates to support effective law enforcement and automated monitoring.",
  },
] as const;

export const securitySurveillanceData = [
  {
    title: "Vehicle Entry/Exit Automation",
    icon: React.createElement(IoCarSportSharp),
    description:
      "Automate vehicle access control for smoother entry and exit management within secured areas.",
  },
  {
    title: "People Counting",
    icon: React.createElement(BsPeopleFill),
    description:
      "Gain actionable insights with AI-powered crowd analytics to measure and manage people flow efficiently.",
  },
  {
    title: "Intrusion Detection",
    icon: React.createElement(GiCctvCamera),
    description:
      "Detect unauthorized entries and trigger instant alerts to enhance premises security.",
  },
  {
    title: "Facial Recognition",
    icon: React.createElement(FaMehBlank),
    description:
      "Enable fast and reliable identity verification for access control and security monitoring.",
  },
  {
    title: "Gun Detection",
    icon: React.createElement(GiRifle),
    description:
      "Proactively identify potential threats by detecting firearms before incidents occur.",
  },
  {
    title: "Fire Detection",
    icon: React.createElement(FaFire),
    description:
      "Detect early signs of fire and alert first responders to prevent loss and ensure safety.",
  },
] as const;

// Prioritised country codes appear first, followed by the remaining list
// sorted alphabetically by country name.
export const priorityCountryCodes: CountryCodeOption[] = [
  { country: "Indonesia", iso: "ID", code: "+62" },
  { country: "China", iso: "CN", code: "+86" },
  { country: "United States", iso: "US", code: "+1" },
  { country: "Germany", iso: "DE", code: "+49" },
  { country: "Australia", iso: "AU", code: "+61" },
  { country: "Singapore", iso: "SG", code: "+65" },
];

export const otherCountryCodes: CountryCodeOption[] = [
  { country: "Afghanistan", iso: "AF", code: "+93" },
  { country: "Albania", iso: "AL", code: "+355" },
  { country: "Algeria", iso: "DZ", code: "+213" },
  { country: "Argentina", iso: "AR", code: "+54" },
  { country: "Armenia", iso: "AM", code: "+374" },
  { country: "Austria", iso: "AT", code: "+43" },
  { country: "Azerbaijan", iso: "AZ", code: "+994" },
  { country: "Bahrain", iso: "BH", code: "+973" },
  { country: "Bangladesh", iso: "BD", code: "+880" },
  { country: "Belarus", iso: "BY", code: "+375" },
  { country: "Belgium", iso: "BE", code: "+32" },
  { country: "Bolivia", iso: "BO", code: "+591" },
  { country: "Bosnia and Herzegovina", iso: "BA", code: "+387" },
  { country: "Brazil", iso: "BR", code: "+55" },
  { country: "Brunei", iso: "BN", code: "+673" },
  { country: "Bulgaria", iso: "BG", code: "+359" },
  { country: "Canada", iso: "CA", code: "+1" },
  { country: "Cambodia", iso: "KH", code: "+855" },
  { country: "Chile", iso: "CL", code: "+56" },
  { country: "Colombia", iso: "CO", code: "+57" },
  { country: "Croatia", iso: "HR", code: "+385" },
  { country: "Cyprus", iso: "CY", code: "+357" },
  { country: "Czech Republic", iso: "CZ", code: "+420" },
  { country: "Denmark", iso: "DK", code: "+45" },
  { country: "Dominican Republic", iso: "DO", code: "+1-809" },
  { country: "Ecuador", iso: "EC", code: "+593" },
  { country: "Egypt", iso: "EG", code: "+20" },
  { country: "Estonia", iso: "EE", code: "+372" },
  { country: "Ethiopia", iso: "ET", code: "+251" },
  { country: "Finland", iso: "FI", code: "+358" },
  { country: "France", iso: "FR", code: "+33" },
  { country: "Georgia", iso: "GE", code: "+995" },
  { country: "Ghana", iso: "GH", code: "+233" },
  { country: "Greece", iso: "GR", code: "+30" },
  { country: "Hong Kong", iso: "HK", code: "+852" },
  { country: "Hungary", iso: "HU", code: "+36" },
  { country: "Iceland", iso: "IS", code: "+354" },
  { country: "India", iso: "IN", code: "+91" },
  { country: "Iran", iso: "IR", code: "+98" },
  { country: "Iraq", iso: "IQ", code: "+964" },
  { country: "Ireland", iso: "IE", code: "+353" },
  { country: "Israel", iso: "IL", code: "+972" },
  { country: "Italy", iso: "IT", code: "+39" },
  { country: "Japan", iso: "JP", code: "+81" },
  { country: "Jordan", iso: "JO", code: "+962" },
  { country: "Kazakhstan", iso: "KZ", code: "+7" },
  { country: "Kenya", iso: "KE", code: "+254" },
  { country: "Kuwait", iso: "KW", code: "+965" },
  { country: "Laos", iso: "LA", code: "+856" },
  { country: "Latvia", iso: "LV", code: "+371" },
  { country: "Lebanon", iso: "LB", code: "+961" },
  { country: "Lithuania", iso: "LT", code: "+370" },
  { country: "Luxembourg", iso: "LU", code: "+352" },
  { country: "Macau", iso: "MO", code: "+853" },
  { country: "Malaysia", iso: "MY", code: "+60" },
  { country: "Maldives", iso: "MV", code: "+960" },
  { country: "Mexico", iso: "MX", code: "+52" },
  { country: "Mongolia", iso: "MN", code: "+976" },
  { country: "Morocco", iso: "MA", code: "+212" },
  { country: "Myanmar", iso: "MM", code: "+95" },
  { country: "Nepal", iso: "NP", code: "+977" },
  { country: "Netherlands", iso: "NL", code: "+31" },
  { country: "New Zealand", iso: "NZ", code: "+64" },
  { country: "Nigeria", iso: "NG", code: "+234" },
  { country: "Norway", iso: "NO", code: "+47" },
  { country: "Oman", iso: "OM", code: "+968" },
  { country: "Pakistan", iso: "PK", code: "+92" },
  { country: "Peru", iso: "PE", code: "+51" },
  { country: "Philippines", iso: "PH", code: "+63" },
  { country: "Poland", iso: "PL", code: "+48" },
  { country: "Portugal", iso: "PT", code: "+351" },
  { country: "Qatar", iso: "QA", code: "+974" },
  { country: "Romania", iso: "RO", code: "+40" },
  { country: "Russia", iso: "RU", code: "+7" },
  { country: "Saudi Arabia", iso: "SA", code: "+966" },
  { country: "Serbia", iso: "RS", code: "+381" },
  { country: "Slovakia", iso: "SK", code: "+421" },
  { country: "Slovenia", iso: "SI", code: "+386" },
  { country: "South Africa", iso: "ZA", code: "+27" },
  { country: "South Korea", iso: "KR", code: "+82" },
  { country: "Spain", iso: "ES", code: "+34" },
  { country: "Sri Lanka", iso: "LK", code: "+94" },
  { country: "Sweden", iso: "SE", code: "+46" },
  { country: "Switzerland", iso: "CH", code: "+41" },
  { country: "Taiwan", iso: "TW", code: "+886" },
  { country: "Thailand", iso: "TH", code: "+66" },
  { country: "Turkey", iso: "TR", code: "+90" },
  { country: "Ukraine", iso: "UA", code: "+380" },
  { country: "United Arab Emirates", iso: "AE", code: "+971" },
  { country: "United Kingdom", iso: "GB", code: "+44" },
  { country: "Uruguay", iso: "UY", code: "+598" },
  { country: "Uzbekistan", iso: "UZ", code: "+998" },
  { country: "Venezuela", iso: "VE", code: "+58" },
  { country: "Vietnam", iso: "VN", code: "+84" },
  { country: "Yemen", iso: "YE", code: "+967" },
] as const;
