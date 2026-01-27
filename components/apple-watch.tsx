"use client";

import {
  motion,
  MotionValue,
  useMotionValue,
  useTransform,
} from "motion/react";
import {
  BsApple,
  BsCalendar,
  BsCamera,
  BsChat,
  BsClock,
  BsCompass,
  BsEnvelope,
  BsGear,
  BsGithub,
  BsLinkedin,
  BsTwitter,
  BsInstagram,
  BsYoutube,
  BsDiscord,
  BsSpotify,
  BsTwitch,
} from "react-icons/bs";

export default function AppleWatchHomeScreen() {
  /**
   * Arbitrary starting position to center an icon.
   * A more sophisticated implementation could use measurements
   * and calculations to decide which is the center or most
   * important icon.
   */
  const x = useMotionValue(-225);
  const y = useMotionValue(-225);

  return (
    <div className="device">
      <motion.div
        drag
        dragConstraints={{
          left: -450,
          right: 50,
          top: -400,
          bottom: 50,
        }}
        style={{
          width: 800,
          height: 800,
          x,
          y,
          background: "transparent",
          willChange: "transform",
        }}
      >
        {grid.map((rows, rowIndex) =>
          rows.map((colIndex: number) => (
            <Item
              key={`${rowIndex}-${colIndex}`}
              row={rowIndex}
              col={colIndex}
              planeX={x}
              planeY={y}
              icon={icons[rowIndex][colIndex]}
            />
          ))
        )}
      </motion.div>
      <Stylesheet />
    </div>
  );
}

function Item({ row, col, planeX, planeY, icon: Icon }: ItemProps) {
  const xOffset =
    col * (icon.size + icon.margin) +
    (row % 2) * ((icon.size + icon.margin) / 2);
  const yOffset = row * icon.size;

  const screenOffsetX = useTransform(() => planeX.get() + xOffset + 20);
  const screenOffsetY = useTransform(() => planeY.get() + yOffset + 20);
  const x = useTransform(screenOffsetX, xRange, translateRange);
  const y = useTransform(screenOffsetY, yRange, translateRange);
  const xScale = useTransform(screenOffsetX, xRange, scaleRange);
  const yScale = useTransform(screenOffsetY, yRange, scaleRange);
  const scale = useTransform(() => Math.min(xScale.get(), yScale.get()));

  return (
    <motion.div
      style={{
        position: "absolute",
        left: xOffset,
        top: yOffset,
        x,
        y,
        scale,
        width: icon.size,
        height: icon.size,
        borderRadius: "50%",
        contain: "strict",
        willChange: "transform",
        background: "rgba(255,255,255,0.8)",
        opacity: 0.9,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "black",
        fontSize: "2rem",
        cursor: "pointer",
      }}
    >
      <Icon />
    </motion.div>
  );
}

// Create 6x6 grid of icons and links
const icons = [
  [BsApple, BsGithub, BsLinkedin, BsTwitter, BsInstagram, BsYoutube],
  [BsCalendar, BsDiscord, BsSpotify, BsTwitch, BsCamera, BsChat],
  [BsClock, BsCompass, BsEnvelope, BsGear, BsApple, BsGithub],
  [BsLinkedin, BsTwitter, BsInstagram, BsYoutube, BsCalendar, BsDiscord],
  [BsSpotify, BsTwitch, BsCamera, BsChat, BsClock, BsCompass],
  [BsEnvelope, BsGear, BsApple, BsGithub, BsLinkedin, BsTwitter],
];

// Fill a grid of numbers to represent each app icon
const grid = new Array(6).fill([0, 1, 2, 3, 4, 5]);

interface ItemProps {
  row: number;
  col: number;
  planeX: MotionValue<number>;
  planeY: MotionValue<number>;
  icon: React.ElementType;
}

/**
 * ==============   Settings   ================
 */
const icon = {
  margin: 20,
  size: 100,
};

const device = {
  width: 368,
  height: 448,
};

/**
 * ==============   Utils   ================
 */

// Transform mapping functions
const createScreenRange = (axis: keyof typeof device) => [
  -60,
  80,
  device[axis] - (icon.size + icon.margin) / 2 - 80,
  device[axis] - (icon.size + icon.margin) / 2 + 60,
];

const scaleRange = [0, 1, 1, 0];
const translateRange = [50, 0, 0, -50];
const xRange = createScreenRange("width");
const yRange = createScreenRange("height");

/**
 * ==============   Styles   ================
 */
function Stylesheet() {
  return (
    <style>
      {`
        .device {
          width: ${device.width}px;
          height: ${device.height}px;
          background-color: black;
          border: 1px solid var(--border);
          border-radius: 80px;
          overflow: hidden;
          position: relative;
          touch-action: none;
          user-select: none;
        }
      `}
    </style>
  );
}
