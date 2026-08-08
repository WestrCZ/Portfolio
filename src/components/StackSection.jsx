import { Cpu, Code2, Database, ShieldCheck, Folders, LayoutPanelLeft, CopyCheck } from "lucide-react";
import { skills } from "../data/portfolioData.js";
import SectionHeading from "./SectionHeading.jsx";

// Maps the textual "icon" key from portfolioData.js to an actual lucide
// component, so the data file never has to import React components.
const ICONS = { Cpu, Code2, Database, ShieldCheck, Folders, LayoutPanelLeft, CopyCheck };

export default function StackSection() {
  return (
    <section id="stack" className="px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="03 · Technologie" title="Se kterými nástroji pracuji" />
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => {
            const Icon = ICONS[skill.icon] ?? Code2;
            return (
              <span
                key={skill.name}
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-base-900/40 px-4 py-2.5 font-mono text-sm text-slate-300 hover:border-aurora/30 hover:text-aurora transition-colors"
              >
                <Icon size={15} className="text-aurora" />
                {skill.name}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}