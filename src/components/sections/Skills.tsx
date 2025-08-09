import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const skills = [
  { name: "HTML", group: "Core" },
  { name: "CSS", group: "Core" },
  { name: "JavaScript", group: "Core" },
  { name: "TypeScript", group: "Core" },
  { name: "React.js", group: "Frameworks" },
  { name: "Next.js", group: "Frameworks" },
  { name: "Figma", group: "Design" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-20 relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute left-1/4 top-6 h-32 w-32 rounded-full bg-gradient-primary opacity-20 blur-3xl animate-float" />
        <div className="absolute right-1/5 bottom-0 h-40 w-40 rounded-full bg-gradient-primary opacity-10 blur-3xl animate-float" />
      </div>
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-display font-semibold mb-10">Technical Skills</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass rounded-xl p-6 shadow-elegant">
            <h3 className="font-medium mb-4">Skill Cloud</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((s, i) => (
                <motion.div key={s.name} whileHover={{ scale: 1.06 }}>
                  <Badge variant="secondary" className="glass">{s.name}</Badge>
                </motion.div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-4">Currently learning: <span className="text-gradient font-medium">Three.js</span></p>
          </div>

          <div className="glass rounded-xl p-6 shadow-elegant">
            <h3 className="font-medium mb-4">Proficiency Highlights</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "HTML/CSS", level: 95 },
                { label: "JavaScript/TypeScript", level: 90 },
                { label: "React/Next.js", level: 92 },
                { label: "Design (Figma)", level: 85 },
              ].map((x) => (
                <div key={x.label} className="">
                  <div className="flex justify-between text-sm mb-1"><span>{x.label}</span><span className="text-muted-foreground">{x.level}%</span></div>
                  <div className="h-2 rounded-full bg-secondary overflow-hidden">
                    <motion.div className="h-full bg-gradient-primary" initial={{ width: 0 }} whileInView={{ width: `${x.level}%` }} viewport={{ once: true }} transition={{ duration: 0.8 }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
