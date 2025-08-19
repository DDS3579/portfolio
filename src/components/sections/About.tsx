import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-20">
      <div className="container grid lg:grid-cols-2 gap-6 md:gap-10 items-start">
        <div className="glass rounded-xl p-8 shadow-elegant">
          <h2 className="text-3xl font-display font-semibold mb-4">About Me</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            I'm a front‑end engineer obsessed with crafting delightful, performant interfaces. I combine strong UX instincts with clean, scalable code to ship products that people love.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            My superpowers: design systems, motion, accessibility, and turning fuzzy ideas into polished reality.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-medium mb-4">Journey</h3>
          <div className="relative pl-6">
            <div className="absolute left-2 top-0 bottom-0 w-px bg-border" />
            {[
              { year: "2025", text: "Founder at Digira, React Developer & UI / UX Designer" },
              {year: "2024", text:"Got into UI / UX Design"},
              { year: "2022", text: "Learnt React and got into Building Projects" },
              { year: "2021", text: "Started with Front-End Development Working on Small Projects" },
            ].map((item, i) => (
              <motion.div key={item.year} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="mb-6">
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-primary shadow-glow" />
                  <span className="text-sm text-muted-foreground">{item.year}</span>
                </div>
                <p className="mt-2">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
