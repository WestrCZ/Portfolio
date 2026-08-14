import {ExternalLink} from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <div className="glass rounded-2xl p-6 sm:p-7 hover:border-aurora/25 transition-colors">
      <h3 className="font-display text-lg text-bone">{project.name}</h3>
      <p className="font-mono text-xs text-aurora mt-1">{project.role}</p>
      <p className="mt-4 text-sm text-slate-400 leading-relaxed">
        {project.description}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-[11px] px-2 py-1 rounded-md bg-white/5 text-slate-300 border border-white/10"
          >
            {tag}
          </span>
        ))}
      </div>
      {project.links.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-4 pt-4 border-t border-white/5">
          {project.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-body text-slate-400 hover:text-gold transition-colors"
            >
              {link.label} <ExternalLink size={12} aria-hidden="true" />
            </a>
          ))}
        </div>
      )}
    </div>
  );
}