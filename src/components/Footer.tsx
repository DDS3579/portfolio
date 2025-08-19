export default function Footer() {
  return (
    <footer className="border-t mt-20">
      <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Divya Darsheel Sharma. All rights reserved.</p>
        <nav className="flex items-center gap-5 text-sm">
          <a href="#projects" className="hover:text-foreground text-muted-foreground">Projects</a>
          <a href="#about" className="hover:text-foreground text-muted-foreground">About</a>
          <a href="#skills" className="hover:text-foreground text-muted-foreground">Skills</a>
          <a href="#contact" className="hover:text-foreground text-muted-foreground">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
