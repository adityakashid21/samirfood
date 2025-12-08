import { CheckCircle2, Leaf, Package, Truck, Shield, Globe } from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: 'Farm Fresh Quality',
    description: 'Sourced directly from organic farms in Nashik, Maharashtra - the heart of agricultural excellence.',
  },
  {
    icon: Shield,
    title: 'Quality Assured',
    description: 'Rigorous quality control at every stage ensures only the finest produce reaches your destination.',
  },
  {
    icon: Package,
    title: 'Export-Grade Packaging',
    description: 'State-of-the-art cold chain packaging designed for long-distance international shipping.',
  },
  {
    icon: Truck,
    title: 'On-Time Delivery',
    description: 'Reliable logistics network guaranteeing timely delivery to ports and airports worldwide.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Serving clients across 50+ countries with customized export solutions and documentation.',
  },
  {
    icon: CheckCircle2,
    title: 'Certified Standards',
    description: 'FSSAI, APEDA, and GlobalGAP certified operations meeting international food safety standards.',
  },
];

export function WhyChooseUs() {
  return (
    <section id="about" className="py-20 md:py-32 bg-secondary/30">
      <div className="premium-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <span className="inline-block px-4 py-2 bg-background rounded-full text-sm font-medium text-muted-foreground mb-4">
                Why Choose Us
              </span>
              <h2 className="premium-heading text-3xl md:text-4xl lg:text-5xl mb-6">
                Excellence in Every
                <br />
                <span className="text-muted-foreground">Shipment We Make</span>
              </h2>
              <p className="premium-subtext text-lg">
                Based in Nashik, Maharashtra - India's premier agricultural region - we specialize in exporting premium-quality vegetables and fruits to international markets. Our commitment to quality, freshness, and reliability has made us a trusted partner for businesses worldwide.
              </p>
            </div>

            <div className="space-y-4">
              {['Stringent quality control processes', 'Temperature-controlled supply chain', 'Competitive international pricing', 'Dedicated account managers'].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, i) => (
              <div
                key={i}
                className="premium-card p-6 hover:shadow-medium transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
