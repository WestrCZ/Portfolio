import { profile, skills, experience, projects } from "./data/portfolioData.js";
import RunicDivider from "./components/RunicDivider.jsx";
import NavBar from "./components/NavBar.jsx";
import TerminalBadge from "./components/TerminalBadge.jsx";
import Hero from "./components/Hero.jsx";
import SectionHeading from "./components/SectionHeading.jsx";
import ProjectCard from "./components/ProjectCard.jsx";
import ProjectSubCard from "./components/ProjectSubCard.jsx";
import ExperienceSection from "./components/ExperienceSection.jsx";
import ProjectSection from "./components/ProjectSection.jsx";
import StackSection from "./components/StackSection.jsx";
import ContactSection from "./components/ContactSection.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen font-body selection:bg-aurora/30">
      <NavBar />
      <main>
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
