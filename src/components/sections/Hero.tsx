import { motion } from "framer-motion";
import avatar from "@/assets/avatar-neo.jpg";
import { Button } from "@/components/ui/button";
import CustomCursor from "@/components/CustomCursor";
import { useEffect, useState } from "react";

function TypingCycle({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [sub, setSub] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);

  useEffect(() => {
    const current = words[index];
    const end = current.length;
    const interval = setInterval(() => {
      setSub((s) => {
        if (dir === 1 && s >= end) { setDir(-1); return s; }
        if (dir === -1 && s <= 0) { setDir(1); setIndex((i) => (i + 1) % words.length); return 0; }
        return s + dir;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [words, index, dir]);

  return <span className="text-gradient">{words[index].slice(0, sub)}<span className="opacity-40">|</span></span>;
}

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 md:pt-32 pb-24 overflow-hidden">
      {/* Ambient particles */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-20 -left-10 h-72 w-72 rounded-full bg-gradient-primary blur-3xl opacity-20" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-gradient-primary blur-3xl opacity-10" />
      </div>

      <CustomCursor />

      <div className="container grid lg:grid-cols-2 gap-10 items-center">
        <div className="text-left">
          <h1 className="font-display text-5xl lg:text-7xl leading-tight tracking-tight mb-6">
            Building delightful
            <br />
            <span className="text-gradient">interfaces</span> that convert
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mb-6">
            I craft premium, high‑performance React experiences with meticulous UI/UX, smooth motion, and conversion‑focused design.
          </p>
          <div className="text-xl mb-8">
            <TypingCycle words={["React Developer", "UI/UX Designer", "Full‑Stack Creator"]} />
          </div>
          <div className="flex flex-wrap gap-4">
            <Button variant="hero" data-cursor="hover"><a href="#projects">Explore My Work</a></Button>
            <Button variant="glass" data-cursor="hover"><a href="#contact">Let's Connect</a></Button>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="relative">
            <img src={avatar} alt="Void Bloom avatar" className="h-64 w-64 rounded-2xl object-cover glass shadow-glow animate-breathing" loading="lazy" />
            <div className="absolute -inset-2 rounded-3xl -z-10 rainbow-border" />
          </motion.div>
        </div>
      </div>

      <div className="mt-16 flex items-center justify-center text-muted-foreground">
        <span className="text-sm">Scroll</span>
        <span className="ml-2 h-8 w-0.5 bg-foreground/30 rounded-full animate-float" />
      </div>
    </section>
  );
}
