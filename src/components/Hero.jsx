import { MapPin, Github, Linkedin, Mail } from "lucide-react";
import { useI18n } from "../i18n/I18nProvider.jsx";
import TerminalBadge from "./TerminalBadge.jsx";

export default function Hero() {
  const { t, data } = useI18n();
  const { profile } = data;

  return (
    <section id="top" className="relative pt-40 pb-10 px-6 overflow-hidden">
      <div className="absolute inset-0 contour-texture pointer-events-none" />
      <div className="relative mx-auto max-w-5xl">
        <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-end animate-fadeUp">
          <div>
            <h1 className="font-display font-semibold text-4xl sm:text-6xl leading-[1.08] tracking-tight text-bone">
              {profile.name}
              <span className="block mt-2 text-aurora">{profile.title}</span>
            </h1>
            <p className="mt-6 max-w-xl font-body text-base sm:text-lg text-slate-400 leading-relaxed">
              {profile.bio}
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-base-900/40 px-3 py-1.5 font-mono text-xs sm:text-sm text-slate-300">
                <MapPin size={14} className="text-aurora" aria-hidden="true" />
                {profile.location}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-aurora/25 bg-aurora/5 px-3 py-1.5 font-mono text-xs sm:text-sm text-aurora">
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-aurora opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-aurora" />
                </span>
                {profile.availability}
              </span>
            </div>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-aurora px-5 py-2.5 font-body text-sm font-medium text-base-950 hover:bg-aurora/90 transition-colors"
              >
                <Github size={16} aria-hidden="true" /> GitHub
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 font-body text-sm font-medium text-slate-200 hover:border-fjord/50 hover:text-fjord transition-colors"
              >
                <Linkedin size={16} aria-hidden="true" /> LinkedIn
              </a>
              <a
                href={profile.links.email}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 font-body text-sm font-medium text-slate-200 hover:border-gold/50 hover:text-gold transition-colors"
              >
                <Mail size={16} aria-hidden="true" /> {t.hero.emailLabel}
              </a>
            </div>
          </div>

          <div className="lg:pb-1">
            <TerminalBadge />
          </div>
        </div>
      </div>
    </section>
  );
}
