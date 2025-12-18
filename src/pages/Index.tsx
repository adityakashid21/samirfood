import { HeroSection } from '@/components/HeroSection';
import { TrustBadges } from '@/components/TrustBadges';
import { ProductsGrid } from '@/components/ProductsGrid';
import { StatsSection } from '@/components/StatsSection';
import { ProcessSection } from '@/components/ProcessSection';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { Testimonials } from '@/components/Testimonials';
import { FAQSection } from '@/components/FAQSection';
import { CTASection } from '@/components/CTASection';
import { ScheduleMeeting } from '@/components/ScheduleMeeting';
import { Footer } from '@/components/Footer';
import { AIChatWidget } from '@/components/AIChatWidget';

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <TrustBadges />
      <ProductsGrid />
      <StatsSection />
      <ProcessSection />
      <WhyChooseUs />
      <Testimonials />
      <FAQSection />
      <CTASection />
      <ScheduleMeeting />
      <Footer />
      <AIChatWidget />
    </main>
  );
};

export default Index;
