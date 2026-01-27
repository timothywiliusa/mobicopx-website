"use client";
import React, { useState } from "react";
import { animate, motion } from "motion/react";
import SectionHeading from "./section-header";
import { trafficManagementData, securitySurveillanceData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { CgCPlusPlus } from "react-icons/cg";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    } as any,
  }),
};

const splitTextVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
    } as any,
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Technology", 0.3);
  const [expandedStack, setExpandedStack] = useState<number | null>(null);
  const [expandedTech, setExpandedTech] = useState<number | null>(null);

  const skillsText =
    "Agile, Scrum Master, C, C++, Password Encryption, Responsive Design, InclusiveMag, CSS Animations, Box Model, Lazy Loading, DVC Systems, Database Replication, SEO Optimization, CRM Integration, Content Management System (CMS)";
  const words = skillsText.split(", ");

  const toggleStackExpand = (index: number) => {
    setExpandedStack(expandedStack === index ? null : index);
  };

  const toggleTechExpand = (index: number) => {
    setExpandedTech(expandedTech === index ? null : index);
  };

  const handleStackHover = (index: number) => {
    setExpandedStack(index);
  };

  const handleTechHover = (index: number) => {
    setExpandedTech(index);
  };

  return (
    <div>
      <section
        ref={ref}
        id="technology"
        className=" mb-10 max-w-[53rem] scroll-mt-28 sm:mb-20"
      >
      <SectionHeading>Technology</SectionHeading>

        {/* <div className="mb-7 grid items-center">
          <div>
            <p className="inline text-2xl font-medium fira-code-regular text-[#0040ff]">
              Technology
            </p>
          </div>
        </div> */}
        {/* <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-lg mb-16 flex flex-wrap gap-2"
        >
          {words.map((word, i) => {
            if (word === "Scrum Master") {
              return (
                <motion.div key={i} custom={i} variants={splitTextVariants}>
                  <Link
                    className="inlineLink"
                    href="https://www.scrum.org/resources/what-scrum-module"
                    target="_blank"
                  >
                    {word}
                  </Link>
                  {i < words.length - 1 && ","}
                </motion.div>
              );
            } else if (word === "Password Encryption") {
              return (
                <motion.div key={i} custom={i} variants={splitTextVariants}>
                  <Link
                    className="inlineLink"
                    href="https://www.npmjs.com/package/bcrypt"
                    target="_blank"
                  >
                    {word}
                  </Link>
                  {i < words.length - 1 && ","}
                </motion.div>
              );
            } else if (word === "InclusiveMag") {
              return (
                <motion.div key={i} custom={i} variants={splitTextVariants}>
                  <Link
                    className="inlineLink"
                    href="https://gendermag.org"
                    target="_blank"
                  >
                    {word}
                  </Link>
                  {i < words.length - 1 && ","}
                </motion.div>
              );
            } else if (word === "Database Replication") {
              return (
                <motion.div key={i} custom={i} variants={splitTextVariants}>
                  <Link
                    className="inlineLink"
                    href="https://www.mongodb.com/docs/manual/replication/"
                    target="_blank"
                  >
                    {word}
                  </Link>
                  {i < words.length - 1 && ","}
                </motion.div>
              );
            } else {
              return (
                <motion.div key={i} custom={i} variants={splitTextVariants}>
                  {word}
                  {i < words.length - 1 && ","}
                </motion.div>
              );
            }
          })}
        </motion.div> */}
        <div className="mb-7 grid  items-center">
          <div>
            <p className="inline text-2xl font-medium fira-code-regular text-[#0040ff]">
              Traffic Management System
            </p>
          </div>
        </div>
        <ul className="flex flex-wrap gap-2 text-lg text-gray-800 mb-16">
          {trafficManagementData.map((trafficManagement, index) => (
            <div 
              key={index} 
              className="relative"
              onMouseEnter={() => handleStackHover(index)}
              onMouseLeave={() => setExpandedStack(null)}
            >
              <motion.li
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                custom={index}
                onClick={() => toggleStackExpand(index)}
                className="bg-white border borderBlack rounded-md pl-5 pr-6 py-3 text-base dark:bg-white/10 dark:text-gray-100 flex gap-2 items-center cursor-pointer hover:bg-gray-50 dark:hover:bg-white/20 transition-colors"
              >
                <span className="text-xl">{trafficManagement.icon}</span>
                {trafficManagement.title}
              </motion.li>
              {expandedStack === index && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.1 }}
                  className="bg-white dark:bg-gray-800 p-3 rounded-md mt-1 shadow-md text-sm border border-gray-200 dark:border-gray-700 max-w-[300px] z-10 absolute"
                >
                  <a rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    {trafficManagement.description}
                  </a>
                </motion.div>
              )}
            </div>
          ))}
        </ul>
        <div className="mb-7 grid  items-center">
          <div>
            <p className="inline text-2xl font-medium fira-code-regular text-[#0040ff]">
              Security & Surveillance
            </p>
          </div>
        </div>
        <ul className="flex flex-wrap gap-2 text-lg text-gray-800">
          {securitySurveillanceData.map((securitySurveillance, index) => (
            <div 
              key={index} 
              className="relative"
              onMouseEnter={() => handleTechHover(index)}
              onMouseLeave={() => setExpandedTech(null)}
            >
              <motion.li
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                custom={index}
                onClick={() => toggleTechExpand(index)}
                className="bg-white border borderBlack rounded-md pl-5 pr-6 py-3 text-base dark:bg-white/10 dark:text-gray-100 flex gap-2 items-center cursor-pointer hover:bg-gray-50 dark:hover:bg-white/20 transition-colors"
              >
                <span className="text-xl">{securitySurveillance.icon}</span>
                {securitySurveillance.title}
              </motion.li>
              {expandedTech === index && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.1 }}
                  className="bg-white dark:bg-gray-800 p-3 rounded-md mt-1 shadow-md text-sm border border-gray-200 dark:border-gray-700 max-w-[300px] z-10 absolute"
                >
                  <a rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    {securitySurveillance.description}
                  </a>
                </motion.div>
              )}
            </div>
          ))}
        </ul>

        {/* <div className="mb-7 grid  items-center">
          <div>
            <p className="inline text-2xl font-medium fira-code-regular text-[#0040ff]">
              Document AI
            </p>
          </div>
        </div> */}
      </section>
    </div>
  );
}
