/**
 * DESIGN: Deep Navy Command — Milano
 * Main page assembling all sections in order:
 * Navbar → HeroSection → TrustBadgesStrip → StatsStrip → AboutSection → WhyMilanoSection → 
 * ProductsSection → HowItWorksSection → LicensesSection → CTABanner → FAQSection → ContactSection → Footer
 */
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBadgesStrip from "@/components/TrustBadgesStrip";
import StatsStrip from "@/components/StatsStrip";
import AboutSection from "@/components/AboutSection";
import WhyMilanoSection from "@/components/WhyMilanoSection";
import ProductsSection from "@/components/ProductsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import LicensesSection from "@/components/LicensesSection";
import CTABanner from "@/components/CTABanner";

import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0A1628" }}>
      <Navbar />
      <HeroSection />
      <TrustBadgesStrip />
      <StatsStrip />
      <AboutSection />
      <WhyMilanoSection />
      <ProductsSection />
      <HowItWorksSection />
      <LicensesSection />
      <CTABanner />

      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
