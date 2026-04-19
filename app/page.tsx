"use client";

import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Contact from "@/components/contact";
import {
  animate,
  motion,
  Transition,
  useMotionTemplate,
  useMotionValue,
  useMotionValueEvent,
  useSpring,
  useTransform,
} from "motion/react";
import { useEffect, useState } from "react";
import LightDarkButton from "@/components/light-dark-button";

export default function Home() {
  const progress = useMockLoading();
  const [isLoaded, setIsLoaded] = useState(false);

  const leftEdge = useMotionValue("calc(50% - 2px)");
  const rightEdge = useMotionValue("calc(50% + 2px)");
  const topEdge = useTransform(progress, [0, 1], ["50%", "0%"]);
  const bottomEdge = useTransform(progress, [0, 1], ["50%", "100%"]);

  const clipPath = useMotionTemplate`polygon(
      0% 0%, ${leftEdge} 0%, ${leftEdge} ${topEdge}, ${leftEdge} ${bottomEdge}, ${rightEdge} ${bottomEdge}, ${rightEdge} ${topEdge}, 
      ${leftEdge} ${topEdge}, ${leftEdge} 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%
    )`;

  useMotionValueEvent(progress, "change", (latest) => {
    if (latest >= 1 && !isLoaded) {
      setIsLoaded(true);
    }
  });

  useEffect(() => {
    if (!isLoaded) return;

    const transition: Transition = {
      type: "spring",
      visualDuration: 0.5,
      bounce: 0,
    };

    animate(leftEdge, "calc(0% - 0px)", transition);
    animate(rightEdge, "calc(100% + 0px)", transition);
  }, [isLoaded]);

  return (
    <div className="relative w-full">
      <main className="flex flex-col items-center px-6 sm:px-[100px]">
        <Intro />
        <SectionDivider />
        <Projects />
        <About />
        <Skills />
        <Contact />
        <LightDarkButton />
      </main>

      <motion.div
        className="fixed top-0 left-0 w-full h-full bg-zinc-900 z-[10000000000] pointer-events-none"
        animate={{ opacity: isLoaded ? 0 : 1 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-full h-full bg-zinc-950 z-[10000000001] pointer-events-none"
        style={{ clipPath }}
      />
    </div>
  );
}

function useMockLoading() {
  const progress = useSpring(0, { stiffness: 2000, damping: 100 });

  useEffect(() => {
    const interval = setInterval(() => {
      const newProgress = progress.get() + Math.random() * 0.3;

      if (newProgress >= 1) {
        progress.set(1);
        clearInterval(interval);
      } else {
        progress.set(newProgress);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [progress]);

  return progress;
}
