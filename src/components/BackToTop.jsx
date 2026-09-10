import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { useI18n } from "../i18n/I18nProvider.jsx";

const SCROLL_THRESHOLD_PX = 400;

export default function BackToTop() {
  const { t } = useI18n();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > SCROLL_THRESHOLD_PX);
    }

    // Run once on mount too, in case the page is already scrolled (e.g.
    // reload with scroll restoration, or navigating in with a hash link).
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleClick() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={t.backToTop.label}
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={`fixed bottom-6 right-6 z-40 inline-flex items-center justify-center gap-2 rounded-full border border-gold/40 bg-base-900/80 backdrop-blur px-3 py-3 sm:px-4 sm:py-2.5 text-gold shadow-lg shadow-black/30 transition-all duration-300 ease-out hover:border-aurora/40 hover:text-aurora hover:bg-base-900/95 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-3 pointer-events-none"
      }`}
    >
      <ChevronUp size={18} aria-hidden="true" />
      <span className="hidden sm:inline font-body text-sm font-medium">
        {t.backToTop.label}
      </span>
    </button>
  );
}
