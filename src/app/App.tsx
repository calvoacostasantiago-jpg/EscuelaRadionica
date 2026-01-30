import Header from "@/app/components/Header";
import HeroSection from "@/app/components/HeroSection";
import ModulesSection from "@/app/components/ModulesSection";
import AboutSection from "@/app/components/AboutSection";
import Footer from "@/app/components/Footer";
import FloatingWhatsApp from "@/app/components/FloatingWhatsApp";

export default function App() {
  return (
    <div className="min-h-screen bg-[#2e0d4b] overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <ModulesSection />
        <AboutSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}