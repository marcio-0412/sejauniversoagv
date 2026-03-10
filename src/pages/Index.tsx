import HeroSection from "@/components/landing/HeroSection";
import AuthoritySection from "@/components/landing/AuthoritySection";
import ExpansionSection from "@/components/landing/ExpansionSection";
import VideoSection from "@/components/landing/VideoSection";
import CredibilitySection from "@/components/landing/CredibilitySection";
import MarketSection from "@/components/landing/MarketSection";
import StructureSection from "@/components/landing/StructureSection";
import TrafficSection from "@/components/landing/TrafficSection";
import PortfolioSection from "@/components/landing/PortfolioSection";
import CareerSection from "@/components/landing/CareerSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import HowToStartSection from "@/components/landing/HowToStartSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import ContactSection from "@/components/landing/ContactSection";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      {/* 1 */}
      <HeroSection />
      {/* 2 */}
      <AuthoritySection />
      {/* 3 */}
      <ExpansionSection />
      {/* 4 */}
      <VideoSection
        title="Conheça o Universo AGV"
        subtitle="O Universo AGV possui mais de 10 anos de atuação e uma rede nacional de consultores em constante crescimento."
        id="video-institucional"
      />
      {/* 5 */}
      <CredibilitySection />
      {/* 6 */}
      <MarketSection />
      {/* 7 */}
      <StructureSection />
      {/* 8 */}
      <TrafficSection />
      {/* 9 */}
      <PortfolioSection />
      {/* 10 */}
      <CareerSection />
      {/* 11 */}
      <TestimonialsSection />
      {/* 12 */}
      <VideoSection
        title="Nossa cultura"
        subtitle="Time, eventos, crescimento e expansão nacional. Faça parte dessa história."
        id="video-cultura"
      />
      {/* 13 */}
      <HowToStartSection />
      {/* 14 */}
      <FinalCTASection />
      {/* 15 */}
      <ContactSection />

      {/* Footer */}
      <footer className="section-padding-sm bg-foreground text-primary-foreground">
        <div className="container-narrow text-center">
          <p className="text-2xl font-bold mb-2">Universo AGV</p>
          <p className="opacity-60 text-sm">
            © {new Date().getFullYear()} Universo AGV. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
