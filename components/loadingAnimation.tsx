"use client";

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

function LoadingLineReveal() {
  const progress = useMockLoading();
  const [isLoaded, setIsLoaded] = useState(false);

  const leftEdge = useMotionValue("calc(50% - 2px)");
  const rightEdge = useMotionValue("calc(50% + 2px)");
  const topEdge = useTransform(progress, [0, 1], ["50%", "0%"]);
  const bottomEdge = useTransform(progress, [0, 1], ["50%", "100%"]);

  /**
   * Ideally this would be as simple as something like inset() but this would leave
   * the bit in the middle visible, whereas we want to punch out the bit in the
   * middle and leave the rest. So to fix this we create a polygon that cuts into
   * the middle with a thin line and then opens that thin line once progress is 1
   */
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
    <div className="container">
      <Gallery />
      <motion.div
        className="black-overlay"
        animate={{ opacity: isLoaded ? 0 : 1 }}
      />
      <motion.div className="pink-overlay" style={{ clipPath }} />
      <StyleSheet />
    </div>
  );
}

/**
 * ==============   Utils   ================
 */
function useMockLoading() {
  const progress = useSpring(0, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const interval = setInterval(() => {
      const newProgress = progress.get() + Math.random() * 0.3;

      if (newProgress >= 1) {
        progress.set(1);
        clearInterval(interval);
      } else {
        progress.set(newProgress);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [progress]);

  return progress;
}

function Gallery() {
  return (
    <ul className="gallery-container">
      {images.map((image, i) => (
        <li key={image.url} className="gallery-item">
          <img
            src={image.url}
            alt={`Gallery item ${i + 1}`}
            style={{
              aspectRatio: image.aspectRatio,
              height: image.aspectRatio === "4 / 3" ? "100%" : "auto",
              width: image.aspectRatio === "3 / 4" ? "100%" : "auto",
            }}
          />
        </li>
      ))}
    </ul>
  );
}

const images = [
  {
    url: "/photos/japan-day/1.jpg",
    aspectRatio: "4 / 3",
  },
  {
    url: "/photos/japan-day/2.jpg",
    aspectRatio: "3 / 4",
  },
  {
    url: "/photos/japan-day/3.jpg",
    aspectRatio: "3 / 4",
  },
  {
    url: "/photos/japan-day/4.jpg",
    aspectRatio: "3 / 4",
  },
  {
    url: "/photos/japan-day/5.jpg",
    aspectRatio: "4 / 3",
  },
  {
    url: "/photos/japan-day/6.jpg",
    aspectRatio: "3 / 4",
  },
];

/**
 * ==============   Styles   ================
 */
function StyleSheet() {
  return (
    <style>
      {`
            .container {
                position: relative;
                width: 500px;
                height: 400px;
                overflow: hidden;
            }

            .gallery-container {
                background-color: var(--layer);
                border: 1px solid var(--border);
                border-radius: 25px;
                width: 100%;
                height: 100%;
                margin: 0;
                padding: 20px;
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                grid-template-rows: repeat(2, 1fr);
                gap: 20px;
                list-style: none;
                box-sizing: border-box;
            }

            .gallery-item {
                width: 100%;
                height: 100%;
                overflow: hidden;
                position: relative;
                background-color: #0f1115;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 10px;
            }

            .gallery-item img {
                object-fit: cover;
            }

            .black-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: #0f1115;
                z-index: 10000000000;
                pointer-events: none;
            }

            .pink-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: #ff0088;
                z-index: 10000000001;
                pointer-events: none;
                will-change: clip-path;
            }
            `}
    </style>
  );
}

export default LoadingLineReveal;
