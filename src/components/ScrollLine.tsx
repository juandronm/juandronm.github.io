import { motion, useScroll } from "motion/react";
import { useRef } from "react";

// Vertical timeline line that draws as its parent scrolls through the viewport.
export default function ScrollLine() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  return (
    <div ref={ref} aria-hidden="true" className="absolute inset-y-0 left-[7px] w-px bg-border">
      <motion.div
        className="h-full w-full origin-top bg-gradient-to-b from-accent to-accent-2"
        style={{ scaleY: scrollYProgress }}
      />
    </div>
  );
}
