"use client";

import React, { useRef } from "react";
import SectionHeading from "./section-header";
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  href,
}: (typeof projectsData)[number]) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.section
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 lg:mb-8 last:mb-0"
    >
      <Link href={href}>
        <div
          className='
      
      bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden relative
      
      hover:bg-gray-200 transition 
      
    
      
      dark:text-white dark:bg-white/10 dark:hover:bg-white/20">'
        >
          {/*  lg:h-[20rem]   lg:group-even:pl-8 lg:pr-8 */}
          <div
            className="pt-4 pb-7 px-5 
        
        lg:pl-10 lg:pr-2 lg:pt-10 
        
        flex flex-col h-full 
        
       "
          >
            {/* lg:max-w-[50%] lg:group-even:ml-[18rem] */}
            <h3 className="text-xl fira-code-regular text-gray-950 dark:text-tertiary inline">
              {title}
            </h3>

            <p className="text-sm mt-2 leading-relaxed text-gray-700 dark:text-white/70 dark:group-hover:text-white group-hover:text-black transition-all">
              {description}
            </p>
            <ul
              className="
          
          flex flex-wrap mt-4 gap-2 
          "
            >
              {/* lg:mt-auto */}
              {tags.map((tag, index) => (
                <li
                  key={index}
                  className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70 hover:bg-tertiary transition-all"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          {/* <Image
            src={imageUrl}
            alt={title}
            quality={95}
            width={1000}
            height={1000}
            className="
            
            absolute hidden lg:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl   
            transition 
            group-hover:scale-[1.04]
            group-hover:-translate-x-3
            group-hover:translate-y-3
            group-hover:-rotate-2
    
            group-even:group-hover:translate-x-3
            group-even:group-hover:translate-y-3
            group-even:group-hover:rotate-2
            group-even:right-[initial] 
            group-even:-left-40"
          /> */}
        </div>
      </Link>
    </motion.section>
  );
}
