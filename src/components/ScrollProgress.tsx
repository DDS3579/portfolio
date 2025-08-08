import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      aria-hidden
      className="fixed top-0 left-0 right-0 h-1 z-50"
      style={{ background: "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)))", scaleX: scrollYProgress, transformOrigin: "0% 50%" }}
    />
  );
}
