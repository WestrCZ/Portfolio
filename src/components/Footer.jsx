import { MapPin } from "lucide-react";
import { profile } from "../data/portfolioData.js";

export default function Footer() {
  return (
    <footer className="px-6 py-8 border-t border-white/5">
      <div className="mx-auto max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs text-slate-600">
        <p>
          {"\u00A9"} {new Date().getFullYear()} {profile.name}. Postaveno v React + Vite +
          Tailwind.
        </p>
        <p className="inline-flex items-center gap-1.5 text-slate-700">
          <MapPin size={12} /> {profile.location}
        </p>
      </div>
    </footer>
  );
}