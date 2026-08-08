import { projects } from "../data/portfolioData.js";
import SectionHeading from "./SectionHeading.jsx";
import ProjectCard from "./ProjectCard.jsx";

export default function ProjectSection() {
  return (
    <section id="projects" className="px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="02 · Projekty" title="Na čem jsem dělal mimo práci" />
        <div className="grid sm:grid-cols-2 gap-5">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}