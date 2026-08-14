import { useI18n } from "./i18n/I18nProvider.jsx";
import RunicDivider from "./components/RunicDivider.jsx";
import NavBar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import ExperienceSection from "./components/ExperienceSection.jsx";
import ProjectSection from "./components/ProjectSection.jsx";
import StackSection from "./components/StackSection.jsx";
import ContactSection from "./components/ContactSection.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen font-body selection:bg-aurora/30">
      {/* Visually hidden until focused — first Tab stop for keyboard users,
          lets them jump straight past the nav to the page content. */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-base-950"
      >
        {t.skipLink}
      </a>
      <NavBar />
      <main id="main-content">
        <Hero />
        <RunicDivider />
        <ExperienceSection />
        <RunicDivider />
        <ProjectSection />
        <RunicDivider />
        <StackSection />
        <RunicDivider />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
