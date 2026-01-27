"use client";

import { delay, wrap } from "motion";
import { Typewriter } from "motion-plus/react";
import { useState } from "react";

export default function TypewriterChangeContentExample({
  text = ["Websites", "Apps", "Games", "Experiences", "Products"],
}: {
  text?: string[];
}) {
  const [index, setIndex] = useState(0);

  return (
    <h2 style={container}>
      <span style={label}>We build</span>

      <Typewriter
        as="div"
        cursorStyle={cursor}
        onComplete={() => {
          delay(() => setIndex(wrap(0, text.length, index + 1)), 1);
        }}
        textStyle={animatingText}
      >
        {text[index]}
      </Typewriter>
    </h2>
  );
}

/**
 * ==============   Styles   ================
 */
const container: React.CSSProperties = {
  display: "flex",
  alignItems: "flex-start",
  gap: 0,
  flexDirection: "column",
  width: 400,
  fontSize: 48,
  textTransform: "uppercase",
  lineHeight: 1,
  color: "var(--accent)",
};

const label: React.CSSProperties = {
  fontSize: 24,
};

const animatingText: React.CSSProperties = {
  fontSize: 48,
  fontWeight: 700,
  lineHeight: 1,
};

const cursor: React.CSSProperties = {
  background: "#ff0088",
  width: 3,
};
