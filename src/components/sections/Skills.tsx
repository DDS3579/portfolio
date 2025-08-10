import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiNextdotjs, SiReact, SiFigma, SiThreedotjs, SiFramer, SiGreensock } from "react-icons/si";
const skills = [
  { name: "HTML", Icon: SiHtml5 },
  { name: "CSS", Icon: SiCss3 },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "React.js", Icon: SiReact },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "Figma", Icon: SiFigma },
  { name: "Three.js", Icon: SiThreedotjs },
  { name: "Framer Motion", Icon: SiFramer },
  { name: "GSAP", Icon: SiGreensock },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-20 relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute left-1/4 top-6 h-32 w-32 rounded-full bg-gradient-primary opacity-20 blur-3xl animate-float" />
        <div className="absolute right-1/5 bottom-0 h-40 w-40 rounded-full bg-gradient-primary opacity-10 blur-3xl animate-float" />
      </div>
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">Technical Skills</h2>
        <div className="h-0.5 w-16 bg-gradient-primary rounded-full mb-8" aria-hidden />
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass rounded-xl p-6 shadow-elegant">
            <h3 className="font-medium mb-4">Skill Cloud</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((s, i) => (
                <motion.div
                  key={s.name}
                  whileHover={{ scale: 1.06 }}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.03 }}
                >
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Badge
                        variant="secondary"
                        className="glass hover-scale ring-1 ring-ring/40 shadow-elegant p-2"
                        aria-label={s.name}
                      >
                        <s.Icon size={18} aria-hidden="true" />
                        <span className="sr-only">{s.name}</span>
                      </Badge>
                    </TooltipTrigger>
                    <TooltipContent side="top">{s.name}</TooltipContent>
                  </Tooltip>
                </motion.div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-4">Currently learning: <span className="text-gradient font-medium">Next.js</span></p>
          </div>

          <div className="glass rounded-xl p-6 shadow-elegant">
            <h3 className="font-medium mb-4">Proficiency Highlights</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { name: "Design (Figma)", icons: [SiFigma], level: 85 },
                { name: "React/Next.js", icons: [SiReact, SiNextdotjs], level: 92 },
                { name: "JavaScript/TypeScript", icons: [SiJavascript, SiTypescript], level: 90 },
                { name: "HTML/CSS", icons: [SiHtml5, SiCss3], level: 95 },
              ].map((x) => (
                <div key={x.name} className="group rounded-xl p-4 border border-border/50 glass hover-scale shadow-elegant">
                  <div className="flex items-center gap-3 mb-3" aria-label={x.name}>
                    <div className="flex -space-x-2">
                      {x.icons.map((Icon, idx) => (
                        <div key={idx} className="rounded-full p-2 bg-card ring-1 ring-ring/40 shadow-glow">
                          <Icon size={40} aria-hidden className={idx === 0 ? "text-foreground" : "text-primary"} />
                        </div>
                      ))}
                    </div>
                    <span className="sr-only">{x.name}</span>
                  </div>
                  <div className="h-3 rounded-full bg-secondary/70 overflow-hidden relative">
                    <motion.div
                      className="h-full bg-gradient-primary shadow-glow"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${x.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1 }}
                    />
                    <div
                      className="absolute inset-0 pointer-events-none opacity-30 bg-[repeating-linear-gradient(90deg,transparent,transparent_12px,hsla(var(--primary)/0.15)_12px,hsla(var(--primary)/0.15)_24px)]"
                      aria-hidden
                    />
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
