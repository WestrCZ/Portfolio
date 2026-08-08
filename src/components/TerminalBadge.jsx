import { profile } from "../data/portfolioData.js";

// Compact terminal widget — the console motif kept as a small accent.
export default function TerminalBadge() {
  return (
    <div className="w-full max-w-xs rounded-lg border border-white/10 bg-base-900/70 backdrop-blur overflow-hidden shadow-xl shadow-black/30 font-mono text-xs">
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/10 bg-base-800/60">
        <span className="h-2 w-2 rounded-full bg-ember/70" />
        <span className="h-2 w-2 rounded-full bg-gold/70" />
        <span className="h-2 w-2 rounded-full bg-aurora/70" />
        <span className="ml-2 text-[10px] text-slate-500">session — zsh</span>
      </div>
      <div className="px-3.5 py-3 leading-relaxed">
        <p className="text-slate-500">
          <span className="text-slate-600">$ </span>whoami
        </p>
        <p className="text-aurora mt-0.5">&gt; {profile.name} — {profile.title}</p>
        <p className="text-fjord">
          &gt; status: <span className="text-aurora">available</span>
          <span className="animate-blink text-aurora">_</span>
        </p>
      </div>
    </div>
  );
}