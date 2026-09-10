import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useI18n } from "../i18n/I18nProvider.jsx";
import LanguageSwitcher from "./LanguageSwitcher.jsx";
import EmailButton from "./EmailButton.jsx";

export default function NavBar() {
  const { t, data } = useI18n();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#experience", label: t.nav.experience },
    { href: "#projects", label: t.nav.projects },
    { href: "#stack", label: t.nav.stack },
    { href: "#contact", label: t.nav.contact },
  ];

  function closeMenu() {
    setIsMenuOpen(false);
  }
  useEffect(() => {
    if (isMenuOpen) {
      const scrollY = window.scrollY;

      document.body.classList.add("mobile-nav-open");
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.top = `-${scrollY}px`;
    } else {
      const scrollY = document.body.style.top;

      document.body.classList.remove("mobile-nav-open");
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";

      if (scrollY) {
        document.documentElement.style.scrollBehavior = "auto";
        window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
        document.documentElement.style.scrollBehavior = "";
      }
    }
    return () => {
      document.body.classList.remove("mobile-nav-open");
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [isMenuOpen]);

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
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <LanguageSwitcher />
            <EmailButton
              location="navbar"
              email={data.profile.links.email}
              label={t.nav.writeEmail}
              className="font-body text-xs px-4 py-1.5 rounded-full border border-gold/40 text-gold hover:bg-gold/10 transition-colors"
            />
          </div>
          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            aria-label={t.nav.openMenu}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav-overlay"
            className="sm:hidden inline-flex items-center justify-center min-w-[44px] min-h-[44px] -mr-2 rounded-full text-slate-300 hover:text-aurora transition-colors"
          >
            <Menu size={22} aria-hidden="true" />
          </button>
        </div>
      </nav>
      <div
        id="mobile-nav-overlay"
        role="dialog"
        aria-modal="true"
        aria-label={t.nav.mobileMenuLabel}
        className={`fixed inset-0 z-[60] sm:hidden bg-base-950/95 backdrop-blur-2xl flex flex-col transition-all duration-300 ease-out ${
          isMenuOpen
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-3 invisible pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 shrink-0">
          <p className="font-mono text-xs text-slate-500">
            <span className="text-slate-600">$ </span>navigation --open
          </p>
          <button
            type="button"
            onClick={closeMenu}
            aria-label={t.nav.closeMenu}
            className="inline-flex items-center justify-center min-w-[44px] min-h-[44px] -mr-2 rounded-full text-slate-300 hover:text-aurora transition-colors"
          >
            <X size={22} aria-hidden="true" />
          </button>
        </div>
        <ul className="flex-1 flex flex-col justify-center gap-1 px-6 font-display text-2xl text-bone overflow-y-auto">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={closeMenu}
                className="flex items-center gap-3 py-4 min-h-[44px] hover:text-aurora transition-colors"
              >
                <span className="text-gold/70 font-mono text-lg" aria-hidden="true">
                  {/* Combined Rune Symbol */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {/* Upper part */}
                    <path d="M 14 3.5 L 5 9.5 L 12.5 14.5" />
                    {/* Lower part */}
                    <path d="M 11.5 9.5 L 19 14.5 L 10 20.5" />
                    {/* Left vertical line */}
                    <path d="M 3 3 V 21" />
                    {/* Right vertical line */}
                    <path d="M 21 3 V 21" />
                  </svg>
                </span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="shrink-0 px-6 py-6 border-t border-white/10 flex items-center justify-between gap-4 flex-wrap">
          <LanguageSwitcher size="large" />
          <EmailButton
            location="navbar"
            email={data.profile.links.email}
            label={t.nav.writeEmail}
            onMailtoTriggered={closeMenu}
            className="inline-flex items-center justify-center min-h-[44px] px-6 py-2.5 rounded-full bg-gold font-body text-sm font-medium text-base-950 hover:bg-gold/90 transition-colors"
          />
        </div>
      </div>
    </header>
  );
}
