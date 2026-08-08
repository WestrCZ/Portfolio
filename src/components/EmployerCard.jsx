import ProjectSubCard from "./ProjectSubCard.jsx";

export default function EmployerCard({ employer }) {
  return (
    <div className="glass rounded-2xl p-6 sm:p-8">
      <div className="mb-6">
        <h3 className="font-display text-xl text-bone">{employer.company}</h3>
        <p className="font-mono text-xs text-slate-500 mt-1">
          {employer.role}
          {employer.duration ? ` · ${employer.duration}` : ""}
        </p>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        {employer.projects.map((project) => (
          <ProjectSubCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}