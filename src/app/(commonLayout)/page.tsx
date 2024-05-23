import About from "@/components/home/about";
import Skills from "@/components/home/skills";
import Experience from "@/components/home/experience";
import Hero from "@/components/home/hero";
import Projects from "@/components/home/projects";
import Blog from "@/components/home/blog";
import Contact from "@/components/home/contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Blog />
      <Contact />
    </main>
  );
}
