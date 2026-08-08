import { experience } from "../data/portfolioData.js";
import SectionHeading from "./SectionHeading.jsx";
import EmployerCard from "./EmployerCard.jsx";

export default function ExperienceSection() {
  return (
    <section id="experience" className="px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="01 · Komerční praxe" title="Kde jsem pracoval" />
        <div className="space-y-6">
          {experience.map((employer) => (
            <EmployerCard key={employer.company} employer={employer} />
          ))}
        </div>
      </div>
    </section>
  );
}