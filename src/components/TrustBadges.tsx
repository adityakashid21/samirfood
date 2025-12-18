import { Shield, Truck, Award, Leaf, Clock, HeartHandshake } from 'lucide-react';

const badges = [
    {
        icon: Shield,
        title: 'ISO Certified',
        description: 'International quality standards',
    },
    {
        icon: Leaf,
        title: '100% Organic',
        description: 'Naturally grown produce',
    },
    {
        icon: Award,
        title: 'Export Quality',
        description: 'Premium grade guaranteed',
    },
    {
        icon: Truck,
        title: 'Fast Delivery',
        description: 'On-time shipping worldwide',
    },
    {
        icon: Clock,
        title: '24/7 Support',
        description: 'Always here to help',
    },
    {
        icon: HeartHandshake,
        title: 'Trusted Partner',
        description: '500+ satisfied clients',
    },
];

export function TrustBadges() {
    return (
        <section className="py-16 bg-foreground text-background">
            <div className="premium-container">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {badges.map((badge, index) => {
                        const Icon = badge.icon;
                        return (
                            <div
                                key={index}
                                className="text-center group cursor-pointer"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-background/10 mb-3 group-hover:bg-background/20 group-hover:scale-110 transition-all duration-300">
                                    <Icon className="w-6 h-6 text-background" />
                                </div>
                                <h3 className="font-semibold text-sm mb-1">{badge.title}</h3>
                                <p className="text-xs text-background/70">{badge.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
