import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SkillsMarquee from "@/components/SkillsMarquee";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <SkillsMarquee />
      <Projects />
      <Experience />
      <Education />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
