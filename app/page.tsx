
import React from 'react';
import SiteHeader from "@/components/layout/site-header";
import SiteFooter from "@/components/layout/site-footer";
import StatsSection from "@/components/landing/StatsSection";
import FeatureSection from "@/components/landing/FeatureSection";
import TestimonialSection from "@/components/landing/TestimonialSection";
import FaqSection from "@/components/landing/FaqSection";
import HeroSection from "@/components/landing/HeroSection";
import CtaSection from "@/components/landing/CtaSection";

const Index: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Stats Section */}
        <StatsSection />
        
        {/* Features Section */}
        <FeatureSection />
        
        {/* Testimonials Section */}
        <TestimonialSection />
        
        {/* FAQ Section */}
        <FaqSection />
        
        {/* CTA Section */}
        <CtaSection />
      </main>

      <SiteFooter />
    </div>
  );
};

export default Index;
