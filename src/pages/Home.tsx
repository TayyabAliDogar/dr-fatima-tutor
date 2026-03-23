import { Header } from "@/components/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { AdvantageSection } from "@/components/sections/AdvantageSection";
import { ExpertiseSection } from "@/components/sections/ExpertiseSection";
import { MethodologySection } from "@/components/sections/MethodologySection";
import { SuccessSection } from "@/components/sections/SuccessSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { useEffect } from "react";

export default function Home() {
  
  // Inject JSON-LD Schema for SEO
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "International Online Science & Medical Tutoring",
      "description": "Expert guidance for O/A Levels, IGCSE, GCSE (AQA/CIE/Edexcel), MCAT, and Medical Subjects by a Medical Doctor.",
      "provider": {
        "@type": "Person",
        "name": "Dr. Fatima Zahra",
        "jobTitle": "Doctor of Physical Therapy & Educational Specialist"
      }
    };
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-secondary/30 selection:text-primary">
      <Header />
      
      <main>
        <HeroSection />
        <AdvantageSection />
        <ExpertiseSection />
        <MethodologySection />
        <SuccessSection />
        <ContactSection />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
