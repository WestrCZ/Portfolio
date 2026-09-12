import { useEffect, useRef, useState } from "react";
import { ChevronUp } from "lucide-react";
import { useI18n } from "../i18n/I18nProvider.jsx";

const SCROLL_THRESHOLD_PX = 400;

export default function BackToTop() {
  const { t } = useI18n();
  const [visible, setVisible] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > SCROLL_THRESHOLD_PX);
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keep the hidden button fully out of the focus/assistive-tech tree via
  // the native `inert` property, set imperatively via a ref. This is set
  // as a JS property (not a JSX attribute) on purpose: `inert` is a
  // boolean HTML attribute, and boolean attributes in JSX are controlled
  // by *presence*, not by their string value — `inert="false"` would
  // still be treated as inert by the browser. Setting `.inert` as a DOM
  // property avoids that trap entirely.
  //
  // This also fixes a real accessibility bug: the previous
  // `aria-hidden={!visible}` + `tabIndex={visible ? 0 : -1}` combination
  // could hide a button that still held keyboard focus (e.g. a keyboard
  // user tabs to it while visible, then scrolls back up) — Chrome flags
  // this with "Blocked aria-hidden on an element because its descendant
  // retained focus". `inert` removes focusability itself, so the
  // conflict can't happen; the explicit blur() below is a defensive
  // fallback for any browser where that isn't fully automatic yet.
  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    button.inert = !visible;
    if (!visible && document.activeElement === button) {
      button.blur();
    }
  }, [visible]);

  function handleClick() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={handleClick}
      aria-label={t.backToTop.label}
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
