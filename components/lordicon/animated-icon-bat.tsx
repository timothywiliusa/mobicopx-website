"use client";
import { LordIcon } from "@/lib/lord-icon";
import { useTheme } from "@/context/theme-context";
import React from "react";

export default function AnimatedFork() {
  const { theme, toggleTheme } = useTheme();

  if (theme === "light") {
    return (
      <LordIcon
        src="https://cdn.lordicon.com/nukjbglx.json"
        trigger="hover"
        delay={2000}
        colors={{ primary: "#ffffff", secondary: "#ffffff" }}
        size={35}
        stroke="bold"
      />
    );
  } else {
    return (
      <LordIcon
        src="https://cdn.lordicon.com/nukjbglx.json"
        trigger="hover"
        delay={2000}
        colors={{ primary: "#ffffff", secondary: "#ffffff" }}
        size={35}
        stroke="bold"
      />
    );
  }
}
