import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import picklesImg from "@/assets/pickle_img.png";
import commerceImg from "@/assets/clothing_img.png";
import portfolioImg from "@/assets/food_img.png";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Code2 } from "lucide-react";

const projects = [
  {
    title: "Pickles E-Commerce Website",
    image: picklesImg,
    stack: ["React", "GSAP", "Tailwind", "ShadCN", "Framer-Motion"],
    result: "40% conversion increase",
    description: "A website build for Pickle brands to boost their sales.",
    demo: "https://dds3579.github.io/mithila-magic-pickle-shop/",
    code: "https://www.github.com/dds3579/mithila-magic-pickle-shop",
  },
  {
    title: "Clothing E‑commerce Experience",
    image: commerceImg,
    stack: ["React", "TypeScript", "Tailwind", "Framer-Motion", "Vite"],
    result: "+20% Increase in Sale",
    description: "Immersive product pages and frictionless cart flows.",
    demo: "https://dds3579.github.io/clothing_demo_two/",
    code: "https://github.com/dds3579/clothing_demo_two/",
  },
  {
    title: "Foodsite Demo",
    image: portfolioImg,
    stack: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    result: "✨ 95+ Lighthouse scores",
    description: "Blazing fast, animated portfolio framework.",
    demo: "https://dds3579.github.io/foodsite",
    code: "https://github.com/dds3579/foodsite",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-20">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-display font-semibold mb-10">Featured Projects</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 items-stretch">
          {projects.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
              <Card className="group overflow-hidden glass shadow-elegant hover:shadow-glow transition h-full flex flex-col min-h-[420px]">
                <div className="relative overflow-hidden">
                  <img src={p.image} alt={`${p.title} screenshot`} className="w-full h-48 object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition" />
                </div>
                <CardContent className="pt-4 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium">{p.title}</h3>
                    <span className="text-sm text-gradient font-semibold">{p.result}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{p.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.stack.map(s => (
                      <Badge key={s} variant="secondary" className="glass">{s}</Badge>
                    ))}
                  </div>
                  <div className="mt-auto flex gap-3 pt-2">
                    <Button asChild variant="gradient"><a href={p.demo} aria-label={`${p.title} live demo`} className="inline-flex items-center gap-2"><ExternalLink className="h-4 w-4" /> Live Demo</a></Button>
                    <Button asChild variant="glass"><a href={p.code} aria-label={`${p.title} source code`} className="inline-flex items-center gap-2"><Code2 className="h-4 w-4" /> View Code</a></Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
