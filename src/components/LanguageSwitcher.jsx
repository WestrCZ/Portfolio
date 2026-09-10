import { useI18n } from "../i18n/I18nProvider.jsx";

// Terminal-styled "$ lang: [CZ] / ENG" language switcher. Real <button>
// elements (not clickable divs/spans), keyboard accessible, with
// aria-pressed marking the active language.
export default function LanguageSwitcher({ size = "compact" }) {
  const { locale, setLocale, t } = useI18n();

  // GoatCounter integration (A2): fires a custom event whenever the
  // visitor actually changes language (not on every render, and not when
  // they click the already-active button — we only want to *count* a real
  // switch, not a no-op click). `window.goatcounter` only exists once the
  // async count.js script from index.html has finished loading, so the
  // `?.` optional chaining matters: without it, a click in the brief
  // window before that script loads would throw instead of just skipping
  // the analytics call for that one click.
  function handleLanguageChange(lang) {
    if (lang !== locale) {
      window.goatcounter?.count({
        path: `lang-switch-${lang}`,
        title: `Language changed to ${lang}`,
        event: true,
      });
    }
    setLocale(lang);
  }

  const buttonSizeClasses =
    size === "large"
      ? "min-w-[44px] min-h-[44px] px-3 py-2.5 text-sm"
      : "px-1.5 py-0.5";

  return (
    <div
      role="group"
      aria-label={t.nav.languageSwitcherLabel}
      className={`inline-flex items-center gap-1 font-mono ${size === "large" ? "text-sm" : "text-xs"}`}
    >
      <span aria-hidden="true" className="text-slate-600">
        $ lang:
      </span>
      <button
        type="button"
        onClick={() => handleLanguageChange("cs")}
        aria-pressed={locale === "cs"}
        className={`rounded transition-colors inline-flex items-center justify-center ${buttonSizeClasses} ${
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
        onClick={() => handleLanguageChange("en")}
        aria-pressed={locale === "en"}
        className={`rounded transition-colors inline-flex items-center justify-center ${buttonSizeClasses} ${
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
