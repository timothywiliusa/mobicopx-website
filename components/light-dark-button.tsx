"use client";

import { useTheme } from "@/context/theme-context";
import React, { useState } from "react";
import {
  animate,
  motion,
  Transition,
  useMotionTemplate,
  useMotionValue,
} from "motion/react";

import dynamic from "next/dynamic";
const AnimatedLamp = dynamic(() => import("./lordicon/animated-icon-lamp"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});
const AnimatedBat = dynamic(() => import("./lordicon/animated-icon-bat"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

export default function LightDarkButton() {
  const { theme, toggleTheme } = useTheme();
  const [isAnimating, setIsAnimating] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const leftEdge = useMotionValue("0%");
  const rightEdge = useMotionValue("100%");

  const clipPath = useMotionTemplate`polygon(
    0% 0%,
    ${leftEdge} 0%,
    ${leftEdge} 100%,
    ${rightEdge} 100%,
    ${rightEdge} 0%,
    100% 0%,
    100% 100%,
    0% 100%,
    0% 0%
  )`;

  const handleClick = async () => {
    if (isDisabled) return;

    const transition: Transition = {
      type: "spring",
      visualDuration: 0.5,
      bounce: 0,
    };
    setIsDisabled(true);
    setTimeout(() => setIsDisabled(false), 1500);

    setIsAnimating(true); // unhides the screen
    animate(leftEdge, "51%", transition); //sets the left edge to center
    await animate(rightEdge, "49%", transition); //sets the right edge to center

    toggleTheme();
    animate(leftEdge, "0%", transition); //resets screen to the left
    await animate(rightEdge, "100%", transition); //resets screen to the right

    setIsAnimating(false); // hides screen
  };

  return (
    <>
      <button
        className="fixed bottom-5 right-5 text-white bg-slate-800 w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:text-yellow-200 dark:bg-blue-800 dark:hover:bg-[#0040ff] dark:bg-opacity-75 dark:hover:text-yellow-100"
        onClick={handleClick}
        disabled={isDisabled}
      >
        {theme === "light" ? <AnimatedBat /> : <AnimatedLamp />}
      </button>

      {isAnimating && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-[#0033ff] z-[10000000001] pointer-events-none"
          style={{ clipPath }}
        />
      )}
    </>
  );
}
