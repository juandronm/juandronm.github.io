import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";

interface Props {
  value: number;
  decimals?: number;
  suffix?: string;
}

// Server renders the final number (no-JS / SEO); it counts up from 0 once in view.
export default function CountUp({ value, decimals = 0, suffix = "" }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduce = useReducedMotion();
  const fmt = (n: number) => n.toFixed(decimals) + suffix;

  useEffect(() => {
    if (!inView || reduce || !ref.current) return;
    const el = ref.current;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (n) => (el.textContent = fmt(n)),
    });
    return () => controls.stop();
  }, [inView, reduce]);

  return <span ref={ref}>{fmt(value)}</span>;
}
