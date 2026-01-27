"use client";

import React from "react";
import { motion } from "motion/react";
import SectionHeading from "./section-header";
import { useSectionInView } from "@/lib/hooks";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  const { ref } = useSectionInView("About", 0.5);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[53rem] leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Us</SectionHeading>
      <div className="flex flex-col-reverse lg:flex-row gap-8 ">
        <div className="flex flex-col gap-4 text-base">
          <p className="">
          At Mobicop, we are pioneers in intelligent AI solutions, revolutionizing how organizations approach surveillance, traffic management, and document processing. Founded with a vision to create safer, smarter cities, we harness the power of cutting-edge artificial intelligence to solve real-world challenges in security and compliance.
          </p>
          <p className="">
         MobicopX offers a comprehensive suite of AI-driven technologies that empowers law enforcement agencies, government institutions, and enterprises to operate with unprecedented efficiency and accuracy. From automated license plate recognition and traffic violation detection to advanced facial recognition and document verification, our solutions deliver actionable insights in real time.
          </p>
          <p className="">
          We understand that safety and security are paramount. That's why every solution we develop is built on a foundation of robust data protection standards, ensuring compliance while maintaining the highest levels of accuracy and reliability. Our systems seamlessly integrate with existing infrastructure, providing scalable solutions that grow with your needs.
          </p>
          <p className="">
          With Mobicop, organizations gain more than just technology—they gain a trusted partner committed to innovation, precision, and excellence. Our team of AI experts and engineers work tirelessly to stay ahead of emerging challenges, continuously enhancing our platforms to meet the evolving demands of modern surveillance and traffic management.
          </p>
          <p className="">
          Join us in building a safer, more efficient future. Experience the transformative power of intelligent AI with Mobicop—where technology meets trust, and innovation drives impact.
          </p>
        </div>

        {/* <Image
          src="https://utfs.io/a/9upxg1g8p4/9pigm30TxnkIqnV3F5IIk0gxwCfvrlJiYNSp6quLdDeaF51K"
          alt="Tim"
          width="1000"
          height="1000"
          quality="95"
          priority={true}
          className="bg-transparent h-[420px] w-[350px] rounded-2xl object-cover shadow-2xl hidden lg:block"
        />

        <div className="grid items-center justify-center">
          <Image
            src="https://utfs.io/a/9upxg1g8p4/9pigm30TxnkIxyyQWh5tjZ1hk6EKMJYlriD7wN8ebx2Aqgno"
            alt="Tim"
            width="500"
            height="500"
            quality="100"
            priority={true}
            className="bg-transparent w-full rounded-2xl object-cover shadow-2xl lg:hidden"
          />
        </div> */}
      </div>

      {/* add photo here  */}

      {/* resume
          As an english speaker coming to the US, I was feeling very confident in my ability to speak English, but upon arrival, I was rather surprised as many American spoke English rapidly and mumbled. <span className='font-medium'>It wasn't long before I got my grip on certain points of emphasis of certain words and I could start to understand what people were saying. </span>Today, I don't have the need to even translate anymore as I already think in english. For me <span className='italic'>the same goes with computer science and coding. </span> <span className='font-medium'>One can only understand and grasp the ideas and concepts from exposure and presistence.</span>  */}

      {/* <br />
        <p>
          I built my first web application 4 years ago, and since then I've been learning and implementing projects using popular front-end libraries like <span className='underline'>FramerMotion</span> and <span className='underline'>VerticalTimeline</span>. My favorite part of programming is the problem-solving aspect. I <span className='italic'>absolutely love the feeling</span>  of <span className='font-medium'>finally figuring out a solution to a problem</span>. My core stack is <span className='underline'>React, Next.js, Node.js, and Firebase</span>. I am also familiar with <span className='underline'>TypeScript and Figma</span>. I am always looking to learn new technologies. I am currently looking for a full-time position as a software developer.
        </p>
        <br />
        <p>
          <span className="italic">When I'm not coding</span>, you'll find me playing chess, pingpong, and sometimes you'll see me boxing at the gym. I also enjoy <span className="font-medium">learning and exploring new things</span>. I am currently learning about <span className="font-medium">mindful focused meditation</span>. I'm also learning to play the piano!
        </p> */}
    </motion.section>
  );
}
