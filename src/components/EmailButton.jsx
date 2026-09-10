import { useEffect, useId, useRef, useState } from "react";
import { Mail } from "lucide-react";
import { useI18n } from "../i18n/I18nProvider.jsx";
import { trackEvent } from "../utils/analytics.js";

// How long the "Otevřít v e-mailovém klientu" fallback link stays visible
// after a successful copy. The "Zkopírováno!" label on the main button
// shares the same timer, so both reset together.
const REVEAL_DURATION_MS = 4000;

// `email` is expected as a full "mailto:..." URI (as already stored on
// profile.links.email). For the clipboard we only want the bare address,
// so we strip the "mailto:" prefix (and any query string, e.g.
// "?subject=...") back out here.
function extractEmailAddress(mailtoHref) {
  return mailtoHref.replace(/^mailto:/i, "").split("?")[0];
}

// Universal e-mail action used in Hero, NavBar and ContactSection. Each
// section keeps its own visual identity for the *primary* button via
// `className` — this component only owns the copy/mailto/tooltip
// *behavior*. The secondary "open in mail client" fallback is intentionally
// NOT customizable per section: it's always styled as a plain text link
// (matching ProjectCard's link style) rather than a full button.
export default function EmailButton({
  location, // "hero" | "navbar" | "contact" — used for GoatCounter events
  email, // full "mailto:..." string
  label,
  icon: Icon,
  iconSize = 16,
  className = "",
  wrapperClassName = "",
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

  async function handleCopyClick() {
    const address = extractEmailAddress(email);

    try {
      await navigator.clipboard.writeText(address);
    } catch {
      // Clipboard API can fail (insecure context, denied permission,
      // unsupported browser, ...). The mailto fallback link below still
      // gets the visitor to the same place, so we just carry on.
    }

    trackEvent(`${location}-email-copy`);

    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setCopied(true);
    timeoutRef.current = setTimeout(() => setCopied(false), REVEAL_DURATION_MS);
  }

  function handleMailtoClick() {
    // This is a REAL <a href="mailto:..."> element — the browser handles
    // the actual navigation to the mail client natively (no preventDefault
    // here, no manual window.location assignment). That's the most
    // reliable way to trigger mailto: across browsers/OSes; we only need
    // to piggyback tracking + local state reset on the same click.
    //
    // Escalation rule: a mailto click counts ONLY the mailto event, never
    // a second copy event — trackEvent is called exactly once here.
    trackEvent(`${location}-email-mailto`);

    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setCopied(false);
    onMailtoTriggered?.();
  }

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
          // Anchored to the right edge (not centered) so it can never
          // overflow past the right side of the viewport when the button
          // sits close to it (e.g. in the navbar).
          className="pointer-events-none absolute -top-9 right-0 z-10 whitespace-nowrap rounded-md border border-white/10 bg-base-950 px-2.5 py-1.5 font-mono text-[11px] text-slate-300 shadow-lg shadow-black/30"
        >
          {t.email.tooltip}
        </span>
      )}

      {copied && (
        <a
          href={email}
          onClick={handleMailtoClick}
          // Same "anchor to the right edge" fix as the tooltip above — this
          // is what was previously popping up off-screen (and therefore
          // unclickable) on mobile, since it was centered under a much
          // narrower button near the right edge of the screen.
          className="absolute right-0 top-full z-20 mt-2 inline-flex items-center gap-1.5 whitespace-nowrap font-body text-xs text-slate-400 transition-colors hover:text-gold"
        >
          {t.email.mailto}
          <Mail size={12} aria-hidden="true" />
        </a>
      )}
    </span>
  );
}
