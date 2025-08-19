import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Moon, Sun, Menu, Download } from "lucide-react";
import { useTheme } from "next-themes";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  return (
    <Button
      variant="glass"
      size="icon"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </Button>
  );
}

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all ${scrolled ? "glass border-b" : "bg-transparent"}`}>
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2" aria-label="Void Bloom home">
          <img src="https://avatars.githubusercontent.com/u/87577570" className="h-8 w-8 rounded-md bg-gradient-primary shadow-glow animate-breathing" />
          <span className="font-display text-lg tracking-tight">Divya D. Sharma</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-muted-foreground hover:text-foreground transition story-link">
              {item.label}
            </a>
          ))}
          <ThemeToggle />
          <Button asChild variant="gradient" className="ml-2">
            <a href="#" download data-cursor="hover" className="inline-flex items-center gap-2">
              <Download className="h-4 w-4" /> Resume
            </a>
          </Button>
        </nav>

        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="glass" size="icon" aria-label="Open menu"><Menu className="h-4 w-4" /></Button>
            </SheetTrigger>
            <SheetContent side="right" className="glass">
              <div className="mt-8 flex flex-col gap-4">
                {NAV.map((item) => (
                  <a key={item.href} href={item.href} className="text-lg" onClick={() => (document.activeElement as HTMLElement)?.blur()}>
                    {item.label}
                  </a>
                ))}
                <Button asChild variant="gradient" className="mt-2">
                  <a href="#" download className="inline-flex items-center gap-2"><Download className="h-4 w-4" /> Resume</a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
