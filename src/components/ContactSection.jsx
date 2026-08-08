import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/portfolioData.js";

export default function ContactSection() {
  return (
    <section id="contact" className="px-6 pb-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-mono text-xs text-gold mb-3 tracking-wide">04 · Kontakt</p>
        <h2 className="font-display font-semibold text-3xl sm:text-4xl text-bone">
          Pojďme spolu něco postavit.
        </h2>
        <p className="mt-4 text-slate-400 max-w-xl mx-auto">
          {profile.availability}. Ozvi se, pokud hledáš backendového vývojáře
          se smyslem pro architekturu a bezpečnost.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3 flex-wrap">
          <a
            href={profile.links.email}
            className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 font-body text-sm font-medium text-base-950 hover:bg-gold/90 transition-colors"
          >
            <Mail size={16} /> Napsat email
          </a>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-body text-sm font-medium text-slate-200 hover:border-aurora/40 hover:text-aurora transition-colors"
          >
            <Github size={16} /> GitHub
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-body text-sm font-medium text-slate-200 hover:border-fjord/40 hover:text-fjord transition-colors"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}