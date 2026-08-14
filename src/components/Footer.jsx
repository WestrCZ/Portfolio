import { MapPin } from "lucide-react";
import { useI18n } from "../i18n/I18nProvider.jsx";

export default function Footer() {
  const { t, data } = useI18n();
  const { profile } = data;

  return (
    <footer className="px-6 py-8 border-t border-white/5">
      <div className="mx-auto max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs text-slate-600">
        <p>
          {"\u00A9"} {new Date().getFullYear()} {profile.name}. {t.footer.builtWith}
        </p>
        <p className="inline-flex items-center gap-1.5 text-slate-700">
          <MapPin size={12} aria-hidden="true" /> {profile.location}
        </p>
      </div>
    </footer>
  );
}
