import HeroSection from "@/components/landing/HeroSection";
import IdentificationSection from "@/components/landing/IdentificationSection";
import ObjectionSection from "@/components/landing/ObjectionSection";
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
import FAQSection from "@/components/landing/FAQSection";
import HowToStartSection from "@/components/landing/HowToStartSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import ContactSection from "@/components/landing/ContactSection";
import logoBlue from "@/assets/logo_2.png";
import videoThumbInstitucional from "@/assets/video-thumb-institucional.jpg";
import videoThumbCultura from "@/assets/video-thumb-cultura.jpg";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <IdentificationSection />
      <ObjectionSection />
      <AuthoritySection />
      <ExpansionSection />
      <VideoSection
        title="Conheça o Universo AGV"
        subtitle="O Universo AGV possui mais de 10 anos de atuação e uma rede nacional de consultores em constante crescimento."
        id="video-institucional"
        thumbnail={videoThumbInstitucional}
      />
      <CredibilitySection />
      <MarketSection />
      <StructureSection />
      <TrafficSection />
      <PortfolioSection />
      <CareerSection />
      <TestimonialsSection />
      <VideoSection
        title="Nossa cultura"
        subtitle="Time, eventos, crescimento e expansão nacional. Faça parte dessa história."
        id="video-cultura"
        thumbnail={videoThumbCultura}
      />
      <FAQSection />
      <HowToStartSection />
      <ContactSection />
      <FinalCTASection />


      <footer className="section-padding-sm bg-foreground text-primary-foreground">
        <div className="container-narrow text-center">
          <img src={logoBlue} alt="Universo AGV" className="h-12 mx-auto mb-4 brightness-0 invert" />
          <p className="opacity-60 text-sm">
            © {new Date().getFullYear()} Universo AGV. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
