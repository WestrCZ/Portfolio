import { useEffect, useId, useRef, useState } from "react";
import { Mail } from "lucide-react";
import { useI18n } from "../i18n/I18nProvider.jsx";
import { trackEvent } from "../utils/analytics.js";

// How long the "open in mail client" fallback link stays visible after a
// successful copy. The "Copied!" label on the main button shares the same
// timer, so both reset together.
const REVEAL_DURATION_MS = 4000;

// `email` is expected as a full "mailto:..." URI (as stored on
// profile.links.email). For the clipboard we only want the bare address, so
// we strip the "mailto:" prefix (and any query string, e.g. "?subject=...").
function extractEmailAddress(mailtoHref) {
  return mailtoHref.replace(/^mailto:/i, "").split("?")[0];
}

// Universal e-mail action used in Hero, NavBar and ContactSection. Each
// section keeps its own visual identity for the *primary* button via
// `className` — this component only owns the copy/mailto/tooltip behavior.
//
// The reveal popup (tooltip + "open in mail client" box) is always anchored
// to the button's own right edge, and opens either above or below it via
// `popupPosition`. That's what keeps it on-screen: since the button itself
// is necessarily visible for the person to have clicked it, anchoring the
// popup to the button's own edge (instead of centering it under a possibly
// much narrower button) means the popup can only ever extend inward from an
// edge that's already on-screen.
export default function EmailButton({
  location, // "hero" | "navbar" | "contact" — used for GoatCounter events
  email, // full "mailto:..." string
  label,
  icon: Icon,
  iconSize = 16,
  className = "",
  wrapperClassName = "",
  popupPosition = "below", // "below" | "above" — pass "above" only when the button sits near the bottom of a fixed, non-scrolling container (e.g. the mobile nav overlay), where there's no room to open downward.
  onMailtoTriggered, // optional — e.g. closing the mobile nav overlay
}) {
  const { t } = useI18n();
  const [copied, setCopied] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const timeoutRef = useRef(null);
  const tooltipId = useId();

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  async function handleCopyClick(event) {
    // Clear the hover/focus state right away — on touch devices a button
    // can stay ":hover"/":focus" after a tap, which would otherwise leave
    // the tooltip stuck on screen at the same time as the reveal popup.
    setIsHovering(false);
    event.currentTarget.blur();

    const address = extractEmailAddress(email);

    try {
      await navigator.clipboard.writeText(address);
    } catch {
      // Clipboard API can fail (insecure context, denied permission,
      // unsupported browser, ...). The mailto fallback below still gets
      // the visitor to the same place, so we just carry on.
    }

    trackEvent(`${location}-email-copy`);

    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setCopied(true);
    timeoutRef.current = setTimeout(() => setCopied(false), REVEAL_DURATION_MS);
  }

  function handleMailtoClick() {
    // This is a real <a href="mailto:..."> element — the browser handles
    // the navigation natively (no preventDefault, no manual
    // window.location assignment). We only piggyback tracking + local
    // state reset on the same click.
    //
    // Escalation rule: a mailto click counts ONLY the mailto event, never
    // a second copy event — trackEvent is called exactly once here.
    trackEvent(`${location}-email-mailto`);

    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setCopied(false);
    onMailtoTriggered?.();
  }

  const verticalClass = popupPosition === "above" ? "bottom-full mb-2" : "top-full mt-2";

  return (
    <span className={`relative inline-flex ${wrapperClassName}`}>
      <button
        type="button"
        onClick={handleCopyClick}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onFocus={() => setIsHovering(true)}
        onBlur={() => setIsHovering(false)}
        aria-describedby={isHovering && !copied ? tooltipId : undefined}
        className={className}
      >
        {Icon ? <Icon size={iconSize} aria-hidden="true" /> : null}
        {copied ? t.email.copied : label}
      </button>

      {isHovering && !copied && (
        <span
          id={tooltipId}
          role="tooltip"
          className={`pointer-events-none absolute ${verticalClass} right-0 z-20 max-w-[min(85vw,260px)] whitespace-normal rounded-md border border-white/10 bg-base-900 px-2.5 py-1.5 font-mono text-[11px] text-slate-300 shadow-xl shadow-black/50`}
        >
          {t.email.tooltip}
        </span>
      )}

      {copied && (
        <span
          className={`absolute ${verticalClass} right-0 z-20 flex max-w-[min(90vw,280px)] items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-gold/40 bg-base-950 p-2 shadow-xl shadow-black/50 animate-fadeUp`}
        >
          <a
            href={email}
            onClick={handleMailtoClick}
            className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 font-body text-xs font-medium text-gold transition-colors hover:text-aurora"
          >
            {t.email.mailto}
            <Mail size={12} aria-hidden="true" />
          </a>
        </span>
      )}
    </span>
  );
}
