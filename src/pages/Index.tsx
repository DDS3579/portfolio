import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import CommandMenu from "@/components/CommandMenu";

const Index = () => {
  return (
    <div className="font-sans">
      <Header />
      <main>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <CommandMenu />
    </div>
  );
};

export default Index;
