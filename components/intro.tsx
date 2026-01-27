"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useTheme } from "@/context/theme-context";
// lazy loading
import dynamic from "next/dynamic";
const AnimatedEmail = dynamic(() => import("./lordicon/animated-icon-email"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});
const AnimatedCall = dynamic(() => import("./lordicon/animated-icon-call"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  // This effect ensures we only render theme-dependent content after mount
  // to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
    console.log("Current theme:", theme);
    console.log(
      "Dark mode class:",
      document.documentElement.classList.contains("dark")
    );
  }, [theme]);

  return (
    <section
      ref={ref}
      id="resume"
      className="
        pt-36 xs:pt-24 sm:pt-46 lg:pt-52
        w-full max-w-[1100px] 
        
        scroll-mt-[100rem] 
        bg-none 
        
        dark:text-zinc-400 "
    >
      <motion.div
        className="
        !leading-[1.5] bg-transparent -z-10 
        text-3xl xs:text-5xl lg:text-6xl 
        md:mb-10 "
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span
          className="
             font-bold 
            dark:text-gray-200"
        >
          <div className="inline-block relative h-12 xs:h-16 sm:h-20 md:h-24 lg:h-28 w-auto transition-all duration-300">
            {/* Show black logo in light mode and white logo in dark mode */}
            <Image
              src="/mobicops-logo-black.png"
              alt="MobiCops Logo"
              className="inline-block object-contain h-full w-auto dark:hidden"
              width={300}
              height={100}
              priority
            />
            <Image
              src="/mobicops-logo-white.png"
              alt="MobiCops Logo"
              className="hidden object-contain h-full w-auto dark:inline-block"
              width={300}
              height={100}
              priority
            />
          </div>
        </span>
        <br />
        <span className="text-gray-600 dark:text-gray-400 font-bold">
          Transforming{" "}
          <span className="text-black font-extrabold dark:text-secondary">
            Surveillance
          </span>{" "}
          and{" "}
          <span className="text-black font-extrabold dark:text-secondary">
            Traffic Management
          </span>{" "}
          with cutting edge{" "}
          <span className="text-black font-extrabold dark:text-secondary">
          AI Solutions
          </span>
          .
        </span>
      </motion.div>

      <div className="flex gap-2 flex-col lg:flex-row justify-between lg:items-center">

      
        <motion.h2
          className="
          mb-8 !leading-[1.5]  bg-transparent -z-10
          
          md:mb-10"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="max-w-[410px] md:max-w-[550px]">
            Mobicop delivers intelligent AI solutions that transform traffic
            management and security. From automated license plate recognition and
            red light detection to advanced surveillance features like facial
            recognition and intrusion detection, we help cities and organizations
            enhance safety and efficiency. Our Document AI simplifies identity
            verification with secure, compliant data extraction from official
            documents.
          </div>
        </motion.h2>

        <motion.div
          className="
          flex flex-col gap-2 
          items-center xs:items-start 
          text-lg font-medium"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
        >
        

          <div
            className="
              flex gap-2 justify-center
              flex-row w-fit lg:flex-col
              lg:mt-[-50px] lg:mr-[100px]
              
              "
          >
            <div className="flex flex-row gap-2 w-full justify-center ">
              <a
                className="emailHover bg-white w-12 h-12 justify-center text-gray-700 flex items-center rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-zinc-950 dark:text-blue-600"
                href="mailto:work@timothywiliusa.com"
              >
                <AnimatedEmail />
              </a>
              <a
                className="callHover bg-white w-12 h-12 justify-center text-gray-700 flex items-center rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-zinc-950 dark:text-blue-600"
                href="tel:+1-541-248-4595"
              >
                <AnimatedCall />
              </a>
            </div>

            <Link
              href="#contact"
              className="min-w-[170px] group bg-gray-900 text-white justify-center h-12 w-36 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition dark:bg-zinc-950 dark:text-secondary  dark:border-4 dark:border-zinc-950 text-sm dark:hover:text-tertiary"
              onClick={() => {
                setActiveSection("Contact");
                setTimeOfLastClick(Date.now());
              }}
            >
              Contact us
              <BsArrowRight className="opacity-70 group-hover:translate-x-2 transition  " />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
