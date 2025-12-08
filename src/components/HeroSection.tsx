import { Button } from '@/components/ui/button';
import { Hero3DScene } from '@/components/Hero3DScene';
import { ArrowDown } from 'lucide-react';

export function HeroSection() {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  const openCalendar = () => {
    window.open('https://calendar.google.com/calendar/appointments/schedules', '_blank');
  };

  return (
    <section className="relative min-h-screen flex flex-col gradient-mesh overflow-hidden">
      {/* Navigation */}
      <nav className="relative z-10 py-6">
        <div className="premium-container flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-lg">FF</span>
            </div>
            <span className="font-display font-semibold text-xl text-foreground">FreshFarms</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#products" className="text-muted-foreground hover:text-foreground transition-colors">Products</a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
            <a href="#schedule" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          </div>
          <Button variant="premium" onClick={openCalendar}>
            Schedule Meeting
          </Button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="flex-1 flex items-center">
        <div className="premium-container">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full">
                  <span className="w-2 h-2 bg-fresh-green rounded-full animate-pulse"></span>
                  <span className="text-sm text-muted-foreground font-medium">Export Quality Assured</span>
                </div>
                <h1 className="premium-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight">
                  Premium Farm-Fresh
                  <br />
                  <span className="text-muted-foreground">Vegetables & Fruits</span>
                  <br />
                  from India
                </h1>
                <p className="premium-subtext text-lg md:text-xl max-w-xl mx-auto lg:mx-0">
                  Supplying quality produce to international clients with tech-enabled experience. From Nashik's fertile lands to your destination.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button variant="cta" size="xl" onClick={openCalendar}>
                  Schedule a Meeting
                </Button>
                <Button variant="premium-outline" size="xl" onClick={scrollToProducts}>
                  View Products
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
                <div>
                  <p className="font-display text-2xl md:text-3xl font-bold text-foreground">50+</p>
                  <p className="text-sm text-muted-foreground">Countries Served</p>
                </div>
                <div>
                  <p className="font-display text-2xl md:text-3xl font-bold text-foreground">1000+</p>
                  <p className="text-sm text-muted-foreground">Tons Monthly</p>
                </div>
                <div>
                  <p className="font-display text-2xl md:text-3xl font-bold text-foreground">99%</p>
                  <p className="text-sm text-muted-foreground">Quality Rate</p>
                </div>
              </div>
            </div>

            {/* 3D Scene */}
            <div className="order-1 lg:order-2">
              <Hero3DScene />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <button
          onClick={scrollToProducts}
          className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
        >
          <ArrowDown className="w-5 h-5 text-foreground" />
        </button>
      </div>
    </section>
  );
}
