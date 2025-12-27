import HeroSection from "@/components/landing/HeroSection";
import DiagnosisSection from "@/components/landing/DiagnosisSection";
import SuperProfileSection from "@/components/landing/SuperProfileSection";
import AISolutionSection from "@/components/landing/AISolutionSection";
import MatchingWorkflowSection from "@/components/landing/MatchingWorkflowSection";

export default function Home() {
  return (
    <div className="pt-16 md:pt-20">
      <HeroSection />
      <DiagnosisSection />
      <SuperProfileSection />
      <MatchingWorkflowSection />
      <AISolutionSection />
    </div>
  );
}
