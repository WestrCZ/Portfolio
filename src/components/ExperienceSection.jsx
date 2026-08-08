import { experience } from "../data/portfolioData.js";
import SectionHeading from "./SectionHeading.jsx";
import ProjectSubCard from "./ProjectSubCard.jsx";

export default function ExperienceSection() {
  return (
    <section id="experience" className="px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="01 · Komerční praxe" title="Kde jsem pracoval" />
        <div className="glass rounded-2xl p-6 sm:p-8">
          <div className="mb-6">
            <h3 className="font-display text-xl text-bone">{experience.company}</h3>
            <p className="font-mono text-xs text-slate-500 mt-1">
              {experience.role} · {experience.duration}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {experience.projects.map((project) => (
              <ProjectSubCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
