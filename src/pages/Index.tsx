import { HeroSection } from '@/components/HeroSection';
import { ProductsGrid } from '@/components/ProductsGrid';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { ScheduleMeeting } from '@/components/ScheduleMeeting';
import { Footer } from '@/components/Footer';
import { AIChatWidget } from '@/components/AIChatWidget';

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <ProductsGrid />
      <WhyChooseUs />
      <ScheduleMeeting />
      <Footer />
      <AIChatWidget />
    </main>
  );
};

export default Index;
