import { useI18n } from "../i18n/I18nProvider.jsx";
import SectionHeading from "./SectionHeading.jsx";
import ProjectCard from "./ProjectCard.jsx";

export default function ProjectSection() {
  const { t, data } = useI18n();

  return (
    <section id="projects" className="px-6 scroll-mt-28 md:scroll-mt-20">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow={t.projects.eyebrow} title={t.projects.title} />
        <div className="grid sm:grid-cols-2 gap-5">
          {data.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
