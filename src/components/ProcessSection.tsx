import { Sprout, Package, Ship, CheckCircle } from 'lucide-react';

const steps = [
    {
        icon: Sprout,
        title: 'Farm Selection',
        description: 'We partner with certified farms in Nashik, ensuring the highest quality produce from seed to harvest.',
        color: 'from-fresh-green/20 to-fresh-green/5',
        iconColor: 'text-fresh-green',
    },
    {
        icon: CheckCircle,
        title: 'Quality Check',
        description: 'AI-powered quality inspection and manual verification ensure only premium grade products are selected.',
        color: 'from-fresh-orange/20 to-fresh-orange/5',
        iconColor: 'text-fresh-orange',
    },
    {
        icon: Package,
        title: 'Smart Packaging',
        description: 'Temperature-controlled packaging with real-time monitoring to maintain freshness throughout transit.',
        color: 'from-fresh-purple/20 to-fresh-purple/5',
        iconColor: 'text-fresh-purple',
    },
    {
        icon: Ship,
        title: 'Global Delivery',
        description: 'Fast, reliable shipping to 50+ countries with complete tracking and on-time delivery guarantee.',
        color: 'from-fresh-red/20 to-fresh-red/5',
        iconColor: 'text-fresh-red',
    },
];

export function ProcessSection() {
    return (
        <section className="py-24 bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            <div className="premium-container relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-fresh-purple/10 rounded-full mb-6">
                        <Sprout className="w-4 h-4 text-fresh-purple" />
                        <span className="text-sm font-medium text-fresh-purple">Our Process</span>
                    </div>
                    <h2 className="premium-heading text-4xl md:text-5xl mb-6">
                        From Farm to Your Doorstep
                    </h2>
                    <p className="premium-subtext text-lg">
                        A seamless, tech-enabled journey ensuring premium quality at every step
                    </p>
                </div>

                {/* Process Steps */}
                <div className="relative">
                    {/* Connection Line - Desktop */}
                    <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-fresh-green via-fresh-orange to-fresh-red opacity-20 -translate-y-1/2" style={{ top: '80px' }} />

                    {/* Steps Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            return (
                                <div
                                    key={index}
                                    className="relative group"
                                    style={{ animationDelay: `${index * 150}ms` }}
                                >
                                    {/* Card */}
                                    <div className="premium-card p-8 h-full relative overflow-hidden">
                                        {/* Background Gradient */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                        {/* Content */}
                                        <div className="relative z-10">
                                            {/* Step Number */}
                                            <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-secondary flex items-center justify-center opacity-50">
                                                <span className="text-2xl font-bold text-muted-foreground">
                                                    {index + 1}
                                                </span>
                                            </div>

                                            {/* Icon */}
                                            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                                <Icon className={`w-8 h-8 ${step.iconColor}`} />
                                            </div>

                                            {/* Title */}
                                            <h3 className="font-semibold text-xl text-foreground mb-3">
                                                {step.title}
                                            </h3>

                                            {/* Description */}
                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Arrow - Desktop Only */}
                                    {index < steps.length - 1 && (
                                        <div className="hidden lg:block absolute top-20 -right-4 z-20">
                                            <div className="w-8 h-8 rotate-45 bg-background border-r-2 border-t-2 border-muted-foreground/20" />
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center mt-16">
                    <p className="text-lg text-muted-foreground mb-6">
                        Ready to experience premium quality produce?
                    </p>
                    <button
                        onClick={() => window.open('https://calendar.google.com/calendar/appointments/schedules', '_blank')}
                        className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-large"
                    >
                        Schedule a Meeting
                        <Ship className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </section>
    );
}
