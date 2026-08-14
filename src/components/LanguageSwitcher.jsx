import { useI18n } from "../i18n/I18nProvider.jsx";

// Terminal-styled "$ lang: [CZ] / ENG" language switcher. Real <button>
// elements (not clickable divs/spans), keyboard accessible, with
// aria-pressed marking the active language.
export default function LanguageSwitcher() {
  const { locale, setLocale, t } = useI18n();

  return (
    <div
      role="group"
      aria-label={t.nav.languageSwitcherLabel}
      className="inline-flex items-center gap-1 font-mono text-xs"
    >
      <span aria-hidden="true" className="text-slate-600">
        $ lang:
      </span>
      <button
        type="button"
        onClick={() => setLocale("cs")}
        aria-pressed={locale === "cs"}
        className={`px-1.5 py-0.5 rounded transition-colors ${
          locale === "cs"
            ? "text-aurora"
            : "text-slate-500 hover:text-slate-300"
        }`}
      >
        {locale === "cs" ? "[CZ]" : "CZ"}
      </button>

      <span aria-hidden="true" className="text-slate-600">
        /
      </span>

      <button
        type="button"
        onClick={() => setLocale("en")}
        aria-pressed={locale === "en"}
        className={`px-1.5 py-0.5 rounded transition-colors ${
          locale === "en"
            ? "text-aurora"
            : "text-slate-500 hover:text-slate-300"
        }`}
      >
        {locale === "en" ? "[ENG]" : "ENG"}
      </button>
    </div>
  );
}
