import { useI18n } from "../i18n/I18nProvider.jsx";
import LanguageSwitcher from "./LanguageSwitcher.jsx";

export default function NavBar() {
  const { t, data } = useI18n();

  const navLinks = [
    { href: "#experience", label: t.nav.experience },
    { href: "#projects", label: t.nav.projects },
    { href: "#stack", label: t.nav.stack },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <nav className="mx-auto max-w-5xl px-6 mt-4">
        <div className="glass flex items-center justify-between rounded-full px-5 py-3 shadow-lg shadow-black/30 gap-4">
          <a href="#top" className="font-mono text-xs text-aurora tracking-wide shrink-0">
            ~/janek
            <span className="inline-block h-[2px] w-2 bg-current align-baseline ml-0.5 animate-blink" />
          </a>
          <ul className="hidden sm:flex items-center gap-7 font-body text-sm text-slate-400">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-bone transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3 shrink-0">
            <LanguageSwitcher />
            <a
              href={data.profile.links.email}
              className="font-body text-xs px-4 py-1.5 rounded-full border border-gold/40 text-gold hover:bg-gold/10 transition-colors"
            >
              {t.nav.writeEmail}
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
