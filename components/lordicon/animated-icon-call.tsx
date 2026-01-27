"use client";
import { LordIcon } from "@/lib/lord-icon";
import { useTheme } from "@/context/theme-context";
import React from "react";

export default function AnimatedCall() {
  const { theme, toggleTheme } = useTheme();

  if (theme === "light") {
    return (
      <LordIcon
        src="https://cdn.lordicon.com/fmlvamjp.json"
        trigger="hover"
        delay={2000}
        colors={{ primary: "#455a64", secondary: "#455a64" }}
        size={25}
        target=".callHover"
        stroke="bold"
      />
    );
  } else {
    return (
      <LordIcon
        src="https://cdn.lordicon.com/fmlvamjp.json"
        trigger="hover"
        delay={2000}
        colors={{ primary: "#135DD8", secondary: "#ffffff" }}
        size={25}
        target=".callHover"
        stroke="bold"
      />
    );
  }
}
