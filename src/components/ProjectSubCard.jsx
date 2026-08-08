// Rendered multiple times (once per project inside the RIGANTI experience block),
//so it receives its data via props instead of importing directly.
export default function ProjectSubCard({ project }) {
  return (
    <div className="rounded-xl border border-white/10 bg-base-900/40 p-5 hover:border-aurora/30 transition-colors">
      <h4 className="font-display font-medium text-lg text-bone">{project.name}</h4>
      <p className="mt-1 text-sm text-slate-500">{project.summary}</p>
      <p className="mt-3 text-sm text-slate-400 leading-relaxed">
        {project.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="font-mono text-[11px] px-2 py-1 rounded-md bg-fjord/10 text-fjord border border-fjord/25"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
