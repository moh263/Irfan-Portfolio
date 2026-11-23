import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { TornCollageSection } from './components/sections/TornCollageSection';
import { StudioSection } from './components/sections/StudioSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { ContactSection } from './components/sections/ContactSection';

export function App() {
  return (
    <div className="relative min-h-screen bg-[#EDEAE4] text-[#111111] overflow-x-hidden selection:bg-[#FF1111] selection:text-white">
      {/* Scroll-aware Editorial Navbar */}
      <Navbar />

      {/* Main Landing & Editorial Sections */}
      <main className="relative">
        {/* Exact Poster Hero: Meta Bar + PORTFOLIO + 3-Col Identity Grid */}
        <HeroSection />

        {/* Torn Paper Ripped Collage Section with 3D Cutout Portrait & Red Outline */}
        <TornCollageSection />

        {/* The Studio: Tilted Polaroids & Creative Environment */}
        <StudioSection />

        {/* Selected Works Dossier Archive */}
        <ProjectsSection />
      </main>

      {/* Magazine Back-Cover Contact & Colophon Footer */}
      <ContactSection />
    </div>
  );
}

export default App;
