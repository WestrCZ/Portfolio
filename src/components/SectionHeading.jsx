// Reused by every section (Experience, Projects, Stack, Contact) so the
// eyebrow + title style only has to be defined once.
export default function SectionHeading({ eyebrow, title }) {
  return (
    <div className="mb-10">
      <p className="font-mono text-xs text-gold mb-2 tracking-wide">{eyebrow}</p>
      <h2 className="font-display font-semibold text-2xl sm:text-3xl text-bone">
        {title}
      </h2>
    </div>
  );
}
