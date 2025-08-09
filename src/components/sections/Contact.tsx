import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    toast({ title: "Message sent", description: "Thanks! I'll get back to you soon." });
  }

  return (
    <section id="contact" className="py-16 md:py-20">
      <div className="container grid lg:grid-cols-2 gap-6 md:gap-10 items-start">
        <div className="glass rounded-xl p-8 shadow-elegant">
          <h2 className="text-3xl font-display font-semibold mb-4">Let's work together</h2>
          <p className="text-muted-foreground mb-6">Have a project or role in mind? Drop a line or connect via socials.</p>
          <div className="flex flex-wrap gap-3">
            <a href="mailto:hello@example.com" className="btn-glass inline-flex items-center gap-2 px-3 py-2 rounded-md" aria-label="Email"><Mail className="h-4 w-4" /> Email</a>
            <a href="#" className="btn-glass inline-flex items-center gap-2 px-3 py-2 rounded-md" aria-label="GitHub"><Github className="h-4 w-4" /> GitHub</a>
            <a href="#" className="btn-glass inline-flex items-center gap-2 px-3 py-2 rounded-md" aria-label="LinkedIn"><Linkedin className="h-4 w-4" /> LinkedIn</a>
            <a href="#" className="btn-glass inline-flex items-center gap-2 px-3 py-2 rounded-md" aria-label="Twitter"><Twitter className="h-4 w-4" /> Twitter</a>
          </div>
        </div>

        <form onSubmit={onSubmit} className="glass rounded-xl p-8 shadow-elegant">
          <div className="grid gap-4">
            <div>
              <label className="text-sm mb-2 block">Name</label>
              <Input required placeholder="Your name" />
            </div>
            <div>
              <label className="text-sm mb-2 block">Email</label>
              <Input type="email" required placeholder="you@example.com" />
            </div>
            <div>
              <label className="text-sm mb-2 block">Message</label>
              <Textarea required placeholder="Tell me about your project" rows={5} />
            </div>
            <div>
              <Button type="submit" variant="gradient" data-cursor="hover">Send Message</Button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
