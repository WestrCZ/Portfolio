import { useI18n } from "../i18n/I18nProvider.jsx";
import SectionHeading from "./SectionHeading.jsx";
import EmployerCard from "./EmployerCard.jsx";

export default function ExperienceSection() {
  const { t, data } = useI18n();

  return (
    <section id="experience" className="px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow={t.experience.eyebrow} title={t.experience.title} />
        <div className="space-y-6">
          {data.experience.map((employer) => (
            <EmployerCard key={employer.company} employer={employer} />
          ))}
        </div>
      </div>
    </section>
  );
}
