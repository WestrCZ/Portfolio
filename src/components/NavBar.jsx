import { profile } from "../data/portfolioData.js";

const NAV_LINKS = [
  { href: "#experience", label: "Praxe" },
  { href: "#projects", label: "Projekty" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Kontakt" },
];

export default function NavBar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <nav className="mx-auto max-w-5xl px-6 mt-4">
        <div className="glass flex items-center justify-between rounded-full px-5 py-3 shadow-lg shadow-black/30">
          <a href="#top" className="font-mono text-xs text-aurora tracking-wide">
            ~/janek
            <span className="inline-block h-[2px] w-2 bg-current align-baseline ml-0.5 animate-blink" />
          </a>
          <ul className="hidden sm:flex items-center gap-7 font-body text-sm text-slate-400">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-bone transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={profile.links.email}
            className="font-body text-xs px-4 py-1.5 rounded-full border border-gold/40 text-gold hover:bg-gold/10 transition-colors"
          >
            Napsat
          </a>
        </div>
      </nav>
    </header>
  );
}