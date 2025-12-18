import { useEffect, useRef, useState } from 'react';
import { TrendingUp, Users, Globe, Award } from 'lucide-react';

interface StatItemProps {
    icon: React.ReactNode;
    value: number;
    suffix?: string;
    prefix?: string;
    label: string;
    description: string;
}

function StatItem({ icon, value, suffix = '', prefix = '', label, description }: StatItemProps) {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        const duration = 2000; // 2 seconds
        const steps = 60;
        const increment = value / steps;
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
                setCount(value);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, duration / steps);

        return () => clearInterval(timer);
    }, [isVisible, value]);

    return (
        <div
            ref={ref}
            className="premium-card p-8 text-center group"
        >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-fresh-green/20 to-fresh-orange/20 mb-6 group-hover:scale-110 transition-transform duration-300">
                {icon}
            </div>
            <div className="mb-2">
                <span className="premium-heading text-5xl md:text-6xl bg-gradient-to-r from-fresh-green to-fresh-orange bg-clip-text text-transparent">
                    {prefix}{count.toLocaleString()}{suffix}
                </span>
            </div>
            <h3 className="font-semibold text-xl text-foreground mb-2">{label}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
        </div>
    );
}

export function StatsSection() {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-20 left-10 w-72 h-72 bg-fresh-green/10 rounded-full blur-3xl animate-pulse-soft" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-fresh-orange/10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '1s' }} />
            </div>

            <div className="premium-container relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-fresh-orange/10 rounded-full mb-6">
                        <TrendingUp className="w-4 h-4 text-fresh-orange" />
                        <span className="text-sm font-medium text-fresh-orange">Growing Together</span>
                    </div>
                    <h2 className="premium-heading text-4xl md:text-5xl mb-6">
                        Numbers That Speak
                    </h2>
                    <p className="premium-subtext text-lg">
                        Our commitment to excellence reflected in our achievements
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <StatItem
                        icon={<Globe className="w-8 h-8 text-fresh-green" />}
                        value={50}
                        suffix="+"
                        label="Countries Served"
                        description="Delivering premium produce worldwide"
                    />
                    <StatItem
                        icon={<Users className="w-8 h-8 text-fresh-orange" />}
                        value={500}
                        suffix="+"
                        label="Happy Clients"
                        description="Building lasting partnerships"
                    />
                    <StatItem
                        icon={<TrendingUp className="w-8 h-8 text-fresh-green" />}
                        value={1000}
                        suffix="+"
                        label="Tons Monthly"
                        description="Fresh produce exported"
                    />
                    <StatItem
                        icon={<Award className="w-8 h-8 text-fresh-orange" />}
                        value={99}
                        suffix="%"
                        label="Quality Rate"
                        description="Consistently premium quality"
                    />
                </div>

                {/* Additional Stats Bar */}
                <div className="mt-16 premium-card p-8">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div>
                            <p className="text-3xl font-bold text-foreground mb-2">15+</p>
                            <p className="text-sm text-muted-foreground">Years Experience</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-foreground mb-2">24/7</p>
                            <p className="text-sm text-muted-foreground">Customer Support</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-foreground mb-2">100%</p>
                            <p className="text-sm text-muted-foreground">Export Quality</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-foreground mb-2">ISO</p>
                            <p className="text-sm text-muted-foreground">Certified Operations</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
