// Server component — no framer-motion, no useInView
import SectionHeading from "@/components/ui/SectionHeading";
import TechPill from "@/components/ui/TechPill";
import { projects } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="01"
          label="Selected Engineering Work"
          title="Featured Projects & ML Pipelines"
        />
        <div className="space-y-5">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
