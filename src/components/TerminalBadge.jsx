import { useRef, useState } from "react";
import { useI18n } from "../i18n/I18nProvider.jsx";

// Known Linux commands the hidden prompt recognizes. Only the first
// whitespace-separated token of whatever was typed is checked against this
// list (so e.g. "cd .." is still recognized via "cd"), matching how a real
// shell would resolve the command name regardless of its arguments.
const KNOWN_COMMANDS = [
  "ls",
  "cd",
  "sudo",
  "help",
  "cat",
  "whoami",
  "clear",
  "matrix",
  "pwd",
  "echo",
  "exit",
  "man",
  "grep",
  "ssh",
  "top",
  "ps",
];

// Only the most recent MAX_VISIBLE_ENTRIES attempts stay on screen — the
// static "about me" content above never scrolls away, but older
// command/response pairs are dropped entirely (not just scrolled out of
// view) as new ones come in.
const MAX_VISIBLE_ENTRIES = 2;

// Compact terminal widget — the console motif kept as a small accent.
// "whoami" and "session — zsh" are intentionally left untranslated: they're
// terminal syntax / flavor text, not localizable UI copy. Only the status
// label and value are localized.
//
// Easter egg: below the static content there is a real, working command
// prompt (desktop only). Typing a known Linux command prints "Access
// granted" and permanently locks the prompt (no further input accepted);
// anything else prints "Access denied" and lets the visitor keep trying.
export default function TerminalBadge() {
  const { t, data } = useI18n();
  const { profile } = data;
  const [history, setHistory] = useState([]);
  const [locked, setLocked] = useState(false);
  const [value, setValue] = useState("");
  const logRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    if (locked) return;

    const command = value.trim();
    if (!command) return;

    const normalized = command.toLowerCase().split(/\s+/)[0];
    const granted = KNOWN_COMMANDS.includes(normalized);

    setHistory((prev) => [...prev, { command, granted }].slice(-MAX_VISIBLE_ENTRIES));
    setValue("");

    if (granted) {
      // First correct command locks the terminal for good.
      setLocked(true);
    }

    requestAnimationFrame(() => {
      if (logRef.current) {
        logRef.current.scrollTop = logRef.current.scrollHeight;
      }
    });
  }

  return (
    <div className="w-full max-w-xs rounded-lg border border-white/10 bg-base-900/70 backdrop-blur overflow-hidden shadow-xl shadow-black/30 font-mono text-[11px] sm:text-xs max-h-[260px] sm:max-h-none flex flex-col">
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/10 bg-base-800/60 shrink-0" aria-hidden="true">
        <span className="h-2 w-2 rounded-full bg-ember/70" />
        <span className="h-2 w-2 rounded-full bg-gold/70" />
        <span className="h-2 w-2 rounded-full bg-aurora/70" />
        <span className="ml-2 text-[10px] text-slate-500">session — zsh</span>
      </div>
      <div ref={logRef} className="p-3 sm:p-5 leading-relaxed overflow-x-auto overflow-y-auto">
        {/* Static content — always visible, never part of the capped
            history window below. */}
        <p className="text-slate-500">
          <span className="text-slate-600">$ </span>whoami
        </p>
        <p className="text-aurora mt-0.5 break-words">&gt; {profile.name} — {profile.title}</p>
        <p className="text-fjord break-words">
          &gt; {t.terminal.status}: <span className="text-aurora">{t.terminal.available}</span>
          {history.length === 0 && (
            <span className="animate-blink text-aurora" aria-hidden="true">_</span>
          )}
        </p>

        {/* Capped history — only the last MAX_VISIBLE_ENTRIES attempts are
            kept; anything older is dropped as new ones arrive. */}
        {history.map((entry, index) => (
          <div key={index} className="mt-1.5">
            <p className="text-slate-500 break-words">
              <span className="text-slate-600">$ </span>
              {entry.command}
            </p>
            <p className={`break-words ${entry.granted ? "text-aurora" : "text-ember"}`}>
              &gt;{" "}
              {entry.granted
                ? "Access granted. You found the secret terminal!"
                : "Access denied. Enter a valid command."}
            </p>
          </div>
        ))}

        {locked ? (
          <p className="mt-1.5 break-words text-slate-600">
            <span className="text-slate-700">$ </span>session locked
          </p>
        ) : (
          // Interactive prompt — desktop only. Rendered with `hidden
          // sm:flex` so it doesn't exist as a tappable element at all on
          // mobile viewports, which keeps a stray tap on the terminal from
          // summoning the on-screen keyboard.
          <form onSubmit={handleSubmit} className="hidden sm:flex items-center mt-1.5">
            <span className="text-slate-600 shrink-0">$ </span>
            <input
              type="text"
              value={value}
              onChange={(event) => setValue(event.target.value)}
              spellCheck="false"
              autoComplete="off"
              autoCapitalize="off"
              autoCorrect="off"
              aria-label="Terminal command input"
              className="flex-1 ml-1 bg-transparent border-none outline-none text-slate-300 caret-aurora placeholder:text-slate-700"
            />
          </form>
        )}
      </div>
    </div>
  );
}
