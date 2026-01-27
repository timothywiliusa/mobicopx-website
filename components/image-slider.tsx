"use client";

import {
  animate,
  clamp,
  motion,
  MotionValue,
  useMotionValue,
  useTransform,
} from "motion/react";
import { useLayoutEffect, useRef, useState } from "react";

export default function ImageRevealSlider({
  src1 = "https://utfs.io/a/9upxg1g8p4/9pigm30TxnkIqnV3F5IIk0gxwCfvrlJiYNSp6quLdDeaF51K",
  src2 = "https://utfs.io/a/9upxg1g8p4/9pigm30TxnkIT2X6SKMwtIWi8sDn3Ab0N2LJvBx49eXRF5fa", // Second image source
  step = 50,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [boundary, setBoundary] = useState(300);
  const clipPath = useTransform(
    x,
    [-boundary, boundary],
    ["inset(0% 0% 0% 0%)", "inset(0% 0% 0% 100%)"]
  );

  useLayoutEffect(() => {
    if (containerRef.current) {
      setBoundary(containerRef.current.clientWidth / 2);
    }
  }, [containerRef]);

  const keyboard = useKeyboard(x, boundary, step);

  return (
    <div ref={containerRef} className="container">
      <div className="image-container">
        <motion.img src={src1} alt="First image" className="image" />
        <motion.img
          style={{ clipPath }}
          src={src2}
          alt="Second image"
          className="image overlay"
        />
      </div>

      <motion.div
        className="slider"
        drag="x"
        dragElastic={0.05}
        dragConstraints={containerRef}
        style={{ x }}
        tabIndex={0}
        onFocus={keyboard.start}
        onBlur={keyboard.stop}
      >
        <div className="handle">
          <LeftRightIcon />
        </div>
      </motion.div>

      <Stylesheet />
    </div>
  );
}

interface Props {
  src1?: string;
  src2?: string;
  step?: number;
}

/**
 * ==============   Utils   ================
 */

function useKeyboard(x: MotionValue<number>, boundary: number, step: number) {
  const handleKeyDown = (event: KeyboardEvent) => {
    let moveBy = 0;

    if (event.key === "ArrowLeft") {
      moveBy = -step;
    } else if (event.key === "ArrowRight") {
      moveBy = step;
    } else {
      return;
    }

    animate(x, clamp(-boundary, boundary, x.get() + moveBy), {
      type: "spring",
      stiffness: 900,
      damping: 40,
      velocity: moveBy * 10,
    });
  };

  const start = () => {
    document.addEventListener("keydown", handleKeyDown);
  };

  const stop = () => {
    document.removeEventListener("keydown", handleKeyDown);
  };

  return { start, stop };
}

/**
 * ==============   Styles   ================
 */

function Stylesheet() {
  return (
    <style>
      {`
                .container {
                    position: relative;
                    width: 100%;
                    height: 100%;
                }

                .image-container {
                    position: relative;
                    background-color: var(--layer);
                    border: 1px solid var(--border);
                    border-radius: 12px;
                    overflow: hidden;
                    width: 100%;
                    height: 100%;
                }

                .image {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .overlay {
                    top: 0;
                    left: 0;
                }

                .slider {
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    width: 2px;
                    background-color: white;
                    cursor: grab;
                    left: 50%;
                    transform: translateX(-50%);
                    filter: drop-shadow(2px 0 3px rgba(0, 0, 0, .4))
                }

                .handle {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 40px;
                    height: 40px;
                    background-color: white;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #0f1115;
                    cursor: grab;
                }

                .slider:focus-visible{
                    outline: none; 
                }
                    
                .slider:focus-visible .handle {
                    outline: 4px solid #ff0088; 
                    outline-offset: 2px;
                }

                .handle:active {
                    cursor: grabbing;
                }
            `}
    </style>
  );
}

function LeftRightIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m18 8 4 4-4 4" />
      <path d="m6 8-4 4 4 4" />
      <path d="M8 12h.01" />
      <path d="M12 12h.01" />
      <path d="M16 12h.01" />
    </svg>
  );
}
