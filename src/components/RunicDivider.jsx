// Signature element: a thin line with a initials in runes at its
// center reused as the section divider throughout the page instead of a plain border.

export default function RunicDivider() {
  return (
    <div className="flex items-center gap-3 my-16 sm:my-20 text-gold/70" aria-hidden="true">
      {/* Left line – transitions from run color (currentColor) to transparent */}
      <span className="h-px flex-1 bg-gradient-to-r from-transparent to-current opacity-70" />

      {/* Rune JERA */}
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {/* uppper part */}
        <path d="M 14 3.5 L 5 9.5 L 12.5 14.5" />
        {/* lower part */}
        <path d="M 11.5 9.5 L 19 14.5 L 10 20.5" />
      </svg>
      
      {/* Rune HAGALAZ */}
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {/* Left vertical line */}
        <line x1="7" y1="3" x2="7" y2="21" />
        {/* Right vertical line */}
        <line x1="17" y1="3" x2="17" y2="21" />
        {/* Slanted bar */}
        <line x1="7" y1="9" x2="17" y2="15" />
      </svg>

      {/* Right line – transitions from run color (currentColor) to transparent */}
      <span className="h-px flex-1 bg-gradient-to-l from-transparent to-current opacity-70" />
    </div>
  );
}