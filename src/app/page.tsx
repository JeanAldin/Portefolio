import { ContactSection } from "@/components/sections/ContactSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { TrainingSection } from "@/components/sections/TrainingSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <TrainingSection />
      <EducationSection />
      <ContactSection />
    </>
  );
}
